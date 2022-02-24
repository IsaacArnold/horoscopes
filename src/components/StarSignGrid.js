import React from "react";
import { StaticQuery, graphql } from "gatsby";

import homepageData from "../data/homepageData.json";

const SingleStarSign = ({ zodiac }) => {
  return (
    <div className="flex justify-center items-center border border-secondary-color rounded-lg py-3 px-6">
      <img
        // src={`../images/icons/png/${zodiac.name.toLowerCase()}.png`}
        alt={zodiac.name}
      />
      <p className="ml-2">{zodiac.name}</p>
    </div>
  );
};

const StarSignGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {homepageData.zodiacs.map((zodiac) => (
        <SingleStarSign zodiac={zodiac} key={zodiac.id} />
      ))}
    </div>
  );
};

export default StarSignGrid;
