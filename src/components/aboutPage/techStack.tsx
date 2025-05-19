import { useState } from "react";
import { technologies } from "../../data/technologies";

interface Technology {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  experience: string;
  projects: number;
  lastUsed: string;
}

interface TechCategory {
  category: string;
  items: Technology[];
}

const getLineCount = (activeTab: number): number => {
  const baseLines = 20; // Interface ve temel yapı için sabit satır sayısı
  const itemsLines = technologies[activeTab].items.length * 6; // Her item için 6 satır
  return baseLines + itemsLines;
};

export const TechStack = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="relative py-16 px-2 sm:px-4 lg:px-8 bg-[#1e1e1e] rounded-lg overflow-hidden mt-16">
      {/* Mac Style Window Controls */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#252526] flex items-center px-4 border-b border-[#424242]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
      </div>

      {/* VS Code Like Tabs */}
      <div className="flex items-center bg-[#252526] border-b border-[#424242] mt-8 overflow-x-auto">
        <div className="absolute top-8 left-0 right-0 flex items-center bg-[#252526] border-b border-[#424242] overflow-x-auto">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm border-r border-[#424242] flex items-center space-x-2 whitespace-nowrap ${
                index === activeTab ? "bg-[#1e1e1e]" : "bg-[#2d2d2d]"
              } text-gray-300 hover:bg-[#1e1e1e] transition-colors`}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt={tech.category}
                className="w-4 h-4"
              />
              <span>{tech.category}.tsx</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col mt-[40px]">
        {/* Code Section */}
        <div className="relative bg-[#1e1e1e] border-t-0">
          {/* Line Numbers */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-[#1e1e1e] border-r border-[#424242] flex flex-col items-end pr-1 sm:pr-2 pt-2 text-[8px] sm:text-xs text-gray-600 overflow-hidden">
            {Array.from({ length: getLineCount(activeTab) }, (_, i) => (
              <div key={i} className="leading-5 sm:leading-6">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <div className="pl-8 sm:pl-16 pt-2 pb-4 font-mono text-gray-300 text-[10px] sm:text-sm">
            <div className="mb-4">
              <span className="text-[#569CD6]">interface</span>{" "}
              <span className="text-[#4EC9B0]">Technology</span>{" "}
              <div className="text-[#D4D4D4]">{"{"}</div>
            </div>

            <div className="ml-4">
              <span className="text-[#9CDCFE]">name</span>:{" "}
              <span className="text-[#4EC9B0]">string</span>;
              <br />
              <span className="text-[#9CDCFE]">level</span>:{" "}
              <span className="text-[#4EC9B0]">
                'Beginner' | 'Intermediate' | 'Advanced'
              </span>
              ;
              <br />
              <span className="text-[#9CDCFE]">experience</span>:{" "}
              <span className="text-[#4EC9B0]">string</span>;
              <br />
              <span className="text-[#9CDCFE]">projects</span>:{" "}
              <span className="text-[#4EC9B0]">number</span>;
              <br />
              <span className="text-[#9CDCFE]">lastUsed</span>:{" "}
              <span className="text-[#4EC9B0]">string</span>;
            </div>

            <div className="text-[#D4D4D4]">{"}"}</div>

            <div className="mt-4">
              <span className="text-[#569CD6]">const</span>{" "}
              <span className="text-[#4FC1FF]">
                {technologies[activeTab].category.toLowerCase()}
              </span>
              : <span className="text-[#4EC9B0]">Technology</span>[]{" "}
              <span className="text-[#D4D4D4]">=</span>{" "}
              <span className="text-[#D4D4D4]">{"["}</span>
            </div>

            <div className="ml-4">
              {technologies[activeTab].items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <span className="text-[#D4D4D4]">{"{"}</span>
                  <div className="ml-4">
                    <span className="text-[#9CDCFE]">name</span>:{" "}
                    <span className="text-[#CE9178]">'{item.name}'</span>,
                    <br />
                    <span className="text-[#9CDCFE]">level</span>:{" "}
                    <span className="text-[#CE9178]">'Advanced'</span>,
                    <br />
                    <span className="text-[#9CDCFE]">experience</span>:{" "}
                    <span className="text-[#CE9178]">'2+ years'</span>,
                    <br />
                    <span className="text-[#9CDCFE]">projects</span>:{" "}
                    <span className="text-[#B5CEA8]">5</span>,
                    <br />
                    <span className="text-[#9CDCFE]">lastUsed</span>:{" "}
                    <span className="text-[#CE9178]">'2024'</span>
                  </div>
                  <span className="text-[#D4D4D4]">{"}"}</span>
                  {itemIndex < technologies[activeTab].items.length - 1 && ","}
                </div>
              ))}
            </div>

            <span className="text-[#D4D4D4]">{"];"}</span>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="bg-[#1e1e1e] border-t border-[#424242] mt-2">
          <div className="flex items-center px-4 py-2 bg-[#252526]">
            <span className="text-gray-400 text-[10px] sm:text-sm font-mono">
              Terminal
            </span>
          </div>
          <div className="p-2 sm:p-4 font-mono text-[10px] sm:text-sm">
            <div className="text-green-400">$ npm run dev</div>
            <div className="text-gray-400 mt-1 sm:mt-2">
              <span className="text-blue-400">info</span> - Starting development
              server...
            </div>
            <div className="text-gray-400 mt-1">
              <span className="text-green-400">success</span> - Ready on
              http://localhost:3000
            </div>
            <div className="text-gray-400 mt-1">
              <span className="text-green-400">success</span> -{" "}
              {technologies[activeTab].items.length}{" "}
              {technologies[activeTab].category.toLowerCase()} technologies
              loaded successfully
            </div>
            <div className="mt-1 sm:mt-2">
              <span className="text-gray-400">$</span>{" "}
              <span className="text-white">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
