import Image from "next/image";
import { Poppins } from "next/font/google";
// import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../component/PostPreview"; 
import getPostMetadata from "../component/getPostMetadata";
import Hero from "../component/hero";
  
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "900"],
});

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      {/* ------------------------------ Hero Section ------------------------------ */}
      <Hero 
      title="Blogs" 
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic numquam voluptatem dolore quisquam voluptas qui dignissimos eligendi officiis distinctio saepe."></Hero>
      
      {/* ---------------------------- Posts using fetch --------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20">{postPreviews}</div>
    </>
  );
}
