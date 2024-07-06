import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/sections/About";
import Companies from "./pages/sections/Companies";
import Contact from "./pages/sections/Contact";
import Faqs from "./pages/sections/Faqs";
import FeatureDetails from "./pages/sections/FeatureDetails";
import FeaturedServices from "./pages/sections/FeaturedServices";
import Features from "./pages/sections/Features";
import Footer from "./pages/sections/Footer";
import MoreFeatures from "./pages/sections/MoreFeatures";
import Pricing from "./pages/sections/Pricing";
import Services from "./pages/sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <FeaturedServices />
      <About />
      <Companies />
      <Features />
      <FeatureDetails />
      <Services />
      <MoreFeatures />
      <Pricing />
      <Faqs />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
