import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "@/components/date";

export default function Archive({ data }) {
  return (
    <Layout>
      <Head>
        <title>Justin Zhu - Blog</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section>
        <h1 className="text-2xl font-bold">Blog Archive</h1>
        <ul className="p-6 divide-y">
          {JSON.parse(data).map(({ id, date, title }) => (
            <li className="py-1" key={id}>
              <Link className="text-black font-bold" href={`/blog/${id}`}>
                {title}
              </Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  const data = JSON.stringify(allPostsData);
  return {
    props: {
      data,
    },
  };
}
