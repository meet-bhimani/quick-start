import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../utils/functions";

const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(`${id}-section`);

      if (element) {
        const navElement = document.querySelector("#navbar") as HTMLDivElement;

        if (navElement) {
          const elementTop = element.getBoundingClientRect().top;
          const navHeight = navElement.offsetHeight;

          window.scrollTo({
            top: elementTop + window.scrollY - navHeight,
            behavior: "smooth",
          });
        }
      } else {
        window.location.hash = "";
      }
    } else {
      scrollToTop();
    }
  }, [hash]);
};

export default useScrollToSection;
