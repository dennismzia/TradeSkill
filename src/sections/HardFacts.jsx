import {HardFactsimage} from "../assets/images";
import {HFCard} from "../components";

// TODO: make this card into a counter
const HardFacts = () => {
  return (
    <div className="flex">
      <img src={HardFactsimage} alt="image" className="px-20 mt-10" />
      <div>
        <h1>
          THE HARD FACTS
        </h1>
        <HFCard/>
      </div>
    </div>
  )
}

export default HardFacts