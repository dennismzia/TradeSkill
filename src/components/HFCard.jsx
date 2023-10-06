import { HardFactsData } from "../constants";

const HFCard = () => {
  return (
    <div>
      {
        HardFactsData.map((item)=>(
          <div>
          <h2 className="text-7xl font-semibold text-[#1F2363]">
            {item.label}
          </h2>
          <p className="text-black text-sm font-poppins">
            {item.subtext}
          </p>
          </div>
        ))
      }
    </div>
  )
}

export default HFCard