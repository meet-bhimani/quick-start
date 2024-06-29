import "./App.css";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/sections/About";
import Companies from "./pages/sections/Companies";
import FeaturedServices from "./pages/sections/FeaturedServices";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <FeaturedServices />
      <About />
      <Companies />
    </>
  );
}

export default App;
