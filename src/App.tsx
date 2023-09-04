import React from 'react';

import { sectionsID } from './utils/projectData';
import useChangeAppLanguage from './hooks/useChangeAppTitle';
import NavBar from './layout/navBar/NavBar';
import StatisticsNumbers from './sections/about/StatisticsNumbers';
import Home from './sections/homePage/Home';
import WhatWeDo from './sections/what-we-do/WhatWeDo';
import OurProducts from './sections/what-we-do/product/OurProducts';
import Clients from './sections/what-we-do/Clients';
import ContactUs from './sections/contact-us/ContactUs';
import Footer from './sections/footer/Footer';
import AboutCards from './sections/about/AboutCards';

function App() {
  const { home, aboutUs, whatWeAreDoing, getInTouch } = sectionsID;
  const [direction] = useChangeAppLanguage();

  return (
    <div>
      <div dir={direction} className="overflow-auto">
        <NavBar />
        <section className="flex min-h-[100dvh] flex-col" id={home}>
          <Home />
        </section>
        <div className="mx-auto flex max-w-site flex-col gap-32 p-10">
          <section id={aboutUs} className="flex flex-col gap-32">
            <AboutCards />
            <StatisticsNumbers />
          </section>
          <section
            id={whatWeAreDoing}
            className="flex flex-col gap-20 lg:gap-44"
          >
            <WhatWeDo />
            <OurProducts />
            <Clients />
          </section>
          <section id={getInTouch}>
            <ContactUs />
          </section>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
