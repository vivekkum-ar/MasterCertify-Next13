import fs from "fs";
const matter = require("gray-matter");
import { PolicyMetadata } from "./PolicyMetadata";

const getPolicyMetadata = (): PolicyMetadata[] => {
  const folder = "policy/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`policy/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date.toString(),
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPolicyMetadata;
