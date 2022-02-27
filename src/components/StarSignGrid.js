import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql, Link } from "gatsby";

const SingleStarSign = ({ zodiac }) => {
  const [zodiacName, setZodiacName] = useState(zodiac.name);
  const image = getImage(zodiac.icon);

  const handleClick = () => {
    setZodiacName(zodiac.name);
  };

  // The state prop in the below Link tag allows me to pass the state 'zodiacName' onto the next page
  return (
    <Link
      className="flex justify-start items-center border border-secondary-color rounded-lg py-3 px-6"
      onClick={handleClick}
      to="/zodiac"
      state={{ name: zodiacName }}
    >
      <GatsbyImage image={image} alt={zodiac.name} />
      <p className="ml-5">{zodiac.name}</p>
    </Link>
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
