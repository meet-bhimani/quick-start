import { useEffect, useState } from "react";

function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const navElement = document.querySelector("#navbar") as HTMLElement;
    if (navElement) {
      const navHeight = navElement.offsetHeight;
      setIsScrolled(window.scrollY > navHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
}

export default useScroll;
