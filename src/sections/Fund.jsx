import {FundData } from "../constants";
import {FundDataCard} from "../components";
const Fund = () => {
  return (
    <section id='case' className="max-container">
    <div className="padding-x padding-y">
      <h2 className="font-semibold text-5xl text-black font-poppins mb-4">
      Cases we fund
      </h2>
      <p className="text-[#757575] font-normal text-lg">
      We partner with you for any of the following cases:
      </p>

      <div className="mt-16 grid grid-cols-1">
        {
          FundData.map((item)=>(
            <FundDataCard imgurl={item.imgurl} title={item.title}/>
          ))
        }

      </div>

    </div>

    </section>
  )
}

export default Fund