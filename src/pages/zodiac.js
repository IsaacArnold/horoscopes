import React, { useEffect, useState } from "react";

import Chevron from "../images/chevron.svg";

const Zodaic = ({ location }) => {
  const zodiac = location.state.name.toLowerCase();
  const [data, setData] = useState();

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
      .then((result) => setData(result))
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {data && (
        <>
          <Chevron />
          <h1>Hello from the zodiac page</h1>
          <p>{zodiac}</p>
        </>
      )}
    </>
  );
};

export default Zodaic;
