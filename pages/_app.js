import "@/styles/globals.css";
import { GralLayout } from "../components/layouts/GralLayout";
import LayoutMenuAndFooter from "../components/layouts/LayoutMenuAndFooter";

export default function App({ Component, pageProps }) {
  return (
    <GralLayout>
      <LayoutMenuAndFooter>
        <Component {...pageProps} />
      </LayoutMenuAndFooter>
    </GralLayout>
  );
}
