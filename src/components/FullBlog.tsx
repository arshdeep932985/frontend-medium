import { Blog } from "../hooks"
import Appbar from "./Appbar"
import { Avatar } from "./BlogCard"


const FullBlog = ({blog}:{blog:Blog}) => {
  return (
   <div>
    <Appbar/>
     <div className="flex justify-center ">
     <div className="grid grid-cols-12 px-10 max-w-screen-xl w-full">
        <div className=" col-span-8">
            <div className="text-4xl font-extrabold px-5 pt-14">
                {blog.title}
            </div>
            <div className="text-slate-500 pt-4 px-5">Posted on 24th March 2023</div>
            <div className="px-5 pt-6 text-lg">
                {blog.content}
            </div>
        </div>
  
        <div className="col-span-4 pt-14 ">
            <div className="text-3xl font-extrabold">Author</div>
            <div className="flex">
                <div className="flex justify-center flex-col"><Avatar name={blog.author.name || "Anonymous"}/></div>
                <div className="pl-5">
            <div className="text-2xl pt-4">{blog.author.name||"Anonymous"}</div>
            <div className="text-md pt-2 text-slate-500">
                Random Catchphrase about the authors ability to grab users attention
            </div>
            </div>
            </div>
        </div>
        
    </div>
     </div>
   </div>
  )
}

export default FullBlog