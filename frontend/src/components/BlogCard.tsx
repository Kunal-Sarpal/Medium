import AppBar from "./AppBar";

interface BlogCardProps {
  authorName: string;
  title: string,
  content: string,
  publishedDate: string
}

//@ts-ignore
function BlogCard({
  authorName,
  title,
  content,
  publishedDate
}: BlogCardProps) {
  return (
    <>
    <div className="font-sans shadow border-2 p-5 m-2 select-none">
      <div className="flex gap-1 text-zinc-500  font-light  text-sm items-center">

        <Avatar size="small" name={authorName} />

        <div className="text-md mr-1">{authorName}</div>
        <div className="font-normal flex">.</div>
        <div className="font-normal text-md flex justify-center ml-1 items-center text-zinc-400"> <div>{publishedDate}</div></div>

      </div>
      <div className="text-2xl font-bold text-zinc-800 mt-3">{title}</div>
      <div className="text-md text-zinc-500">{content.length >= 50 ? content.slice(0, 60) + "..." : content}</div>
      <div className="text-zinc-500  font-light  text-sm mt-3">{`${Math.ceil(content.length / 100)} minutes read.`}</div>
    </div>
    </>
  )
}

//@ts-ignore
export function Avatar({ name,size }:{name:string,size:string}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === "big" ? "w-8 h-8": "w-4 h-4"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className="font-medium text-gray-600 dark:text-gray-300 text-xs ">{name[0]}</span>
    </div>
  )

}

export default BlogCard