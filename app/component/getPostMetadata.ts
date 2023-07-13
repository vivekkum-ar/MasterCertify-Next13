import fs from "fs";
const matter = require("gray-matter");
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

// Extract the day and month from the date
const date = new Date(matterResult.data.date);
const day = date.getDate().toString().padStart(2, "0"); // Format as "dd"
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const month = monthNames[date.getMonth()]; // Get month in "mmm" format

    return {
      title: matterResult.data.title,
      date: matterResult.data.date.toString(),
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      formattedDay: day, // Add the formatted day,
      formattedMonth: month, // Add the formatted month
      image: typeof(matterResult.data.image) === "undefined" ? "" : matterResult.data.image,
    };
  });

  return posts;
};

export default getPostMetadata;
