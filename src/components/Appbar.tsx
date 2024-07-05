// import React from 'react'

import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 p-2">
       <Link to={'/blogs'} className="text-lg font-bold flex flex-col justify-center cursor-pointer">
        Medium
            </Link>

           <div >
          <Link to={'/publish'}> <button type="button" className="mr-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1 text-center me-2 mb-2">New +</button></Link>
        {<Avatar name="Arshdeep" size={8}/>}
           </div>
    </div>
  )
}

export default Appbar