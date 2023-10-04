
const Input = ({label,inputType}) => {
  return (
      <div className='px-6 '>
        <p className="mt-8 mb-1 text-sm text-[#33475b] font-semibold">{label}</p>
      <input type={inputType} placeholder={inputType}  className="w-4/5 h-7 mt-2 mb-2 border-b-4 border-gray-200  outline-none"/>
      </div>

  )
}

export default Input