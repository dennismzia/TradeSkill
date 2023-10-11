import { useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "react-feather"
import { HardFactsData } from "../constants";

const HFCard = () => {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    // useEffect(() => {
    //   if (!autoSlide) return
    //   const slideInterval = setInterval(next, autoSlideInterval)
    //   return () => clearInterval(slideInterval)
    // }, [])

  return (
    <div className="m-auto">
      {/* {
        HardFactsData.map((item)=>(
          <div className="w-full">
          <h2 className="text-7xl font-semibold text-[#1F2363] mb-5">
            {item.label}
          </h2>
          <p className="text-black text-sm font-poppins mt-2">
            {item.subtext}
          </p>
          </div>
        ))

      } */}
      <div className="shadow-sm px-6 py-6">
        <h2 className="text-7xl font-semibold text-[#1F2363] mb-5">
        {HardFactsData[0].label}
        </h2>
        <p className="text-black text-lg font-poppins mt-2">
          {HardFactsData[0].subtext}
        </p>
      </div>
    </div>
  )
}

export default HFCard