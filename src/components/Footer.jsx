import Aos from "aos";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <footer data-aos="fade-down" className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2">
            Nacho.
          </span>
          <p className="text-[16px] my-4">Gracias por visitar mi Portfolio!</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Desarrollo Web</li>
            <li className="my-2">E-Commerce</li>
            <li className="my-2">Crud</li>
            <li className="my-2">Landing Page</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: nachovasconcellos@gmail.com</p>
          <p className="text-[16px] my-4">Telefono: +54 3874829929</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-2">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://github.com/NachoVasconcellos"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/nachovasconcellos/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
