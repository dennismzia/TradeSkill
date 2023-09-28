
const CaseCard = ({Step,label,subtext}) => {
  return (
    <div className="padding-x justify-between  border ">
        <p className="mt-2 mb-3">
        {Step}
        </p>
        <p className="mt-1 mb-2 text-md font-semibold">
            {label}
        </p>
        <p className="text-slate-600">
            {subtext}
        </p>
    </div>
  )
}

export default CaseCard