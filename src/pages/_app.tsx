import "@/styles/app.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/layout";
import { meta } from "@/constants";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta.title}</title>
        <meta
          key={"description"}
          name="description"
          content={meta.description}
        />
        <meta key={"description"} name="keywords" content={meta.keywords} />
        <meta name="robots" content={meta.robots} />
        {meta.favicon.map((favicon, index) => (
          <link
            key={index}
            rel={favicon.rel}
            type={favicon.type}
            sizes={favicon.sizes}
            href={favicon.href}
          />
        ))}
      </Head>
      <Layout>
        <Component {...pageProps} />
        <SpeedInsights />
      </Layout>
      <GoogleAnalytics strategy="lazyOnload" trackPageViews />
      <Analytics />
    </>
  );
}
