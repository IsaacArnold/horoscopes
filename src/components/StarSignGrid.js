import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

const SingleStarSign = ({ zodiac, cb }) => {
  const [zodiacName, setZodiacName] = useState(zodiac.name);
  const image = getImage(zodiac.icon);

  const handleClick = () => {
    setZodiacName(zodiac.name);
    console.log(zodiacName);
  };

  return (
    <div
      className="flex justify-start items-center border border-secondary-color rounded-lg py-3 px-6"
      onClick={handleClick}
    >
      <GatsbyImage image={image} alt={zodiac.name} />
      <p className="ml-5">{zodiac.name}</p>
    </div>
  );
};

const StarSignGrid = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          dataJson {
            zodiacs {
              id
              name
              icon {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="grid grid-cols-2 gap-4 mt-5">
          {data.dataJson.zodiacs.map((zodiac) => (
            <SingleStarSign zodiac={zodiac} key={zodiac.id} />
          ))}
        </div>
      )}
    />
  );
};

export default StarSignGrid;
