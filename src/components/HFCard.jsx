import { useState, useEffect} from "react";
import { ChevronLeft, ChevronRight } from "react-feather"
import { HardFactsData } from "../constants";

const HFCard = () => {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? HardFactsData.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === HardFactsData.length - 1 ? 0 : curr + 1))

    // useEffect(() => {
    //   if (!autoSlide) return
    //   const slideInterval = setInterval(next, autoSlideInterval)
    //   return () => clearInterval(slideInterval)
    // }, [])

  return (
      <div className="px-6 py-6 transition-transform ease-out duration-500">
        <div className="">

        <h2 className="text-7xl font-semibold text-[#1F2363] mb-5">
        {HardFactsData[curr].label}
        </h2>
        <p className="text-black text-lg font-poppins mt-2 mb-8">
          {HardFactsData[curr].subtext}
        </p>
        </div>
        <button onClick={prev} className="rounded-none bg-slate-200 hover:bg-white text-gray-600">
              <ChevronLeft size={40} />
            </button>

            <button onClick={next} className="rounded-none bg-slate-200 hover:bg-white text-gray-600">
              <ChevronRight size={40} />
            </button>
      </div>
  )
}

export default HFCard