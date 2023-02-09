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
      </Head>
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {JSON.parse(projList).map((project) => (
          <li
            className="max-w-sm rounded overflow-hidden shadow-lg m-2 transform transition duration-300 hover:scale-105"
            key={project.title}
          >
            <img // TO DO: Change img into next/Image
              className="w-full h-48 object-cover"
              src={project.image}
              loading="lazy"
              alt={""}
            />
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
