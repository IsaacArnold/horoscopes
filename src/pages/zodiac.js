import React from "react";

const Zodaic = ({ location }) => {
  return (
    <>
      <h1>Hello from the zodiac page</h1>
      <p>{location.state.name}</p>
    </>
  );
};

export default Zodaic;
