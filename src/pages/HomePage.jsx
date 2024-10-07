import About from "../components/sections/About";
import Clients from "../components/sections/Clients";
import Contact from "../components/sections/Contact";
import Features from "../components/sections/Features";
import Professionals from "../components/sections/Professionals";
import Services from "../components/sections/Services";

const HomePage = () => {
  return (
    <>
      <Features />
      <About />
      <Services />
      <Professionals />
      <Clients />
      <Contact/>
    </>
  );
};

export default HomePage;
