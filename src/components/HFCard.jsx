import { HardFactsData } from "../constants";

const HFCard = () => {
  return (
    <div className="mt-5 w-full border flex flex-1">
      {
        HardFactsData.map((item)=>(
          <div className="border">
          <h2 className="text-7xl font-semibold text-[#1F2363] mb-5">
            {item.label}
          </h2>
          <p className="text-black text-sm font-poppins mt-2">
            {item.subtext}
          </p>
          </div>
        ))
      }
    </div>
  )
}

export default HFCard