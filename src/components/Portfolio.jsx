import React from "react";
import ConnectFour from "../assets/portfolio/connect4.png";
import preWork from "../assets/portfolio/prework1.jpeg";
import wineAndDine from "../assets/portfolio/screenshot.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: preWork,
      demo: "https://honey25k.github.io/prework-study-guide/",
      textDemo: "Demo",
      code: "https://github.com/Honey25k/prework-study-guide",
      textCode: "Repo",
      
    },
    {
      id: 2,
      src: wineAndDine,
      demo: "https://a-wilson-96.github.io/wine-and-dine-finderrz/",
      textDemo: "Demo",
      code: "https://github.com/Honey25k/wine-and-dine-finderrz",
      textCode: "Repo",
    },
    {
      id: 3,
      src: ConnectFour,
      demo: "https://shielded-beyond-66940.herokuapp.com",
      textDemo: "Demo",
      code: "https://github.com/Honey25k/deployed-connect4-game",
      textCode: "Repo",
    },
  ];

  return (
    <div
      name="portfolio"
      className="h-screen w-full bg-gradient-to-b from-indigo-500 via-purple to-pink-500">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">My current work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, textDemo, textCode }) => (

            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target='_blank' rel='noreferrer'>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                    {textDemo}
                  </button>
                </a>
                <a href={code} target='_blank' rel='noreferrer'>
                  <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    {textCode}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
