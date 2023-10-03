import CWBCard from "../components/CWBCard";
import {Benefits} from "../constants";

const Benefits = () => {
  return (
    <section id='benefits' className="">
      <div className="w-1/2 padding">
        <h2 className="padding-x font-extrabold text-3xl text-black font-poppins ">
          Cash with benefits
        </h2>
        <p className="padding text-lg text-slate-500">
        More than just cash, we provide a support network to help you through one of the most challenging chapters of your life.
        </p>
      </div>

      <div>
        {
          Benefits.map((item)=>(
            <CWBCard imgurl={item.imgURL} label={item.label} subtext={item.subtext} />
          ))
        }
      </div>

    </section>
  )
}

export default Benefits