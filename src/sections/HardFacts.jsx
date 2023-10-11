import {HardFactsimage} from "../assets/images";
import {HFCard} from "../components";
import { ChevronLeft, ChevronRight } from "react-feather";

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
            
        </div>
      </div>
    </div>
  )
}

export default HardFacts