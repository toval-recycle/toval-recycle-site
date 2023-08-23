import React from 'react';
import Home from './pages-components/homePage/Home';
import NavBar from './components/navBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import WhatWeDo from './pages-components/what-we-do/WhatWeDo';
import Contact from './pages-components/contact-us/ContactUs';
import Cards from './pages-components/about/AboutCards';
import StatisticsNumbers from './pages-components/about/StatisticsNumbers';
import Clients from './pages-components/what-we-do/Clients';
import Footer from './pages-components/footer/Footer';
import OurProducts from './pages-components/what-we-do/product/OurProducts';
import { sectionsID } from './utils/projectData';
import useChangeAppLanguage from './hooks/useChangeAppTitle';

function App() {
  const { home, aboutUs, whatWeAreDoing, getInTouch } = sectionsID;
  const [direction] = useChangeAppLanguage();

  return (
    <Router>
      <div dir={direction} className="overflow-auto">
        <NavBar />
        <section className="flex min-h-[100dvh] flex-col" id={home}>
          <Home />
        </section>
        <div className="mx-auto flex max-w-site flex-col gap-32 p-10">
          <section id={aboutUs} className="flex flex-col gap-32">
            <Cards />
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
            <Contact />
          </section>
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
