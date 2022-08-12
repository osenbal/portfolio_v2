import React from "react";
import Slidebar from "../../components/Slidebar";
import Dashboard from "../organisms/Dashboard";
import About from "../organisms/About";
import Portfolio from "../organisms/Portfolio";
import Skills from "../organisms/Skills";
import Resume from "../organisms/Resume";
import Contacts from "../organisms/Contacts";
import Blog from "../organisms/Blog";

function Home() {
  return (
    <>
      <Slidebar />
      <main className="main">
        <Dashboard />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Blog />
        <Contacts />
      </main>
    </>
  );
}

export default Home;
