import recipe from "../assets/recipea.jpeg";
import savey from "../assets/savey.png";
import battery from "../assets/battery.jpeg";
import dashboard from "../assets/dashboard.jpeg";
import resort from "../assets/resort.jpeg";
import ecommerce from "../assets/ecommerce.jpeg";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: savey,
    title: "Savey Africa",
    description:
      "A comprehensive solution designed to help families and individuals build financial freedom through loans, budgeting etc",
    stacks: "Stacks: React.js, tailwind, framer motion",
    github: "https://github.com/Oluwa-bunmi/Savey",
    demo: "https://getsavey.com/",
  },
  {
    id: 3,
    image: recipe,
    title: "Recipe Palace",
    description:
      "A dynamic website that offers a seamless experience for discovering and exploring a vast array of recipes with the use of an external API",
    stacks: "Stacks: React.js",
    github: "https://github.com/Oluwa-bunmi/Recipe-App",
    demo: "https://recipe-app-oluwa-bunmi.vercel.app/",
  },
  {
    id: 3,
    image: ecommerce,
    title: "JummyLuxe",
    description:
      "A fully functional e-commerce website that leverages the power of Stripe for secure and efficient payment processing.",
    stacks: "Stacks: React.js, stripe",
    github: "https://github.com/Oluwa-bunmi/JummyLuxe",
    demo: "https://jummy-luxe.vercel.app/",
  },

  {
    id: 4,
    image: dashboard,
    title: "Dashboard",
    description: "A responsive admin dashboard with light and dark mode",
    stacks: "Stacks: HTML, SASS",
    github: "https://github.com/Oluwa-bunmi/Dashboard",
    demo: "https://mydashboardtheme.netlify.app/",
  },
  {
    id: 5,
    image: resort,
    title: "Travel Website",
    description: "A simple landing page",
    stacks: "Stacks: React.js, tailwindcss",
    github: "https://github.com/Oluwa-bunmi/react-travel-website",
    demo: "https://baecation.netlify.app/",
  },

  {
    id: 6,
    image: battery,
    title: "Battery Indicator",
    description:
      "A real time battery level indicator that tells the percentage of the battery.",
    stacks: "Stacks: HTML, SASS & JavaScript",
    github: "https://github.com/Oluwa-bunmi/Battery-Percentage-Indicator",
    demo: " https://battery-indicator.netlify.app/",
  },

];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("live");
  return (
    <div id="projects">
      <div className="text-center  ">
        <h2 className="pt-10 ">My recent projects.</h2>
        <h1 className="text-[var(--primary)] font-dancing mt-4">Portfolio</h1>
      </div>
      <div className="py-8 px-6 sm:px-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map(({ id, title, image, github, demo, description, stacks }) => {
          return (
            <div
              key={id}
              class="w-[100%] border border-gray-200 rounded-lg shadow-md hover:scale-105 duration-300"
            >
              <img
                src={image}
                alt="/"
                className="h-[253px] w-[100%] rounded-t-lg object-cover"
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">{title}</h5>

                <p class="mb-3 font-normal ">{description}</p>
                <p>{stacks}</p>
                <div className="flex gap-5 mt-4">
                  <a href={github} target="_blank">
                    <button
                      className={activeTab === "github" ? "active" : ""}
                      onClick={() => setActiveTab("github")}
                    >
                      Github
                    </button>
                  </a>
                  <a href={demo} target="_blank">
                    <button
                      className={activeTab === "live" ? "active" : ""}
                      onClick={() => setActiveTab("live")}
                    >
                      Go Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
