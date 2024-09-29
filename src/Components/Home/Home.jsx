import React from "react";
import Options from "./Options";
import TitlebarBelowMasonryImageList from "../../Mui Components/ImageList";
TitlebarBelowMasonryImageList


function Home({ questions }) {
  // Data
  const optionsData = {
    1: {
      workType: `Graphic Design`,
      number: "1",
      thumbnail: `https://ebizfiling.com/wp-content/uploads/2021/11/Art-of-graphic-designing.png`,
      description: `Graphic design is the process of creating visual content to communicate messages. It involves combining text, images, and colors to make designs for things like logos, websites, posters, and ads. Graphic designers use software like Photoshop or Illustrator to create their work, aiming to make visuals that are both attractive and informative.`,
    },
    2: {
      workType: "Posters",
      number: "2",
      thumbnail: `https://i.pinimg.com/564x/0d/f3/a7/0df3a78d5899b65bfbcc2f40e5f20457.jpg`,
      description: `A poster is a printed or digital design used to communicate information visually. It typically includes a mix of images, text, and colors to grab attention and convey a message quickly. Posters are often used for advertising events, products, or ideas. They come in different sizes but are designed to be easily seen and read from a distance.`,
    },
  };

  return (
    
    // my code from here
    <div className="h-screen flex flex-col items-center">
      <TitlebarBelowMasonryImageList/>
      <div className="p-8 w-1/4 rounded-2xl m-4 flex justify-center text-pink-400 font-bold text-lg">
        Works
      </div>
      <div className="w-1/2 flex-wrap">
        <Options options={optionsData[1]} />
        <Options options={optionsData[2]} />
      </div>
    </div>
  );
}

export default Home;
