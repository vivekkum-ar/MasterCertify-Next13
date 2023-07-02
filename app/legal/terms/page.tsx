import Image from "next/image";
import { Poppins } from "next/font/google";
// import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "./PostPreview"; 
import getTermMetadata from "./getTermMetadata";
import Hero from "@/app/component/hero";
  
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

export default function Terms() {
  const postMetadata = getTermMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      {/* ------------------------------ Hero Section ------------------------------ */}
      <Hero 
      title="Terms" 
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic numquam voluptatem dolore quisquam voluptas qui dignissimos eligendi officiis distinctio saepe."></Hero>
      
      {/* ---------------------------- Posts using fetch --------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-36 dark:bg-gray-900">{postPreviews}</div>
    </>
  );
}
