import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getProjectData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch("..");
  return res.json();
}
