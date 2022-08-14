import React from "react";
import Agent from "./Agent";
import Award from "./Award";
import Banner from "./Banner";
import Ceo from "./Ceo";
import Footer from "./Footer";
import HomeReview from "./HomeReview";
import HomeViews from "./HomeViews";
import Offer from "./Offer";
import Type from "./Type";

const Home = () => {
  return (
    <div>
      <Banner />
      <Type />
      <HomeViews />
      <Ceo />
      <HomeReview />
      <Agent />
      <Award />
      <Offer />
    </div>
  );
};

export default Home;
