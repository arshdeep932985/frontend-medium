

const TextEditor = ({onChange}:{onChange:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void}) => {
  return (
    <div>

<div>
   <div className="w-full mb-4 border ">
       <div className="flex items-center justify-between px-3 py-2 ">
          
       <div className=" py-2 bg-white rounded-b-lg  w-full">
           <label htmlFor="editor" className="sr-only">Publish post</label>
           <textarea onChange={onChange} id="editor" rows={14} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required ></textarea>
       </div>
   </div>
   
   </div>
   
</div>

    </div>
  )
}

export default TextEditor