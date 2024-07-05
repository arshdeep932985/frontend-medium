

const Skeleton = () => {
  return (
    <div>
        <div role="status" className="max-w-sm animate-pulse">
        <div className="border-b border-gray-300 pb-3 w-screen max-w-screen-md cursor-pointer">
        <div className="pl-2 pt-2">
        <div className="h-4 w-4 bg-gray-200 rounded-full  mb-4"></div> 
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
          <span>&#183;</span>
          <span className="text-xs font-thin"> <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div></span>
        </div>
        <div className="font-semibold text-xl pl-2 pt-2">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="font-extralight text-md pl-2">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        <div className="text-slate-600 text-xs pt-2 pl-2">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
        {/* <div className="bg-slate-200 h-0.5 w-full">

        </div> */}
    </div>
   
</div>
</div>
  )
   
}

export default Skeleton