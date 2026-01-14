import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";


import HomePage from "./page/Home";
import Mission from "./components/Mission/Mission";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Services from "./components/Services/Services";  

import "./i18n"; 
const App = () => {


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Mission />
        <Services />
        <ProjectSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
