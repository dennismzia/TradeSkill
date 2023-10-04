import { RequestForm } from "../components";

const Hero = () => {
  return (
    <section id="home" className=" w-full bg-[#1F2363] padding">
      <div className="flex">

        <div className="w-1/2 py-20 px-4">
          <h1 className="mt-10 mr-10 font-poppins font-semibold text-7xl text-white ">
          Don't settle for less.
          </h1>
          <p className="text-lg flex text-white leading-8 mt-6 mb-10 tracking-wider ">
          We help personal injury victims with pre-settlement financial support so they can fight their legal battle and get what they are owed.
          </p>
        </div>

        <div className=" flex justify-start w-1/2 bg-home-banner">
        <RequestForm />
        </div>


      </div>

    </section>
  )
}

export default Hero