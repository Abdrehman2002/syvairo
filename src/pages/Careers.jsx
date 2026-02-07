import React from "react";
import { motion } from "framer-motion";
import CareersHero from "../compounents/careere/CareersHero";
import CultureSection from "../compounents/careere/CultureSection";
import OpenRolesSection from "../compounents/careere/OpenRolesSection";
import ValuesSection from "../compounents/careere/ValuesSection";
import WorkYourWaySection from "../compounents/careere/WorkYourWaySection";
import WhyJoinUsSection from "../compounents/careere/WhyJoinUsSection";
import CallToActionSection from "../compounents/careere/CallToActionSection";

// const openPositions = [
//   {
//     title: "Frontend Developer",
//     location: "Remote",
//     type: "Full-Time",
//     description: "Work on building scalable web applications with React.",
//   },
//   {
//     title: "AI Engineer",
//     location: "Bangalore, India",
//     type: "Full-Time",
//     description: "Develop AI agents and automation workflows for clients.",
//   },
//   {
//     title: "Marketing Specialist",
//     location: "Hybrid - Madrid, Spain",
//     type: "Part-Time",
//     description: "Manage campaigns, content, and social media strategy.",
//   },
// ];

// const companyValues = [
//   "Innovation: We embrace cutting-edge AI & automation technology.",
//   "Collaboration: Teamwork makes us stronger across borders.",
//   "Integrity: Honest, transparent, and ethical in all we do.",
//   "Growth: Personal & professional growth is a priority.",
// ];

const Careers = () => {
  return (
    <>
      <OpenRolesSection />
      <CareersHero />
      <CultureSection />
      <ValuesSection />
      <WorkYourWaySection />
      <WhyJoinUsSection />
      <CallToActionSection />
      
    </>
  );
};

export default Careers;
