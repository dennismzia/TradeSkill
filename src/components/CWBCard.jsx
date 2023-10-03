
const CWBCard = ({imgurl,label,subtext}) => {
  return (
    <div className="padding w-2/4 flex-col hover:bg-slate-50">
        <img src={imgurl} alt="icon" />
        <h3 className="mt-5 mb-3 text-xl font-poppins text-black font-bold">
            {label}
        </h3>
        <p className="leading-normal text-left text-slate-700">
            {subtext}
        </p>
    </div>
  )
}

export default CWBCard