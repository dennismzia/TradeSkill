import { FooterLinks } from "../constants";

const Footer = () => {
  return (
    <section id="footer" className=" w-full bg-[#1f2363] flex justify-between">
      <div className="padding-x padding-y">
        <h1 className="text-white font-extrabold py-4  font-poppins">
        Corporate Office
        </h1>

        <p className="text-white ">
        2 Wall St FL6, New York, NY 10005 
        </p>
      </div>

      <div className="padding mr-10">
        <ul>
          {
            FooterLinks.map((link)=>(
              <li key={link.label} className="mt-2 mb-4">
                <a href={link.href} className="text-white tracking-wide font-poppins hover:text-green-500">
                  {link.label}
                </a>
              </li>
            ))

          }
        </ul>
      </div>



    </section>
  )
}

export default Footer