import CV from "../assets/Oluwabunmi Gbemisoye - Frontend developer.pdf";
import { useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
  const [activeTab, setActiveTab] = useState("contact");
  return (
    <div
      name="home"
      className="overlay bg-cover bg-center bg-heroImage h-[70vh] relative w-[100%] z-[1] text-white text-center flex flex-col justify-center"
    >
      <h2 className="mb-2 ">Hello 👋, </h2>
      <h1 className=" font-dancing ">I'm Oluwabunmi!</h1>
      <h2 className="mt-2 mb-4 ">A Frontend developer</h2>
      <div className="flex justify-center gap-5 mt-4 ">
        <a href={CV} download>
          <button
            className={activeTab === "download" ? "active" : ""}
            onClick={() => setActiveTab("download")}
          >
            DOWNLOAD CV
          </button>
        </a>

        <Link to="contact" smooth={true} duration={500}>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            Let's Talk
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
