import Link from "next/link";
import { TermsMetadata } from "./TermsMetadata";

const PostPreview = (props: TermsMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white dark:bg-gray-700"
    >
      <p className="text-xl dark:text-white text-slate-400">{props.date}</p>

      <Link href={`/legal/terms/${props.slug}`}>
        <h2 className=" text-violet-600 dark:text-white hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700 dark:text-white">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
