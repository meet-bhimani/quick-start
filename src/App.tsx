import "./App.css";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/LandingPage";
import About from "./pages/sections/About";
import FeaturedServices from "./pages/sections/FeaturedServices";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <FeaturedServices />
      <About />
    </>
  );
}

export default App;
