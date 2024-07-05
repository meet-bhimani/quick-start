import { ReactElement, useState } from "react";
import { cn } from "../utils/functions";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../components/common/Button";
import useScroll from "../hooks/useScroll";

type NavLink = {
  name: string;
  position?: string;
  dropdown?: NavLink[];
  icon?: ReactElement;
};

const NavbarLinks: NavLink[] = [
  { name: "Home" },
  { name: "About" },
  { name: "Features" },
  { name: "Services" },
  { name: "Pricing" },
  {
    name: "Dropdown",
    dropdown: [
      { name: "Dropdown1" },
      {
        name: "Deep Dropdown",
        dropdown: [
          { name: "Sub Dropdown1" },
          { name: "Sub Dropdown2" },
          { name: "Sub Dropdown3" },
          { name: "Sub Dropdown4" },
          { name: "Sub Dropdown5" },
        ],
        position: "right-full top-5 pr-4",
        icon: <IoChevronDown className='text-xs' />,
      },
      { name: "Dropdown2" },
      { name: "Dropdown3" },
      { name: "Dropdown4" },
    ],
    position: "top-full",
    icon: <IoChevronDown className='text-xs' />,
  },
  { name: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id='navbar'>
      <div
        className={cn(
          "w-screen flex items-center justify-between py-8 px-4 sm:px-[3rem] xl:px-[5rem] fixed top-0 z-50 duration-500",
          isScrolled && "bg-white shadow-[0_0_30px_rgba(0,0,0,0.10)]"
        )}>
        <div className='flex items-center justify-between gap-1'>
          {/* logo */}
          <img src='/images/logo.png' alt='QuickStart Logo' className='w-7 xsm:w-9' />
          <span className='text-2xl xsm:text-3xl font-bold font-nunito text-heading'>QuickStart</span>
        </div>
        <div className='flex items-center justify-between gap-5 xl:gap-10'>
          {/* navlinks  */}
          <div className='hidden xl:block'>
            <ul className='flex gap-8 font-inter'>
              {NavbarLinks.map((link) => {
                return (
                  <li key={link.name} className='cursor-pointer group/link relative duration-200'>
                    <div className='group-hover/link:text-primary text-default flex items-center gap-1'>
                      {link.name}
                      {link.icon && <span>{link.icon}</span>}
                    </div>

                    {link.dropdown && (
                      <ul
                        className={cn(
                          "absolute hidden group-hover/link:block bg-white rounded pt-4 pl-2 px-3 py-2 min-w-[180px] shadow-custom",
                          link.position
                        )}>
                        {link.dropdown.map((subLink) => (
                          <li key={subLink.name} className='relative group/subLink py-2'>
                            <div className='group-hover/subLink:text-primary text-default flex items-center gap-1'>
                              {subLink.name}
                              {subLink.icon && <span>{subLink.icon}</span>}
                            </div>
                            {subLink.dropdown && (
                              <ul
                                className={cn(
                                  "absolute hidden group-hover/subLink:block bg-white rounded min-w-[180px] shadow-custom",
                                  subLink.position
                                )}>
                                {subLink.dropdown.map((nestedLink) => (
                                  <li key={nestedLink.name} className='text-default hover:text-primary py-1 px-4 my-2'>
                                    {nestedLink.name}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <Button rounded variant='primary' size='md' className='sm:text-sm'>
            Get Started
          </Button>

          {!isMenuOpen && (
            <div className='xl:hidden text-2xl cursor-pointer' onClick={toggleMenu}>
              <RxHamburgerMenu />
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center'>
          <ul className='relative p-5 flex flex-col bg-white w-[95%] h-[80%] rounded gap-6 font-inter text-lg'>
            {NavbarLinks.map((link) => {
              return (
                <li key={link.name} className='cursor-pointer'>
                  {link.name}
                </li>
              );
            })}
            <div className='absolute -top-10 text-white right-0 text-3xl cursor-pointer' onClick={toggleMenu}>
              <IoClose />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
