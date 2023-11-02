import { useEffect } from "react";
import img1 from "../assets/Ecommerce.jpeg";
import img2 from "../assets/Landing1.jpeg";
import img3 from "../assets/Landing2.jpeg";
import img4 from "../assets/React-movie.jpeg";
import Aos from "aos";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Projects"
      className="p-2 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <a href="https://mis-practicas-04-instrumentos.vercel.app/index.html">
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="text-[26px] flex items-center justify-center rounded-3xl p-1  border-2 border-fuchsia-800 b_glow cursor-pointer"
            src={img1}
            alt=""
          />
        </a>
        <a href="https://macumbicos-pagina-rgx1.vercel.app/">
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className="text-[26px] flex items-center justify-center rounded-3xl p-1  border-2 border-fuchsia-800 b_glow cursor-pointer"
            src={img2}
            alt=""
          />
        </a>
        <a href="https://pagina-9dejulio-af2a.vercel.app/">
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="text-[26px] flex items-center justify-center rounded-3xl p-1  border-2 border-fuchsia-800 b_glow cursor-pointer"
            src={img3}
            alt=""
          />
        </a>
        <a href="https://movie-react-app-one.vercel.app/">
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className="text-[26px] flex items-center justify-center rounded-3xl p-1  border-2 border-fuchsia-800 b_glow cursor-pointer"
            src={img4}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
