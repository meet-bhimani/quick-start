import { ReactElement } from "react";
import NewsletterForm from "../../components/NewsLetterForm";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const FooterUsefulLinks: { id: number; text: string }[] = [
  {
    id: 1,
    text: "Home",
  },
  {
    id: 2,
    text: "About us",
  },
  {
    id: 3,
    text: "Services",
  },
  {
    id: 4,
    text: "Terms of service",
  },
  {
    id: 5,
    text: "Privacy policy",
  },
];

const FooterServices: { id: number; text: string }[] = [
  {
    id: 1,
    text: "Web Design",
  },
  {
    id: 2,
    text: "Web Development",
  },
  {
    id: 3,
    text: "Product Management",
  },
  {
    id: 4,
    text: "Marketing",
  },
  {
    id: 5,
    text: "Graphic Design",
  },
];

const FooterSocialLinks: { id: number; icon: ReactElement }[] = [
  {
    id: 1,
    icon: <BsTwitterX />,
  },
  {
    id: 2,
    icon: <BsFacebook />,
  },
  {
    id: 3,
    icon: <BsInstagram />,
  },
  {
    id: 4,
    icon: <BsLinkedin />,
  },
];

function Footer() {
  return (
    <section id='footer-section' className='py-14 px-4 sm:px-20 bg-secondary bg-opacity-20'>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:gap-0 lg:grid-cols-3'>
        {/* contact info  */}
        <div className='font-nunito'>
          <h2 className='text-xl xsm:text-[26px] font-bold font-nunito text-heading'>QuickStart</h2>
          <p className='text-sm mt-8 text-default'>
            A108 Adam Street <br />
            New York, NY 535022
          </p>
          <p className='text-sm text-default mt-6'>
            <span className='font-bold'>Phone:</span> +1 5589 55488 55
          </p>
          <p className='text-sm text-default'>
            <span className='font-bold'>Email:</span> info@example.com
          </p>
          <div className='mt-8 flex justify-start items-center gap-3'>
            {FooterSocialLinks.map(({ id, icon }) => {
              return (
                <p
                  key={id}
                  className='border border-default rounded-full flex items-center justify-center p-3 text-default cursor-pointer hover:border-primary hover:text-primary duration-300'>
                  {icon}
                </p>
              );
            })}
          </div>
        </div>
        {/* links  */}
        <div className='grid gap-14 md:gap-0 grid-cols-1 md:grid-cols-2'>
          {/* useful links */}
          <div>
            <h1 className='font-nunito font-semibold text-heading'>Useful Links</h1>
            <ul>
              {FooterUsefulLinks.map(({ id, text }) => {
                return (
                  <li key={id} className='text-sm text-default hover:text-primary w-fit cursor-pointer pt-3'>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* services */}
          <div>
            <h1 className='font-nunito font-semibold text-heading'>Our services</h1>
            <ul>
              {FooterServices.map(({ id, text }) => {
                return (
                  <li key={id} className='text-sm text-default hover:text-primary w-fit cursor-pointer pt-3'>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* newsletter */}
        <div className='mt-8 md:mt-0 md:col-span-2 lg:col-span-1'>
          <h1 className='font-nunito font-semibold text-heading'>Our Newsletter</h1>
          <p className='mt-4 text-sm text-default'>
            Subscribe to our newsletter and receive the latest news about our products and services!
          </p>
          <NewsletterForm />
        </div>
      </div>
      <hr className='mt-4' />
      <div className='text-sm flex flex-col items-center justify-center py-8'>
        <p>
          &copy; Copyright <span className='font-bold'>QuickStart</span> All Rights Reserved
        </p>
        <p>
          Designed by <span className='text-primary'>Meet</span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
