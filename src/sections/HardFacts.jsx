import {HardFactsimage} from "../assets/images";
import {HFCard} from "../components";

const HardFacts = () => {
  return (
    <div className="flex">
      <img src={HardFactsimage} alt="image" className="px-20 mt-10" />
      <div>
        <HFCard/>
      </div>
    </div>
  )
}

export default HardFacts