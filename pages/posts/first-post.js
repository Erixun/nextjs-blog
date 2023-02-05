import Layout from "../../components/layout.js";
import Head from "next/head.js";
import Script from "next/script";
import Link from "next/link";

export default function FirstPost() {
  return (
    <Layout>
      {/* // <> */}
      <Head>
        <title>First Post</title>
      </Head>
      {/*How to load 3rd party scripts: */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      {/* </> */}
    </Layout>
  );
}
