import "@/styles/globals.css";
import { GralLayout } from "../components/layouts/GralLayout";
import LayoutMenuAndFooter from "../components/layouts/LayoutMenuAndFooter";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <GralLayout>
      <LayoutMenuAndFooter>
        <Component {...pageProps} />
        <Analytics />
      </LayoutMenuAndFooter>
    </GralLayout>
  );
}
