import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "../../components/common/Button";
import { GoArrowRight } from "react-icons/go";

const GenerateAboutFeatureLine = ({ text }: { text: string }) => {
  return (
    <li className='list-item'>
      <FaRegCircleCheck className='text-primary text-xl inline mr-2 mb-1' />
      {text}
    </li>
  );
};

const AboutFeatures: string[] = [
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit.",
  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
];

function About() {
  return (
    <>
      <section
        id='about-section'
        className='py-14 px-4 min-h-[600px] sm:px-10 md:px-32 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div>
          <h2 className='uppercase text-default'>Who we are</h2>
          <h1 className='font-nunito mt-4 text-3xl text-heading font-bold tracking-wider leading-10'>
            Unleashing Potential with Creative Strategy
          </h1>
          <p className='text-default italic'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <ul className='grid place-items-start mt-4 gap-4 text-default'>
            {AboutFeatures.map((feature) => {
              return <GenerateAboutFeatureLine key={feature} text={feature} />;
            })}
          </ul>
          <Button size='md' className='flex items-center gap-2 mt-6 font-nunito py-3'>
            Read More <GoArrowRight />
          </Button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-6 lg:max-h-[400px]'>
          <div>
            <img src='/images/about-company-1.jpg' alt='about image 1' className='rounded-md h-full' />
          </div>
          <div className='grid place-content-between gap-8'>
            <img src='/images/about-company-2.jpg' alt='about image 1' className='rounded-md h-full' />
            <img src='/images/about-company-3.jpg' alt='about image 1' className='rounded-md h-full' />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
