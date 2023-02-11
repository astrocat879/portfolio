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
      <h1 className="text-2xl font-bold">Hi! I'm Justin.</h1>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:order-last">
          <img
            className="shadow rounded-full max-h-full w-auto border-none"
            src="https://i.imgur.com/Xpw8XcZ.jpg"
          ></img>
        </div>
        <div className="col-span-2">
          <p>
            I'm a Computer Science student at the University of
            Waterloo interested in full-stack, competitive programming, game development, and more. Check out my <Link className="text-black underline" href="/projects">projects</ Link>!
          </p>
          <p>
            Outside of programming, I'm trying my best to read more novels and learn Chinese. I write about hobbies, development, and more in my <Link className="text-black underline" href="/archive">blog</ Link> (it's a bit sparse right now though).
          </p>
          <i className="fa-brands fa-github"></i>
        </div>
        
      </div>
    </Layout>
  );
}
