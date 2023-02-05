import { getAllPostIds, getPostData } from "@/lib/posts";
import Layout from "../../components/layout";
import Head from "next/head";
import Date from "@/components/date";
import Link from "next/link";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div className="p-6">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </section>
      <h2>
        <Link className="text-gray-500" href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}

// Gets a list of possible url names
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) { // param is the slug (the path fetched from getStaticPaths)
  
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
