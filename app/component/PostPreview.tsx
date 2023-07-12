import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  if(props.image === ""){
    return (
      <>
        <article className="post">
                  <div className="post_date">
                    <span className="day">{props.formattedDay}</span>
                    <span className="month">{props.formattedMonth}</span>
                  </div>
                  <figure className="post_img">
                    <a href={`/blogs/${props.slug}`}>
                      <img src="images/blog/blog_medium_1.png" alt="blog post" />
                    </a>
                  </figure>
                  <div className="post_content">
                    <div className="post_meta">
                      <h2>
                        <a href={`/blogs/${props.slug}`}>{props.title}</a>
                      </h2>
                      <div className="metaInfo">
                        <span><i className="fa fa-user" /> By <a href={`/blogs/${props.slug}`}>Louis</a> </span>
                        <span><i className="fa fa-comments" /> <a href="#">{props.date}</a></span>
                      </div>
                    </div>
                    <p>
                    {props.subtitle}
                      {/* Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt  ut aut reiciendise voluptat maiores alias consequaturs aut perferendis doloribus asperiores ut labore. */}
                      </p>
                    <a className="btn btn-small btn-default bg-blue-500 p-2 rounded-md text-white" href={`/blogs/${props.slug}`}>Read More</a>
                  </div>
                </article>
        </>
      );    
  }
  else {
    return (
      <>
        <article className="post">
                  <div className="post_date">
                    <span className="day">else{props.formattedDay}</span>
                    <span className="month">{props.formattedMonth}</span>
                  </div>
                  <div className="post_content">
                    <div className="post_meta">
                      <h2>
                        <a href={`/blogs/${props.slug}`}>{props.title}</a>
                      </h2>
                      <div className="metaInfo">
                        <span><i className="fa fa-user" /> By <a href={`/blogs/${props.slug}`}>Louis</a> </span>
                        <span><i className="fa fa-comments" /> <a href="#">{props.date}</a></span>
                      </div>
                    </div>
                    <p>
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
