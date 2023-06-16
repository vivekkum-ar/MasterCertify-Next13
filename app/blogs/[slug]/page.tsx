import React from 'react'
// import "@/app/globals.css"
import fs, { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
const page = (props: any) => {
    
    const getFileContent = (slug: string) =>{
        const folder = "posts/";
        const file = `${folder}${slug}.md`;
        const fileContent = readFileSync(file, "utf-8");
        return fileContent;
      }

    const slug = props.params.slug;
    const content = getFileContent(slug);

    
  return (<>
  <div className="grid justify-items-center grid-cols-1">
    <div className="mt-20 text-justify prose lg:prose-2xl"><h1 className='text-4xl font-bold'>{slug}</h1>
    <Markdown>
  {content}
</Markdown>
    </div>
    </div>
    </>
  )
}

export default page