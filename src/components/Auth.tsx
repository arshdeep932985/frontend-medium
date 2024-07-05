import { Link,  useNavigate } from "react-router-dom"
import LabelledInput from "./LabelledInput"
import { SignupInput } from "@arshdeep932985/medium-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

const Auth = ({type}:{type:"signup"|"signin"}) => {
    const navigate=useNavigate()
    const [postInputs,SetPostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try {
            console.log("post inputs values",postInputs)
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs)
            const data=response.data
            const jwt=data["jwt"]            
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        } catch (error) {
            alert("error while signing up")
        }
    }
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center ">
       <div >
        <div>
            <div className=" text-3xl font-extrabold ">
            Create an Account
        </div>
        <div className="text-slate-400">
            {type=='signin'?"Don't have an Account?":"Already have an account?"}
            <Link className="pl-2 underline" to={type=="signin"?"/signup":"/signin"}>
                {type=="signup"?"Login":"Create Account"}
            </Link>
        </div>
        </div>
      

      <div className="py-5 ">
     {type=="signup"? <LabelledInput label='Name' placeholder="Enter your name" onChange={(e)=>{
        console.log(e.target.value)
        SetPostInputs({
            ...postInputs,
            name:e.target.value
        })
       }}/>:null}
       <LabelledInput label='Email' placeholder="Enter your email" onChange={(e)=>{
        console.log(e.target.value)
        SetPostInputs({
            ...postInputs,
            email:e.target.value
        })
       }}/>
       <LabelledInput label='Password' type={"password"} placeholder="Enter your password" onChange={(e)=>{
        console.log(e.target.value)
        SetPostInputs({
            ...postInputs,
            password:e.target.value
        })
       }}/>
       <button onClick={sendRequest} type="button" className=" w-full mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
        dark:border-gray-700">{type=='signup'?"Sign up":"Sign in"}</button>
      </div>
      </div>
        </div>
    </div>
  )
}

export default Auth