import React from 'react';
import pythonLogo from "../assets/python.svg";
import reactLogo from "../assets/React.svg";
import { FaLink } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import jsLogo from "../assets/js.svg";
import swiftLogo from "../assets/swift.svg";
import firebaseLogo from "../assets/firebase.svg";
import cplusLogo from "../assets/cplus.svg";
export function DisplayProjects() {
  return (
    <div className="container mx-auto">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-y-8 gap-x-8">
            <a target="_blank" rel="noopener" href="https://github.com/kylelee1027/Books-Read-Database" className="group border-8 border-transparent transition-colors duration-300 ease-in-out hover:bg-slate-100 rounded-2xl">
                <div className="container space-y-3 mx-auto">
                    <div className="flex gap-x-3 my-auto">
                        <img className="w-8 h-8"src={reactLogo} alt="React"/>
                        <img className="w-8 h-8"src={jsLogo} alt="React"/>
                        <SiMongodb className="w-8 h-8"/>
                    </div>
                    <div className="font-bold">Book Tracker</div>
                    <div className="text-slate-600">Personal web app that keeps track of a list of books I've read. Uses MongoDB, Express, and Node.js for the backend and serves the frontend using React.</div>
                    <div className="italic text-slate-600 flex group-hover:text-sky-500 transition-colors duration-300 ease-in-out"><FaLink className="mr-3 my-auto"/> View Project</div>
                </div>
            </a>
            <a target="_blank" rel="noopener" href="https://github.com/kylelee1027/KyleBot" className="group border-8 border-transparent transition-colors duration-300 ease-in-out hover:bg-slate-100 rounded-2xl">
                <div className="container space-y-3 mx-auto">
                    <div><img className="w-8 h-8"src={reactLogo} alt="React"/></div>
                    <div className="font-bold">KyleBot</div>
                    <div className="text-slate-600">A chat bot utilizing Gemini 1.5 API that has been fine-tuned on my own personal chats in order to deliver messages in Kyle-style.</div>
                    <div className="italic text-slate-600 flex group-hover:text-sky-500 transition-colors duration-300 ease-in-out"><FaLink className="mr-3 my-auto"/> View Project</div>
                </div>
            </a>
            <a target="_blank" rel="noopener" href="https://github.com/kylelee1027/expense-tracking" className="group border-8 border-transparent transition-colors duration-300 ease-in-out hover:bg-slate-100 rounded-2xl">
                <div className="container space-y-3 mx-auto">
                    <div className="flex gap-x-3">
                        <img className="w-8 h-8"src={swiftLogo} alt="Swift"/>
                        <img className="w-8 h-8"src={firebaseLogo} alt="Firebase"/>
                    </div>
                    <div className="font-bold">Expense Tracker</div>
                    <div className="text-slate-600">iOS app that makes API calls to the user's bank of choice in order to display their expenses for that month and makes suggestions based on their spending habits.</div>
                    <div className="italic text-slate-600 flex group-hover:text-sky-500 transition-colors duration-300 ease-in-out"><FaLink className="mr-3 my-auto"/> View Project</div>
                </div>
            </a>
            <div className="container space-y-3 mx-auto">
                <div className="flex gap-x-3">
                    <img className="w-8 h-8"src={pythonLogo} alt="Python"/>
                    <img className="w-8 h-8"src={reactLogo} alt="React"/>
                </div>
                <div className="font-bold">Instagram Clone</div>
                <div className="text-slate-600">An Instagram Clone using Flask to handle login authentication and a RESTful API to communicate with a SQLite database. Frontend served using React and Jinja2 templating.</div>
                <div className="italic text-slate-600">School Project</div>
            </div>
            <div className="container space-y-3 mx-auto">
                <div className="flex gap-x-3">
                    <img className="w-8 h-8"src={pythonLogo} alt="Python"/>
                </div>
                <div className="font-bold">MapReduce Search Engine</div>
                <div className="text-slate-600">A scalable search engine that utilizes tf-idf, PageRank, and parallel data processing with MapReduce. Used Service-Oriented Architecture to scale dynamic pages and web search.</div>
                <div className="italic text-slate-600">School Project</div>
            </div>
            <div className="container space-y-3 mx-auto">
                <div className="flex gap-x-3">
                    <img className="w-8 h-8"src={cplusLogo} alt="C++"/>
                </div>
                <div className="font-bold">Stock Market Simulator</div>
                <div className="text-slate-600">Developed a streaming algorithm that makes optimal trades in real time in a stock market simulation.</div>
                <div className="italic text-slate-600">School Project</div>
            </div>
        </div>
    </div>

  )
}

export default DisplayProjects