import { BsArrowUpShort } from "react-icons/bs";
import { scrollToTop } from "../utils/functions";
import useScroll from "../hooks/useScroll";

function ScrollToTopButton() {
  const isScrolled = useScroll();

  return (
    isScrolled && (
      <div
        className='flex items-center justify-center bg-primary text-white text-2xl size-[44px] fixed right-4 bottom-4 rounded-full cursor-pointer'
        onClick={scrollToTop}
        data-aos='fade-up'>
        <span>
          <BsArrowUpShort />
        </span>
      </div>
    )
  );
}

export default ScrollToTopButton;
