import "@/styles/globals.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { GralLayout } from "../components/layouts/GralLayout";
import LayoutMenuAndFooter from "../components/layouts/LayoutMenuAndFooter";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as gtag from "../gtag";
import { Loader } from "@/components";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <GralLayout>
        {isLoading ? (
          <Loader />
        ) : (
          <span data-aos="zoom-in">
            <LayoutMenuAndFooter>
              <Component {...pageProps} />
              <Analytics />
            </LayoutMenuAndFooter>
          </span>
        )}
      </GralLayout>
    </>
  );
}
