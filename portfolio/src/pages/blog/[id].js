import { getAllPostIds, getPostData } from "@/lib/posts";
import Layout from "../../components/layout";
import Head from "next/head";
import Date from "@/components/date";
import Link from "next/link";

export default function Post({ postData }) {
  postData = JSON.parse(postData)
  return (
    <Layout>
      <Head>
        <title>{postData.postData.title}</title>
      </Head>
      <section>
        <h1>{postData.postData.title}</h1>
        <Date dateString={postData.postData.date} />
        <div className="p-6">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </section>
      <h2>
        <Link className="text-gray-500" href="/">
          ← Back to home
        </Link>
      </h2>
    </Layout>
  );
}

// Gets a list of possible url names
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // param is the slug (the path fetched from getStaticPaths)
  const data = await getPostData(params.id);
  const postData = JSON.stringify(data)
  return {
    props: {
      postData
    },
  };
}
