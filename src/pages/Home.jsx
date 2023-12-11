import React from "react";
import HomeInfoSection from "../ui/home-infoSection/HomeInfoSection";
import HomeNavbar from "../ui/home-navbar/HomeNavbar";
import Footer from "../ui/home-footer/Footer";

export const infos = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hotel Booking Management",
  headline: "Effortless Booking Management",
  description:
    "Streamline your operations with our intuitive booking management system. Enhance efficiency, delight your guests.",
  buttonLabel: "Get Started",
  imgStart: "",
  img: "/svg-1.svg",
  alt: "Credit Card",
  start: "",
};

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <HomeInfoSection {...infos} />
      <Footer />
    </>
  );
};

export default Home;
