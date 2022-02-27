import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import moment from "moment";
import { Link } from "gatsby";

import Chevron from "../images/chevron.svg";
import Color from "../images/icons/svg/compat/color.svg";
import Face from "../images/icons/svg/compat/face.svg";
import Heart from "../images/icons/svg/compat/heart.svg";
import Number from "../images/icons/svg/compat/number.svg";
import Time from "../images/icons/svg/compat/time.svg";

const Zodaic = ({ location, data }) => {
  const originalName = location.state.name;
  const zodiac = location.state.name.toLowerCase();
  const [zodiacInfo, setZodiacInfo] = useState();

  async function fetchData() {
    const res = await fetch(
      `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${zodiac}&day=today`,
      {
        method: "POST",
        headers: {
          "x-rapidapi-key":
            "e512a2ef3emshbb17615ba31fb64p1f605fjsnc3da16c64e80",
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        },
      }
    );
    res
      .json()
      .then((result) => setZodiacInfo(result))
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(zodiacInfo);

  // TODO: Create a single class for the reusable styles below

  return (
    <Layout>
      {zodiacInfo && (
        <main className="flex flex-col justify-center w-full">
          <div className="bg-secondary-color text-primary-color rounded-br-[40px]">
            <div className="w-11/12 m-auto py-8">
              <Link to="/">
                <Chevron />
              </Link>
              {/* Title section */}
              <div className="mt-8 mb-4">
                <h1 className="font-semibold text-2xl">{originalName}</h1>
                <p className="text-sm">{zodiacInfo.date_range}</p>
              </div>
            </div>
          </div>

          <section className="w-11/12 m-auto">
            {/* Day selection section */}
            <div className="flex my-8">
              <p className="font-semibold text-xl mr-8">Today</p>
              <p className="font-semibold text-xl">Tomorrow</p>
            </div>

            {/* Main content section */}
            <div>
              {/* Description section */}
              <div className="mb-8">
                <p className="font-semibold text-sm mb-2">
                  {moment().format("MMM D")}
                </p>
                <p className="text-sm">{zodiacInfo.description}</p>
              </div>
              {/* Additional information section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Heart />
                  <div className="ml-2">
                    <p className="font-semibold text-sm">COMPATIBILITY</p>
                    <p className="text-sm">{zodiacInfo.compatibility}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Face />
                  <div className="ml-2">
                    <p className="font-semibold text-sm">MOOD</p>
                    <p className="text-sm">{zodiacInfo.mood}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Color />
                  <div className="ml-2">
                    <p className="font-semibold text-sm">COLOUR</p>
                    <p className="text-sm">{zodiacInfo.color}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Number />
                  <div className="ml-2">
                    <p className="font-semibold text-sm">LUCKY NUMBER</p>
                    <p className="text-sm">{zodiacInfo.lucky_number}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Time />
                  <div className="ml-2">
                    <p className="font-semibold text-sm">LUCKY TIME</p>
                    <p className="text-sm">{zodiacInfo.lucky_time}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </Layout>
  );
};

export default Zodaic;
