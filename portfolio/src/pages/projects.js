import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import Date from "@/components/date";
import { getProjectData } from "@/lib/projects";

export default function Projects({ projList }) {
  return (
    <Layout>
      <Head>
        <title>Justin Zhu - Projects</title>
        <meta name="description" content="Portfolio site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1 className="text-lg font-bold">Projects</h1>
      <ul className="p-6 divide-y">
        {JSON.parse(projList).map((project) => (
          <li className="py-1" key={project.title}>
            <Link className="text-black" href={project.link}>
              {project.title}
            </Link>
            <br />
            <Date dateString={project.date} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const projectData = await getProjectData();
  const projList = JSON.stringify(projectData)
  return {
    props: {
      projList,
    },
  };
}