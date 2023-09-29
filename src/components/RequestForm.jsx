import Input from "./Input";
import { Formelements } from "../constants";

const RequestForm = () => {
  return (
    <div className="padding-x block border bg-white">
      <form action="">
      <h1 className="font-bold font-poppins text-5xl text-blue-950">
        Request funds today.
        </h1>
        {
          Formelements.map((item) => (
            <Input label={item.label} inputType={item.inputType}/>
          ))
        }

      </form>


    </div>
  )
}

export default RequestForm