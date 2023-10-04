import { CustomerReviewCard } from "../components";

CustomerReviewCard
const CustomerReviews = () => {
  return (
    <section>

      <div className="w-1/2 padding items-center flex-start flex-1 bg-gray-200">
        <h2 className="padding-x font-poppins text-4xl text-black font-bold whitespace-normal">
        Hear straight from the 
        customers we finance.
        </h2>
      </div>

      <div className="">
        <CustomerReviewCard/>
      </div>
   
    </section>
  )
}

export default CustomerReviews