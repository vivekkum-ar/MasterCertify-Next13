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

      // Extract the day and month from the date
      const date = new Date(post.data.date);
      const day = date.getDate().toString().padStart(2, "0"); // Format as "dd"
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
      const month = monthNames[date.getMonth()]; // Get month in "mmm" format

      return (
        <>
          <section className="wrapper dark:bg-gray-900 pt-8 md:pt-20">
            <section className="content blog mx-6 flex flex-col md:flex-row">
              <div className="mx-0 md:mx-6">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full">
                    <div className="blog_medium flex flex-col">
                      {/* <div className="grid grid-cols-1 dark:bg-gray-800"> */}
                        <div className="flex-row flex">
                          <div className="post_date hidden md:block">
                            <span className="day">{day}</span>
                            <span className="month">{month}</span>
                          </div>
                          <div className="post_content md:w-1/2 w-full">
                            <div className="post_meta">
                              <h1 className="grid text-2xl w-full md:text-4xl text-center font-bold">
                                {post.data.title}
                              </h1>
                              <div className="metaInfo flex justify-center">
                                <span className=' bg-gray-300'>
                                  <i className="fa fa-calendar" />{" "}
                                  <a href="#">{post.data.date}</a>{" "}
                                </span>
                                <span className=' bg-gray-300'>
                                  <i className="fa fa-user" /> By{" "}
                                  <a href="#">MasterCertify</a>{" "}
                                </span>
                                {/* <span><i className="fa fa-tag" /> <a href="#">Emin</a>, <a href="#">News</a> </span> */}
                                {/* <span><i className="fa fa-comments" /> <a href="#">12 Comments</a></span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-justify dark:prose-invert prose lg:prose-xl md:prose-md dark:text-white">
                          <Markdown>{post.content}</Markdown>
                        </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 lg:col-span-4 sm:col-span-4 sm:col-span-4 md:absolute md:right-0">
                    <div className="md:sticky md:top-24">
                      <div className="sidebar ">
                        <div className="widget widget_categories">
                          <div className="widget_title">
                            <h4>
                              <span></span>Categories
                            </h4>
                          </div>
                          <ul className="arrows_list list_style">
                            <li>
                              <a href="#">Grapic Design (10)</a>
                            </li>
                            <li>
                              <a href="#">Web Design &amp; Development (25)</a>
                            </li>
                            <li>
                              <a href="#">Photography (29)</a>
                            </li>
                            <li>
                              <a href="#">Custom Illustrations (19)</a>
                            </li>
                            <li>
                              <a href="#">Wordpress Themes(38)</a>
                            </li>
                            <li>
                              <a href="#">Videography (33)</a>
                            </li>
                          </ul>
                        </div>

                        <div className="widget widget_archives">
                          <div className="widget_title">
                            <h4>
                              <span></span>Archives
                            </h4>
                          </div>
                          <ul className="archives_list list_style">
                            <li>
                              <a href="#">November 2015</a>
                            </li>
                            <li>
                              <a href="#">October 2015</a>
                            </li>
                            <li>
                              <a href="#">September 2015</a>
                            </li>
                            <li>
                              <a href="#">August 2015</a>
                            </li>
                            <li>
                              <a href="#">July 2015</a>
                            </li>
                            <li>
                              <a href="#">June 2015</a>
                            </li>
                            <li>
                              <a href="#">May 2015</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </section>
            
          </section>


          
        </>
      );
    };

export default PostPage