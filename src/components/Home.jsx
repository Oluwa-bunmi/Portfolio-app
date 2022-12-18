import CV from "../assets/cv.pdf";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("contact");
  return (
    <div className="overlay bg-cover bg-center bg-heroImage h-[70vh] relative w-[100%] z-[1] text-white text-center flex flex-col justify-center">
      <h2>Hello 👋, </h2>
      <h1 className=" font-dancing">I'm Oluwabunmi!</h1>
      <h2 className="mt-2 mb-4">A Frontend developer</h2>
      <div className="flex justify-center gap-5">
        <a href={CV} download>
          <button
            className={activeTab === "download" ? "active" : ""}
            onClick={() => setActiveTab("download")}
          >
            DOWNLOAD CV
          </button>
        </a>
        <a href="#contact">
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            Let's Talk
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
