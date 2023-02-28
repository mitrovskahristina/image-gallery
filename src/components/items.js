import React from "react";
import Cup from "./Cup";
import picture from '../assets/main-banner.png'
import Scene from './Scene'

const items = [
  {
    thumbnail: <img src={picture} />,
    content: <img src={picture} />,
  },
  {
    thumbnail: <img src={picture} />,
    content: <Scene />,
  },
  {
    thumbnail: <img src={picture} />,
    content: <img src={picture} />,
  },
];

// const App = () => {
//   return <Gallery items={items} />;
// };

export default items;