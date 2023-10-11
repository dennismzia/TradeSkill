import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"
import { HardFactsData } from "../constants";

const HFCard = () => {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(next, autoSlideInterval)
      return () => clearInterval(slideInterval)
    }, [])

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