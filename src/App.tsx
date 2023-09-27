import React from "react";

import { sectionsID } from "./utils/projectData";
import useChangeAppLanguage from "./hooks/useChangeAppTitle";
import NavBar from "./layout/navBar/NavBar";
import StatisticsNumbers from "./sections/about/StatisticsNumbers";
import Home from "./sections/homePage/Home";
import WhatWeDo from "./sections/what-we-do/WhatWeDo";
import OurProducts from "./sections/what-we-do/product/OurProducts";
import Clients from "./sections/what-we-do/Clients";
import ContactUs from "./sections/contact-us/ContactUs";
import Footer from "./sections/footer/Footer";
import AboutCards from "./sections/about/AboutCards";

function App() {
  const { home, aboutUs, whatWeAreDoing, getInTouch } = sectionsID;
  const [direction] = useChangeAppLanguage();

  return (
    <>
      <div dir={direction} className="overflow-auto">
        <NavBar />
        <section className="flex min-h-[100dvh] flex-col" id={home}>
          <Home />
        </section>
        <div className="flex flex-col items-center justify-center gap-32 p-10">
          <section id={aboutUs} className="max-w-site flex flex-col gap-32 ">
            <AboutCards />
          </section>
          <section className="w-full">
            <StatisticsNumbers />
          </section>
          <section
            id={whatWeAreDoing}
            className="max-w-site flex w-full flex-col"
          >
            <WhatWeDo />
          </section>
          <section className="max-w-site w-full">
            <OurProducts />
          </section>
          <section className="w-full">
            <Clients />
          </section>
          <section id={getInTouch} className=" max-w-site w-full">
            <ContactUs />
          </section>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
