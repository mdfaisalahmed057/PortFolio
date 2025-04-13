import React, { useState } from 'react';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import html from '../assets/tech/html.png';
import css from '../assets/tech/css.png';
import javascript from '../assets/tech/javascript.png';
import typescript from '../assets/tech/typescript.png';
import reactjs from '../assets/tech/reactjs.png';
import redux from '../assets/tech/redux.png';
import tailwind from '../assets/tech/tailwind.png';
import nodejs from '../assets/tech/nodejs.png';
import mongodb from '../assets/tech/mongodb.png';
import threejs from '../assets/tech/threejs.svg';
import git from '../assets/tech/git.png';
import figma from '../assets/tech/figma.png';
import docker from '../assets/tech/docker.png';
import vscode from '../assets/vs_code.png'
import flask from '../assets/Flask.png'
import python from '../assets/Python.png'
import sql from '../assets/SQL Developer.png'
import mysql from '../assets/MySQL.png'
import postman from '../assets/Postman.png'
// Split technologies into tech stack and tools
const techStack = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Web Component", icon: javascript },
  { name: "React Native", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL", icon: sql },
  { name: "MySQL", icon: mysql },
  { name: "Python", icon: python },
  { name: "Flask", icon: flask },
];

const tools = [
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Cursor", icon: docker },
  { name: "VS Code", icon: vscode },
  { name: "GitHub", icon: git },
  { name: "Postman", icon: postman },
  { name: "ChatGPT", icon: figma },
  { name: "DALL-E", icon: tailwind },
  { name: "Midjourney", icon: threejs },
  { name: "Cursor", icon: docker },
  { name: "GenAI", icon: docker },
  { name: "Google AI Studio", icon: redux },
];

const Tech = () => {
  const [activeTab, setActiveTab] = useState('techstack');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-10">
      <div className="mb-12">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
          My Technical Expertise
        </h2>
        
        {/* Tab navigation */}
        <div className="flex justify-center gap-6 mb-10">
          <button 
            className={`relative px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 
              ${activeTab === 'techstack' 
                ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg' 
                : 'text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-500'}`}
            onClick={() => handleTabChange('techstack')}
          >
            Tech Stack
            {activeTab === 'techstack' && (
              <span className="absolute inset-0 border-2 border-white rounded-lg opacity-50 animate-pulse"></span>
            )}
          </button>
          
          <button 
            className={`relative px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300
              ${activeTab === 'tools' 
                ? 'text-white bg-gradient-to-r from-cyan-600 to-teal-600 shadow-lg' 
                : 'text-gray-400 hover:text-gray-200 border border-gray-700 hover:border-gray-500'}`}
            onClick={() => handleTabChange('tools')}
          >
            Tools
            {activeTab === 'tools' && (
              <span className="absolute inset-0 border-2 border-white rounded-lg opacity-50 animate-pulse"></span>
            )}
          </button>
        </div>
      </div>

      {/* Tech/Tools Content */}
      <div 
        className="w-full transition-all duration-500 transform"
        style={{
          opacity: 1,
          transform: `translateX(${activeTab === 'techstack' ? '0' : '0'})`
        }}
      >
        <div className="flex flex-wrap justify-center gap-8">
          {(activeTab === 'techstack' ? techStack : tools).map((item, index) => (
            <div 
              key={`${item.name}-${index}`} 
              className="group flex flex-col items-center p-4 rounded-xl bg-tertiary bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 w-32 h-36 justify-between hover:shadow-lg hover:shadow-primary/20"
              style={{
                animation: `fadeSlide 0.5s ease-out ${index * 0.05}s forwards`,
                opacity: 0
              }}
            >
              <div className="w-16 h-16 flex items-center justify-center p-2 rounded-full bg-black/30 overflow-hidden">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="mt-3 text-sm text-center font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes fadeSlide {
          from { 
            opacity: 0; 
            transform: ${activeTab === 'techstack' ? 'translateX(-20px)' : 'translateX(20px)'};
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Tech, "");