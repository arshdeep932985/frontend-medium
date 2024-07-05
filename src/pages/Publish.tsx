import Appbar from "../components/Appbar"
import TextEditor from "../components/TextEditor"
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Publish = () => {
    const navigate=useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  return (
    <>
        <Appbar/>
    <div className="flex justify-center w-full">
<div className="mb-6 w-full max-w-screen-lg ">
    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input onChange={(e)=>{
        setTitle(e.target.value)
    }} type="text" placeholder="Title" id="large-input" className="block w-full p-4 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>

    <TextEditor onChange={(e)=>{
        setDescription(e.target.value)
    }} />
    <button onClick={async ()=>{
    const response=axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content:description
    },{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    navigate(`/blog/${(await response).data.id}`)
   }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
    
</div>
    </div >
 
    
    
    </>
    )
}

export default Publish



