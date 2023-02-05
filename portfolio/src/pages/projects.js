import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
//useSWR allows the use of SWR inside function components
import useSWR from "swr";
import Date from "@/components/date";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());


// TO DO: MOVE THE API CALLING INTO A SEPARATE FILE AND PASS IN THE JSON AS A STATIC PROP (SO IT ONLY CALLS ONCE)
export default function Projects() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/projectdata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
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
        {data.project_list.map((project) => (
          <li className="py-1">
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
