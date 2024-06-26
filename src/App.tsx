import "./App.css";
import Navbar from "./layout/Navbar";
import LandingPage from "./pages/LandingPage";
import FeaturedServices from "./pages/sections/FeaturedServices";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <FeaturedServices />
    </>
  );
}

export default App;
