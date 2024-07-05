import FullBlog from "../components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"
import Appbar from "../components/Appbar"
import Skeleton from "../components/Skeleton"

const Blog = () => {
    const {id}=useParams()
    const {loading,blog}=useBlog({id:id||""})
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
    <div>{<FullBlog blog={blog}/>}</div>
  )
}

export default Blog