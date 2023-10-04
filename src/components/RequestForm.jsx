import Input from "./Input";
import { Formelements } from "../constants";
import {Button} from "../components";


const RequestForm = () => {
  return (
    <div className="padding-x ml-8 mb-8 mr-8 block border bg-white ">
      <form action="" className="flex-col">
      <h1 className="font-bold mt-20 font-poppins text-4xl text-blue-950">
        Request funds today.
        </h1>
        {
          Formelements.map((item) => (
            <Input label={item.label} inputType={item.inputType}/>
          ))
        }
        <div className="py-6 mt-4 mb-8">
          <Button label="Submit Form"/>
        </div>

      </form>


    </div>
  )
}

export default RequestForm