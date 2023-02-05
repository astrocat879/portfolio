// needed temporarily to parse local md files
// later, i'll just be fetching a json file from mongodb
import clientPromise from "./mongodb";
import { remark } from "remark";
import html from "remark-html";

// fetching for the archive list
export async function getSortedPostsData() {
  const client = await clientPromise;
  const db = client.db("store");

  const allPostsData = await db.collection("blog posts").find().toArray();
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// fetching for the specific blog posts
export async function getPostData(search_id) {
  const client = await clientPromise;
  const db = client.db("store");

  const postData = await db.collection("blog posts").findOne( { id: search_id } );

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(postData.content);
  let contentHtml = processedContent.toString();

  // Hack-ish solution to split the paragraphs correctly
  contentHtml = contentHtml.replace("<p>", "").replace("</p>", "");
  console.log("content: ", contentHtml)
  let split = contentHtml.split("\n")
  console.log("split: ", split)
  split = split.map((str) => {
    return "<p>"+str+"</p>"
  })
  console.log("split: ", split)
  contentHtml = split.join("")

  // Combine the data with the id and contentHtml
  return {
    postData,
    contentHtml,
  };
}

// fetching all static paths
export async function getAllPostIds() {
  const client = await clientPromise;
  const db = client.db("store");

  const allPostsData = await db.collection("blog posts").find().toArray();

  return allPostsData.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}
