import { RequestForm } from "../components";

const Hero = () => {
  return (
    <section id="home" className=" w-full bg-blue-900 flex flex-col justify-center gap-10 max-container">
      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="mt-10 font-poppins font-semibold text-7xl text-white ">
        Don't settle for less.
        </h1>
        <p className="text-sm flex text-white leading-8 mt-6 mb-10 tracking-wider ">
        We help personal injury victims with pre-settlement financial support so they can fight their legal battle and get what they are owed.
        </p>

        <div className=" flex-1 flex justify-start bg-home-banner">
        <RequestForm />
        </div>


      </div>

    </section>
  )
}

export default Hero