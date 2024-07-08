import { ReactElement, useState } from "react";
import { cn } from "../utils/functions";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import useScroll from "../hooks/useScroll";
import useScrollToSection from "../hooks/useScrollToSection";

type NavLink = {
  name: string;
  path: string;
  position?: string;
  dropdown?: NavLink[];
  icon?: ReactElement;
};

const NavbarLinks: NavLink[] = [
  { name: "Home", path: "#" },
  { name: "About", path: "#about" },
  { name: "Features", path: "#features" },
  { name: "Services", path: "#services" },
  { name: "Pricing", path: "#pricing" },
  {
    name: "Dropdown",
    path: "#dropdown",
    dropdown: [
      { name: "Dropdown1", path: "#dropdown1" },
      {
        name: "Deep Dropdown",
        path: "#deep-dropdown",
        dropdown: [
          { name: "Sub Dropdown1", path: "#sub-dropdown1" },
          { name: "Sub Dropdown2", path: "#sub-dropdown2" },
          { name: "Sub Dropdown3", path: "#sub-dropdown3" },
          { name: "Sub Dropdown4", path: "#sub-dropdown4" },
          { name: "Sub Dropdown5", path: "#sub-dropdown5" },
        ],
        position: "right-full top-5 pr-4",
        icon: <IoChevronDown className='text-xs' />,
      },
      { name: "Dropdown2", path: "#dropdown2" },
      { name: "Dropdown3", path: "#dropdown3" },
      { name: "Dropdown4", path: "#dropdown4" },
    ],
    position: "top-full",
    icon: <IoChevronDown className='text-xs' />,
  },
  { name: "Contact", path: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();
  useScrollToSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div
        id='navbar'
        className={cn(
          "w-screen flex items-center justify-between py-8 px-4 sm:px-[3rem] xl:px-[5rem] fixed top-0 z-50 duration-500",
          isScrolled && "bg-white shadow-[0_0_30px_rgba(0,0,0,0.10)]"
        )}>
        <div className='flex items-center justify-between gap-1'>
          {/* logo */}
          <img src='/images/logo.png' alt='QuickStart Logo' className='w-7 xsm:w-9' />
          <h1 className='text-2xl xsm:text-3xl font-bold font-nunito text-heading'>QuickStart</h1>
        </div>
        <div className='flex items-center justify-between gap-5 xl:gap-10'>
          {/* navlinks  */}
          <div className='hidden xl:block'>
            <ul className='flex gap-8 font-inter'>
              {NavbarLinks.map((link) => {
                return (
                  <li key={link.name} className='cursor-pointer group/link relative duration-200'>
                    <Link to={link.path} className='group-hover/link:text-primary text-default flex items-center gap-1'>
                      {link.name}
                      {link.icon && <span>{link.icon}</span>}
                    </Link>

                    {link.dropdown && (
                      <ul
                        className={cn(
                          "absolute hidden group-hover/link:block bg-white rounded pt-4 pl-2 px-3 py-2 min-w-[180px] shadow-custom",
                          link.position
                        )}>
                        {link.dropdown.map((subLink) => (
                          <li key={subLink.name} className='relative group/subLink py-2'>
                            <Link
                              to={subLink.path}
                              className='group-hover/subLink:text-primary text-default flex items-center gap-1'>
                              {subLink.name}
                              {subLink.icon && <span>{subLink.icon}</span>}
                            </Link>
                            {subLink.dropdown && (
                              <ul
                                className={cn(
                                  "absolute hidden group-hover/subLink:block bg-white rounded min-w-[180px] shadow-custom",
                                  subLink.position
                                )}>
                                {subLink.dropdown.map((nestedLink) => (
                                  <li key={nestedLink.name} className='text-default hover:text-primary py-1 px-4 my-2'>
                                    <Link to={nestedLink.path}>{nestedLink.name}</Link>
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
                  <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </Link>
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
