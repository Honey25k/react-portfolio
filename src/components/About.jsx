import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, my name is Honey, I have recently graduated from UCI's Full Stack Web Development program. 
          Before starting this program I was a nursing student in Sweden but decided to relocate to California and change my career path.
     
        </p>

        <br />

        <p className="text-xl">
          I have always had an interest of problem solving and math which I can relate to in this field.
          I am looking forward to working with different projects and grow my knowledge in Web Developing.
        </p>
      </div>
    </div>
  );
};

export default About;
