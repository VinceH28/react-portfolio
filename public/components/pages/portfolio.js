import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioCard from "../../components/portfolioCard"
import ProjectsHeaderDisplay from "../../components/ProjectsHeaderDisplay"


function Portfolio() {
  return (
    <div>
    <Navbar />
    <ProjectsHeaderDisplay/>
    <PortfolioCard />
  </div>
  );
}
export default Portfolio;