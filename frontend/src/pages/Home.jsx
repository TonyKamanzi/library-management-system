import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import CoreFeatures from "../components/home/CoreFeatures";
import HowItWorks from "../components/home/HowItWorks";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Statistics />
      <CoreFeatures />
      <HowItWorks />
      <CallToAction />
      <Footer/>
    </div>
  );
}
