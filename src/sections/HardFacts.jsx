import {HardFactsimage} from "../assets/images";
import {HFCard} from "../components";

// TODO: make this card into a counter
const HardFacts = () => {
  return (
    <div className="flex">
      <img src={HardFactsimage} alt="image" className="px-20 mt-10" />
      <div className="w-1/2 padding ">
        <h1 className="leading-normal text-black font-black text-4xl mb-9">
          THE HARD FACTS
        </h1>
        <div className="flex">
        <HFCard/>
        </div>
      </div>
    </div>
  )
}

export default HardFacts