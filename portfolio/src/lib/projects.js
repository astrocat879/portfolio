import clientPromise from "./mongodb";

export async function getProjectData() {
  const client = await clientPromise;
  const db = client.db("store");

  const projects = await db.collection("portfolio items").findOne();
  return projects.project_list.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
