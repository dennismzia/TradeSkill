import {HardFactsimage} from "../assets/images";
import {HFCard} from "../components";
import { ChevronLeft, ChevronRight } from "react-feather";

// TODO: make this card into a counter
const HardFacts = () => {
  return (
    <div className="flex">
      <img src={HardFactsimage} alt="image" className="px-20 mt-10" />
      <div className="w-1/2 padding ">
        <h1 className="leading-normal text-black font-black text-4xl mb-9">
          THE HARD FACTS
        </h1>
        <div className="">
          <HFCard/>
            <button className="rounded-none bg-slate-200 hover:bg-white text-gray-600">
              <ChevronLeft size={40} />
            </button>

            <button className="rounded-none bg-slate-200 hover:bg-white text-gray-600">
              <ChevronRight size={40} />
            </button>
        </div>
      </div>
    </div>
  )
}

export default HardFacts