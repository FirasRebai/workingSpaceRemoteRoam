import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const CoworkingSpaces = () => {
  return <Hero hero="roomsHero">
    <Banner title="our working spaces">
  <Link to="/" className="btn-primary">
  return home 
  </Link>
    </Banner>
  </Hero>;
};

export default CoworkingSpaces;
