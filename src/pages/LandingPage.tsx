import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/common/Button";
import { BsX } from "react-icons/bs";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

function LandingPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleWatchVideoClick = () => {
    document.body.style.overflowY = "hidden";
    setIsLoading(true);
    setIsVideoOpen(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleCloseVideoClick = () => {
    document.body.style.overflowY = "auto";
    setIsVideoOpen(false);
  };

  return (
    <section id='hero-section' className='relative min-h-svh overflow-hidden pt-10 px-2'>
      {isVideoOpen && (
        <>
          <BsX
            className='absolute top-3 right-3 text-white text-5xl z-[51] cursor-pointer'
            onClick={handleCloseVideoClick}
          />
          <div className='fixed w-svw h-svh top-0 left-0 z-50 grid place-items-center bg-[rgba(0,0,0,0.8)]'>
            {isLoading ? (
              <ClipLoader size={30} color='white' className='text-white animate-spin' />
            ) : (
              <iframe
                width='70%'
                height='70%'
                src='https://www.youtube.com/embed/LXb3EKWsInQ?si=VBXXlssr_2CJPBXI'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen></iframe>
            )}
          </div>
        </>
      )}
      <div>
        <img src='/images/hero-bg-light.webp' alt='hero-bg-light' className='w-svw absolute top-0 left-0 h-svh -z-10' />
        <div className='absolute top-0 left-0 w-full h-full bg-white opacity-85 -z-10'></div>
      </div>
      <div className='w-full px-2 pt-40 flex flex-col items-center justify-center'>
        <h1 className='text-heading text-center text-3xl sm:text-5xl font-bold font-nunito' data-aos='fade-up'>
          Welcome to <span className='text-primary'>QuickStart</span>
        </h1>
        <h3 className='text-gray-500 text-base text-center sm:text-xl mt-4' data-aos='fade-up' data-aos-delay='100'>
          Quickly start your project now and set the stage for success
        </h3>
        <div className='flex mt-8 gap-2' data-aos='fade-up' data-aos-delay='200'>
          <Button rounded variant='primary' size='md' className='px-8 py-0 sm:py-1 font-nunito'>
            Get Started
          </Button>
          <Button
            rounded
            variant='primary'
            size='md'
            className=' bg-transparent text-black flex items-center justify-center gap-2'
            onClick={handleWatchVideoClick}>
            <FaRegCirclePlay className='text-3xl text-primary' />
            <span className='font-bold hover:text-primary duration-300'>Watch Video</span>
          </Button>
        </div>
      </div>
      <div className='w-[min(90%,600px)] mx-auto'>
        <img src='/images/hero-services-img.webp' alt='hero-section-image' data-aos='zoom-out' data-aos-delay='300' />
      </div>
    </section>
  );
}

export default LandingPage;
