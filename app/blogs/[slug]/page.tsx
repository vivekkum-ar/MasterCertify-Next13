import React from 'react'
import "@/app/globals.css"
const page = (props: any) => {
    const slug = props.params.slug;
  return (
    <div className='mt-20'><h1 className='text-4xl font-bold'>{slug}</h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, recusandae. Voluptatum excepturi totam eius itaque doloribus magni doloremque id in veritatis, enim magnam ut tempora temporibus laboriosam voluptas eveniet possimus iusto accusamus quidem. Animi molestiae cupiditate rerum beatae iusto possimus, maxime incidunt quam, totam architecto tempora facilis consequuntur officia dolore.</div>
  )
}

export default page