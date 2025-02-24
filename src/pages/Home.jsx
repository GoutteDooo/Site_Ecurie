import React from "react";
import Introduction from "../components/home/Introduction";
import Main from "../components/home/Main";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className="home">
      <Introduction />
      <Main />
    </div>
  );
};

export default Home;
