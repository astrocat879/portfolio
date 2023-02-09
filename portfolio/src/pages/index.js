import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Justin Zhu</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="grid-cols-2">
        <h1 className="text-2xl font-bold text-right">
          Hi, I'm Justin!
        </h1>
        <img className="shadow rounded-full max-h-full w-auto border-none" src=""></img>
        <p> I'm a first-year Computer Science student at the University of Waterloo. </p>
        <p> I love to engage with storytelling through reading and writing</p>
      </div>
    </Layout>
  );
}
