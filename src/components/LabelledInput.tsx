
interface LabelledInputType{
  label:string,
  placeholder:string,
  type?:string,
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const LabelledInput = ({label,placeholder,type,onChange}:LabelledInputType) => {
  return (

    <div>
            <label  className="block mt-4 text-sm font-medium text-gray-900">{label} 
            </label>
            <input  type={type || "text"} onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
  )
}

export default LabelledInput