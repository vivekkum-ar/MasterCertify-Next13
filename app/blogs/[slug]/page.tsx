import React from 'react'
// import "@/app/globals.css"
import fs, { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/app/component/getPostMetadata';
const matter = require("gray-matter");

    const getPostContent = (slug: string) => {
      const folder = "posts/";
      const file = `${folder}${slug}.md`;
      const content = fs.readFileSync(file, "utf8");
      const matterResult = matter(content);
      return matterResult;
    };
    
/* -------------- SSG(Static Site Generation) for all MD files -------------- */
    export const generateStaticParams = async () => {
      const posts = getPostMetadata();
      return posts.map((post) => ({
        slug: post.slug,
      }));
    };
    
    const PostPage = (props: any) => {
/* ----------- Collecting slug from the link used for redirection ----------- */
      const slug = props.params.slug;
/* --------- using the getPostContent from above to get matterResult -------- */
      const post = getPostContent(slug);
      return (<>
  <div className="grid justify-items-center grid-cols-1">
    <div className="mt-20 text-justify prose lg:prose-xl md:prose-md dark:text-white"><h1 className='text-4xl text-center font-bold'>{post.data.title}</h1>
    <Markdown>
  {post.content}
</Markdown>
    </div>
    </div>
    </>
  );
};

export default PostPage