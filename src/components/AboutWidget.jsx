import React, { useState } from 'react';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const AboutWidget = () => {
  // State to track the active tab, defaulting to 'About Me'
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    // Main widget container
    <div className="bg-[#1C1C1C] rounded-2xl p-6 flex flex-col gap-6 border border-[#383838] shadow-lg">

      {/* Top bar: Icon + Tabs */}
      <div className="flex justify-between items-center">
        <button onClick={() => alert('This widget displays information about the sales representative.')}>
    <HiOutlineQuestionMarkCircle className="text-2xl text-gray-400" />
  </button>
        <div className="flex items-center gap-2 p-1 bg-[#292929] rounded-full">
          <button
            onClick={() => setActiveTab('About Me')}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeTab === 'About Me' ? 'bg-black text-white' : 'text-gray-400 hover:bg-black/20'
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab('Experiences')}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeTab === 'Experiences' ? 'bg-black text-white' : 'text-gray-400 hover:bg-black/20'
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab('Recommended')}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeTab === 'Recommended' ? 'bg-black text-white' : 'text-gray-400 hover:bg-black/20'
            }`}
          >
            Recommended
          </button>
        </div>
      </div>

      {/* Content section */}
      <div>
        {activeTab === 'About Me' && (
          <p className="text-gray-300 text-sm leading-relaxed">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            <br /><br />
            I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9 - 10 AM. This is a...
          </p>
        )}
        {activeTab === 'Experiences' && (
          <p className="text-gray-300 text-sm leading-relaxed">
            Content for Experiences tab.
          </p>
        )}
        {activeTab === 'Recommended' && (
          <p className="text-gray-300 text-sm leading-relaxed">
            Content for Recommended tab.
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutWidget;