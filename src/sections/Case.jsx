import {CaseData} from "../constants";
import CaseCard from "../components/CaseCard";

const Case = () => {
  return (
    <div className="padding-x flex flex-col bg-white ">
      <p className="font-poppins font-extrabold text-stone-950 text-4xl flex-auto mb-1">
      We're right by your side,
      </p> 
      
      <p className=" font-poppins mt-2 font-extrabold text-stone-950 text-4xl flex-auto mb-20" >
      every step of your case.
      </p>

      <div className="flex justify-evenly">
        {
          CaseData.map(
            (item)=>(
              <CaseCard imgurl={item.imgURL} Step={item.Step} label={item.label} subtext={item.subtext}/>
            )
          )
        }
      </div>

    </div>
  )
}

export default Case