import { Link } from "react-router-dom"

interface BlogCardProps{
    authorName:string,
    title:string,   
    content:string,
    publishedDate:string,
    id:number|string
}


const BlogCard = ({id,authorName,title,content,publishedDate}:BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b border-gray-300 pb-3 w-screen max-w-screen-md cursor-pointer">
        <div className="pl-2 pt-2">
          <Avatar name={authorName} size={6}/>  
          <span className="font-light pl-2 ">{authorName} </span> 
          <span>&#183;</span>
          <span className="text-xs font-thin"> {publishedDate}</span>
        </div>
        <div className="font-semibold text-xl pl-2 pt-2">
            {title}
        </div>
        <div className="font-extralight text-md pl-2">
            {content.slice(0,200)+"..."}
        </div>
        <div className="text-slate-600 text-xs pt-2 pl-2">
            {
                `${Math.ceil(content.length/100)} min read`
            }
        </div>
        {/* <div className="bg-slate-200 h-0.5 w-full">

        </div> */}
    </div>
    </Link>
  )
}

export function Avatar({name,size=6}:{name:string,size?:number}){
    return (
        <div className={`relative inline-flex items-center  justify-center w-${size} h-${size} overflow-hidden bg-gray-300 rounded-full `}>
    <span className="text-sm text-gray-800 ">{name[0]}</span>
</div>
    )
}

export default BlogCard