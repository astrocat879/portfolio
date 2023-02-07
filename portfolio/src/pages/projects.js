import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import Date from "@/components/date";
import Image from "next/image";
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
      <ul className="p-6 divide-y flex">
        {JSON.parse(projList).map((project) => (
          <li
            className="max-w-sm rounded overflow-hidden shadow-lg m-2"
            key={project.title}
          >
            <Image src={project.image} alt="" width="500" height="300" object-fit="cover" overflow="hidden"/>
            <div className="px-6 py-4">
              <Link
                className="text-black font-bold text-xl mb-2"
                href={project.link}
              >
                {project.title}
              </Link>
              <br />
              <div className="text-sm">
                <Date dateString={project.date} />
              </div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const projectData = await getProjectData();
  const projList = JSON.stringify(projectData);
  return {
    props: {
      projList,
    },
  };
}
