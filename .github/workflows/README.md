# GitHub Actions — Blog generator

Automation for [scripts/scrape-blog.mjs](../../scripts/scrape-blog.mjs).

## Schedule

| Day | UTC | ARG (UTC-3) | Track |
| --- | ---- | ----------- | ----- |
| Monday | 11:00 | 08:00 | `frontend` (React / Next.js / TypeScript / performance) |
| Thursday | 11:00 | 08:00 | `ai` (LLMs in apps, RAG, AI SDK, prompt engineering) |

Defined in [generate-blog.yml](./generate-blog.yml) → `on.schedule.cron: "0 11 * * 1,4"`.

## Manual trigger

GitHub UI → **Actions** tab → **Generate Blog Post** → **Run workflow**.

Optional inputs:

- `dry_run` — `"true"` logs the payload but does NOT publish.
- `track` — force `"frontend"` or `"ai"` (overrides the day-of-week default).

## Required secrets

Add these in **GitHub → Settings → Secrets and variables → Actions → Repository secrets**:

| Secret | Value |
| ------ | ----- |
| `GROQ_API_KEY` | Your Groq API key (from console.groq.com). Same value as in your local `.env`. |
| `BLOG_API_URL` | `https://www.exequielsosa.com.ar/api/blog/create` (PRODUCTION endpoint, not localhost). |
| `BLOG_API_KEY` | The shared secret used by `/api/blog/create` to authenticate the POST. Must match the `BLOG_API_KEY` env var configured in Vercel. |

> ⚠️ The Action does **not** need Supabase keys. The API route on Vercel does the DB insert, using the `SUPABASE_SERVICE_KEY` configured there.

## Required Vercel env vars

The Action publishes against the Vercel deployment, so Vercel needs all these
configured (Production scope):

| Variable | Source |
| -------- | ------ |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (safe for client) |
| `SUPABASE_SERVICE_KEY` | Supabase service_role key (server-only, bypasses RLS) |
| `BLOG_API_KEY` | Same shared secret used by the Action |
| `EMAIL`, `EMAIL_PASS`, `EMAIL_TO` | Contact form (existing) |

## Outputs and observability

- Each run uploads `blog-generator.log` as an artifact (retained 30 days).
- Failures stop the workflow with exit code 1 — visible in the Actions list.
- The script logs the chosen track, RSS feed, generated title, slug, and the
  final API response. Useful for debugging when a run fails.

## Troubleshooting

| Symptom | Likely cause |
| ------- | ------------ |
| `❌ Failed to fetch feed ...` | RSS source temporarily down. The script falls back to a topic if the feed yields nothing relevant. |
| `❌ Article generation failed or returned invalid JSON` | Groq returned malformed output. The script has a sanitizer fallback; if it still fails, check the log artifact for the raw output. |
| `❌ Publish failed: Blog API error 401` | `BLOG_API_KEY` mismatch between GitHub secret and Vercel env var. |
| `❌ Publish failed: Blog API error 409` | Duplicate slug — extremely rare because slugs include a timestamp. |
| `❌ Publish failed: ... ECONNREFUSED` | `BLOG_API_URL` still points to `localhost`. Update the GitHub secret to the production URL. |
| `❌ Article generation failed ... rate limit` | Groq free tier exhausted. Wait or upgrade. |
