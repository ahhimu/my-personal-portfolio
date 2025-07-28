import React from "react";
import Banner from "../../Components/Banner";
import ServiceSection from "../../Components/ServiceSection";
import ContactSection from "../../Components/ContactSection";
import RecentProject from "../../Components/RecentProject";
import { Helmet } from "react-helmet";
import AboutMeSection from "../../Components/AboutMeSection";
import Contact from "../ContactMe/Contact";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - AHSAN HABIB</title>
        <meta
          name="description"
          content="This is a portfolio website. This website is AHSAN HABIB's personal portfolio, showcasing his skills, projects, and professional journey as a MERN-stack web developer.  "
        />
        <link rel="shortcut icon" href="ch_favLogo.png" type="image/x-icon" />
      </Helmet>
      <div className="px-4">
        <Banner />
        <AboutMeSection />

        <RecentProject />
        <Contact />
        <ContactSection />
      </div>
    </>
  );
};
