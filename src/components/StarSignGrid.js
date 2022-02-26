import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

const SingleStarSign = ({ zodiac }) => {
  const image = getImage(zodiac.icon);
  return (
    <div className="flex justify-start items-center border border-secondary-color rounded-lg py-3 px-6">
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
