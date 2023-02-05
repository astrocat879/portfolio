import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Justin Zhu</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="flex justify-center">
        <h1 className="text-lg font-bold">
          About Me
        </h1>
      </div>
      <hr className="mt-0"/>
    </Layout>
  );
}
