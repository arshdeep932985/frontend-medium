import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import Skeleton from "../components/Skeleton"
import { useBlogs } from "../hooks"



const Blogs = () => {
    const {loading,blogs}=useBlogs()

    if(loading){
        return  <div>
            <Appbar/>
            <div className="flex justify-center flex-col ml-80">
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
          
        </div>
        </div>
       
    }


  return (
    <div>
         <Appbar/>
    <div className="flex justify-center">
        <div >
            {
                blogs.map((blog)=><BlogCard
                    key={blog.id}
                    id={blog.id}
                    authorName={blog.author.name||"Anonymous"} 
                    title ={blog.title}
                    content={blog.content}
                    publishedDate={"24th March 2024"}/>)
            }
        
    
    </div>
    </div>
    </div>
  )
}

export default Blogs
