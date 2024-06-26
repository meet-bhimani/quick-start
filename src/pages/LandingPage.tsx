import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/common/Button";

function LandingPage() {
  return (
    <section id='hero-section' className='relative min-h-svh overflow-hidden pt-10'>
      <div>
        <img src='/images/hero-bg-light.webp' alt='hero-bg-light' className='w-svw absolute top-0 left-0 h-svh -z-10' />
        <div className='absolute top-0 left-0 w-full h-full bg-white opacity-85 -z-10'></div>
      </div>
      <div className='w-full pt-40 flex flex-col items-center justify-center'>
        <h1 className='text-heading text-5xl font-bold font-nunito'>
          Welcome to <span className='text-primary'>QuickStart</span>
        </h1>
        <h3 className='text-gray-500 text-xl mt-4'>Quickly start your project now and set the stage for success</h3>
        <div className='flex mt-8 gap-2'>
          <Button rounded variant='primary' size='md' className='px-8 py-1 font-nunito'>
            Get Started
          </Button>
          <Button
            rounded
            variant='primary'
            size='md'
            className=' bg-transparent text-black flex items-center justify-center gap-2'>
            <FaRegCirclePlay className='text-3xl text-primary' /> <span className='font-bold'>Watch Video </span>
          </Button>
        </div>
      </div>
      <div className='w-[min(90%,600px)] mx-auto'>
        <img src='/images/hero-services-img.webp' alt='hero-section-image' />
      </div>
    </section>
  );
}

export default LandingPage;
