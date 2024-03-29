import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Keyword from "./keywords";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400','600','800','900'],
});

const PostPreview = (props: PostMetadata) => {
  if(props.image !== ""){
    return (
      <>
        <article className="post mt-4 md:mt-8 pb-4 md:pb-8 border-b dark:border-white border-gray-800 flex flex-row">
                  <div className="post_date">
                    <span className={`day ${poppins.className}`}>{props.formattedDay}</span>
                    <span className={`month ${poppins.className}`}>{props.formattedMonth}</span>
                  </div>
                  <div className="post_content">
                    <div className="post_meta flex flex-col">
                    <figure className="">
                    <a href={`/blogs/${props.slug}`}>
                      <img src={props.image} alt="alt alt" />
                    </a>
                  </figure>
                      <h2>
                        <a href={`/blogs/${props.slug}`} className={`${poppins.className}`}>{props.title}</a>
                      </h2>
                      <div className="metaInfo">
                        <span className={`${poppins.className}`}><i className="fa fa-user" /> By <a href={`/blogs/${props.slug}`}>MasterCertify</a> </span>
                        <span className={`${poppins.className}`}><i className="fa fa-comments" /> <a href="#">{props.date}</a></span>
                      </div>
                    </div>
                    <Keyword dictionary={props.keywords == undefined ? [] : props.keywords.split(",")}></Keyword>
                    <p className={`${poppins.className}`}>
                    {props.subtitle}
                      {/* Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt  ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus asperiores ut labore. */}
                      </p>
                    <a className="btn btn-small btn-default bg-blue-500 p-2 rounded-md text-white" href={`/blogs/${props.slug}`}>Read More</a>
                  </div>
                </article>
        </>
      );    
  }
  else{
    return (
      <>
        <article className="post mt-4 md:mt-8 pb-4 md:pb-8 no_images border-b dark:border-white border-gray-800 flex flex-row">
                  <div className="post_date">
                    <span className="day">{props.formattedDay}</span>
                    <span className="month">{props.formattedMonth}</span>
                  </div>
                  <div className="post_content">
                    <div className="post_meta">
                      <h2>
                        <a href={`/blogs/${props.slug}`} className={`${poppins.className}`}>{props.title}</a>
                      </h2>
                      <div className="metaInfo">
                        <span className={`${poppins.className}`}><i className="fa fa-user" /> By <a href={`/blogs/${props.slug}`}>MasterCertify</a> </span>
                        <span className={`${poppins.className}`}><i className="fa fa-comments" /> <a href="#">{props.date}</a></span>
                      </div>
                    </div>
                    <Keyword dictionary={props.keywords == undefined ? [] : props.keywords.split(",")}></Keyword>
                    <p className={`${poppins.className}`}>
                    {props.subtitle}
                      {/* Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt  ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus asperiores ut labore. */}
                      </p>
                    <a className="btn btn-small btn-default bg-blue-500 p-2 rounded-md text-white" href={`/blogs/${props.slug}`}>Read More</a>
                  </div>
                </article>
        </>
      );
  }

};

export default PostPreview;
