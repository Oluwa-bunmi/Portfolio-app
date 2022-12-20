import recipe from "../assets/recipea.jpeg"
import { useState } from "react";

const Projects = () => {
    const [activeTab, setActiveTab] = useState("live");
    return (
      <div className="bg-black py-8 px-14 ">
        <div>
          <div class="max-w-sm bg-black text-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg" src={recipe} alt="" />

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                  Recipe Palace
                </h5>
              </a>
              <p class="mb-3 font-normal ">
                Website for looking up recipes. Search function is also included
              </p>
              <p>Stacks: React.js</p>
              <div className="flex gap-5 mt-4">
                <a href="">
                  <button
                    className={activeTab === "github" ? "active" : ""}
                    onClick={() => setActiveTab("github")}
                  >
                    Github
                  </button>
                </a>
                <a href="https://recipe-app-oluwa-bunmi.vercel.app/">
                  <button
                    className={activeTab === "live" ? "active" : ""}
                    onClick={() => setActiveTab("live")}
                  >
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Projects;