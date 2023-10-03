import {FundData } from "../constants";
import {FundDataCard} from "../components";

const Fund = () => {
  return (
    <section id='case' className="max-container relative block max-w-full bg-white">
    <div className="padding-x padding-y max-w-full ">
      <h2 className="font-semibold text-5xl text-black font-poppins mb-4">
      Cases we fund
      </h2>
      <p className="text-[#757575] font-normal text-lg">
      We partner with you for any of the following cases:
      </p>

      <div className="max-w-6xl">

        <div className="padding grid grid-cols-4 gap-4	">
          {
            FundData.map((item)=>(
              <FundDataCard imgurl={item.imgURL} title={item.title}/>
            ))
          }

        </div>
      </div>

    </div>

    </section>
  )
}

export default Fund