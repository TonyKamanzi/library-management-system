import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import CoreFeatures from "../components/home/CoreFeatures";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Statistics />
      <CoreFeatures/>
    </div>
  );
}
