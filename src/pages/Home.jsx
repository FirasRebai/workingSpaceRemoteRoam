import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/services";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Find perfect working space" subtitle="Explore">
          <Link to="/coworking-space" className="btn-primary">
            our working spaces
          </Link>
        </Banner>
      </Hero>
      <Services/>
    </>
  );
}
