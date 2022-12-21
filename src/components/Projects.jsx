import recipe from "../assets/recipea.jpeg";
import battery from "../assets/battery.jpeg";
import dashboard from "../assets/dashboard.jpeg";
import resort from "../assets/resort.jpeg";
import weather from "../assets/weather.jpeg";
import vestium from "../assets/vestium.jpeg";
import { useState } from "react";

const data = [
  {
    id: 1,
    image: recipe,
    title: "Recipe Palace",
    description:
      "Website for looking up recipes. Search function is also included",
    stacks: "Stacks: React.js",
    github: "https://github.com/Oluwa-bunmi",
    demo: "https://recipe-app-oluwa-bunmi.vercel.app/",
  },
  {
    id: 2,
    image: dashboard,
    title: "Blazo",
    description: "A responsive dashboard with light and dark mode",
    stacks: "Stacks: HTML, SASS",
    github: "https://github.com/Oluwa-bunmi/Dashboard",
    demo: "https://mydashboardtheme.netlify.app/",
  },
  {
    id: 3,
    image: weather,
    title: "Weather App",
    description: "Website for looking up weather information",
    stacks: "Stacks: HTML, SASS & JavaScript",
    github: "https://github.com/Oluwa-bunmi/Weather-App",
    demo: " https://yourweatherforecast.netlify.app/",
  },
  {
    id: 4,
    image: resort,
    title: "Travel Website",
    description: "A simple landing page",
    stacks: "Stacks: React.js, tailwindcss",
    github: "https://github.com/Oluwa-bunmi",
    demo: "https://baecation.netlify.app/",
  },

  {
    id: 5,
    image: battery,
    title: "Battery Indicator",
    description:
      "A real time battery level indicator that tells the percentage of the battery.",
    stacks: "Stacks: HTML, SASS & JavaScript",
    github: "https://github.com/Oluwa-bunmi/Battery-Percentage-Indicator",
    demo: " https://battery-indicator.netlify.app/",
  },

  {
    id: 6,
    image: vestium,
    title: "Vestium",
    description: "A simple landing page",
    stacks: "Stacks: HTML, SASS, Bootstrap",
    github: "https://github.com/Oluwa-bunmi/Vestium",
    demo: "https://myvestiumproject.netlify.app/",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("live");
  return (
    <>
      <div className="text-center  bg-black">
        <h2 className="pt-10 text-white">My recent projects.</h2>
        <h1 className="text-[var(--primary)] font-dancing mt-4">Portfolio</h1>
      </div>
      <div className="bg-black py-8 px-6 sm:px-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map(({ id, title, image, github, demo, description, stacks }) => {
          return (
            // <div >
            <div
              key={id}
              class="w-[100%]  text-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                class=""
                src={image}
                alt=""
                className="h-[253px] w-[100%] rounded-t-lg object-cover"
              />

              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                    {title}
                  </h5>
                </a>
                <p class="mb-3 font-normal ">{description}</p>
                <p>{stacks}</p>
                <div className="flex gap-5 mt-4">
                  <a href={github}>
                    <button
                      className={activeTab === "github" ? "active" : ""}
                      onClick={() => setActiveTab("github")}
                    >
                      Github
                    </button>
                  </a>
                  <a href="{demo}">
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
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
