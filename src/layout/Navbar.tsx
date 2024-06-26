import { cn } from "../utils/functions";

type NavLink = {
  name: string;
  position?: string;
  dropdown?: NavLink[];
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
        dropdown: [{ name: "Sub Dropdown1" }, { name: "Sub Dropdown2" }],
        position: "right-full top-10",
      },
      { name: "Dropdown2" },
      { name: "Dropdown3" },
      { name: "Dropdown4" },
    ],
    position: "top-full",
  },
  { name: "Contact" },
];

// function Dropdown({ links, position }: { links: NavLink[]; position?: string }) {
//   return (
//     <ul className={cn("min-w-[200px] absolute hidden bg-white shadow-lg group-hover:block rounded-md p-2", position)}>
//       {links.map((link) => (
//         <li key={link.name} className='relative group'>
//           <span className='block py-1 px-4 hover:bg-secondary hover:text-primary cursor-pointer'>{link.name}</span>
//           {link.dropdown && <Dropdown links={link.dropdown} position={link.position} />}
//         </li>
//       ))}
//     </ul>
//   );
// }

function Navbar() {
  return (
    <nav>
      <div className='w-svw flex items-center justify-between py-8 px-[5rem] fixed top-0 z-50'>
        <div className='flex items-center justify-between gap-1'>
          {/* logo */}
          <img src='/images/logo.png ' alt='QuickStart Logo' className='w-9' />
          <span className='text-3xl font-bold font-nunito text-heading'>QuickStart</span>
        </div>
        <div className='flex items-center justify-between gap-10'>
          {/* navlinks  */}
          <ul className='flex gap-8 font-inter'>
            {NavbarLinks.map((link) => {
              return (
                <li key={link.name} className='cursor-pointer group/link relative duration-200'>
                  <span className='group-hover/link:text-primary'>{link.name}</span>
                  {link.dropdown && (
                    <ul className={cn("absolute hidden group-hover/link:block", link.position)}>
                      {link.dropdown.map((subLink) => (
                        <li key={subLink.name} className='relative group/subLink'>
                          <span className='group-hover/subLink:text-primary'>{subLink.name}</span>
                          {subLink.dropdown && (
                            <ul className={cn("absolute hidden group-hover/subLink:block", subLink.position)}>
                              {subLink.dropdown.map((nestedLink) => (
                                <li key={nestedLink.name} className='hover:bg-gray-200 py-1 px-4'>
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

          <button className='rounded-full bg-primary text-white px-5 py-2'>Get Started</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
