-- ============================================================================
-- Blog posts schema for exequielsosa.com.ar
-- English-only, technical content (React/Next.js/TypeScript/Performance)
-- ============================================================================
--
-- HOW TO APPLY:
--   1. Open Supabase Dashboard → your project → SQL Editor
--   2. Paste this entire file
--   3. Click "Run"
--
-- After this, the table is queryable from the anon key (read-only via RLS)
-- and writable only from the service_role key (used by /api/blog/create).
-- ============================================================================

create table if not exists public.blog_posts (
  id              uuid primary key default gen_random_uuid(),
  slug            text not null unique,
  title           text not null,
  description     text,
  content         text not null,
  category        text,
  tags            text[] default '{}',
  image_url       text,
  image_alt       text,
  source_url      text,
  is_automated    boolean default true,
  is_published    boolean default true,
  published_at    date default current_date,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Indexes for the queries we'll actually run
create index if not exists blog_posts_published_at_idx
  on public.blog_posts (published_at desc);

create index if not exists blog_posts_category_idx
  on public.blog_posts (category);

create index if not exists blog_posts_is_published_idx
  on public.blog_posts (is_published);

-- Auto-update updated_at on every row update
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row
  execute function public.set_updated_at();

-- ============================================================================
-- Row Level Security (RLS)
-- ============================================================================
-- anon key: can read published posts only
-- service_role key: bypasses RLS, full read/write (used by the cron + /api)
-- ============================================================================

alter table public.blog_posts enable row level security;

drop policy if exists "Published posts are readable by anyone"
  on public.blog_posts;

create policy "Published posts are readable by anyone"
  on public.blog_posts
  for select
  using (is_published = true);
