import "./App.css";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/sections/About";
import Companies from "./pages/sections/Companies";
import FeatureDetails from "./pages/sections/FeatureDetails";
import FeaturedServices from "./pages/sections/FeaturedServices";
import Features from "./pages/sections/Features";
import MoreFeatures from "./pages/sections/MoreFeatures";
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
    </>
  );
}

export default App;
