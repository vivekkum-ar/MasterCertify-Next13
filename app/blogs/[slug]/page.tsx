import React from 'react'
import "@/app/globals.css"
import fs, { readFileSync } from 'fs';

const page = (props: any) => {
    const slug = props.params.slug;

    const getFileContent = (slug: string) =>{
      const folder = "posts/";
      const file = `${folder}${slug}.md`;
      const fileContent = readFileSync(file, "utf-8");
      return fileContent;
    }
  return (
    <div className='mt-20'><h1 className='text-4xl font-bold'>{slug}</h1>{getFileContent(slug)}</div>
  )
}

export default page