import { Link } from "react-router-dom";
// import AppBar from "./AppBar";

interface BlogCardProps {
  authorName: string;
  title: string,
  content: string,
  publishedDate:any,
  id:number
}

//@ts-ignore
function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) {
  return (
    <>
    <Link to={`/blogs/${id}`}>
    <div  className="font-sans shadow  p-5 rounded-md m-2 select-none flex flex-col">
      <div className="flex gap-1 text-zinc-500  font-light  text-sm items-center">

        <Avatar size="small" name={authorName} />

        <div className="text-md mr-1 ml-1 font-normal">{authorName}</div>
        <div className="font-normal flex">.</div>
        <div className="font-normal text-sm flex justify-center ml-auto items-center text-zinc-400"> <div>{publishedDate}</div></div>

      </div>
      <div className="text-2xl font-extrabold text-zinc-800 mt-3">{title}</div>
      <div className="text-md text-zinc-500 mt-2">{content.length >= 50 ? content.slice(0, 60) + "..." : content}</div>
      <div className="text-zinc-400  font-semibold  text-sm mt-3">{`${Math.ceil(content.length / 100)} minutes read.`}</div>
    </div></Link>
 
    </>
  )
}

//@ts-ignore
export function Avatar({ name,size }:{name:string,size:string}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === "big" ? "w-8 h-8": "w-4 h-4"} border-2 border-zinc-600 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="font-medium text-gray-600 dark:text-gray-300 text-xs ">{name[0]}</span>
    </div>
  )

}

export default BlogCard