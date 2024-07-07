import { ReactElement } from "react";
import { BsBarChart, BsBriefcase, BsCardChecklist } from "react-icons/bs";

type ServiceData = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};

const GenerateFeatureCard = ({ id, icon, title, description }: ServiceData) => {
  return (
    <div
      className='flex gap-4 group/feature-card cursor-pointer min-w-full xl:min-w-0'
      data-aos='fade-up'
      data-aos-delay={id * 100}>
      <div>
        <div className='bg-secondary group-hover/feature-card:bg-primary group-hover/feature-card:bg-opacity-100 duration-300 text-primary group-hover/feature-card:text-white w-[80px] h-[80px] flex items-center justify-center text-3xl'>
          {icon}
        </div>
      </div>
      <div>
        <h2 className='text-heading font-bold font-nunito text-lg'>{title}</h2>
        <p className='text-default text-sm mt-2'>{description}</p>
      </div>
    </div>
  );
};

const FeaturedServicesData: ServiceData[] = [
  {
    id: 1,
    icon: <BsBriefcase />,
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    id: 2,
    icon: <BsCardChecklist />,
    title: "Dolor Sitema",
    description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa",
  },
  {
    id: 3,
    icon: <BsBarChart />,
    title: "Sed ut perspiciatis",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  },
];

function FeaturedServices() {
  return (
    <>
      <section id='featured-services-section' className='bg-secondary bg-opacity-30 mt-12 px-4 sm:px-16 py-14'>
        <div className='flex flex-col xl:flex-row mx-auto justify-center xl:justify-between items-center gap-10'>
          {FeaturedServicesData.map((service) => {
            return (
              <GenerateFeatureCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FeaturedServices;
