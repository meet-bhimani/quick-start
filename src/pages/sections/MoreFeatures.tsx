import { ReactElement } from "react";
import { BsEasel, BsPatchCheck, BsSun } from "react-icons/bs";

type Feature = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};

const MoreFeaturesData: Feature[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias",
    icon: <BsEasel />,
  },
  {
    id: 2,
    title: "Nemo Enim",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise",
    icon: <BsPatchCheck />,
  },
  {
    id: 3,
    title: "Dine Pad",
    description: "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit",
    icon: <BsSun />,
  },
  {
    id: 4,
    title: "Tride clov",
    description: "Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit",
    icon: <BsSun />,
  },
];

const GenerateMoreFeaturesCard = ({ id, title, description, icon }: Feature) => {
  return (
    <div key={id} className='flex justify-start lg:justify-between gap-4 items-start'>
      <div className='text-primary text-[24px]'>{icon}</div>
      <div>
        <h2 className='text-[18px] text-heading'>{title}</h2>
        <p className='text-[14px] text-default mt-2'>{description}</p>
      </div>
    </div>
  );
};

function MoreFeatures() {
  return (
    <section id='feature-details-section' className='sm:px-4 md:px-20 my-14 flex flex-col'>
      <div className='flex justify-between flex-col lg:flex-row'>
        <div className='basis-full px-4 sm:px-0 lg:basis-1/2 order-2 mt-6 lg:mt-0 lg:py-6 lg:pl-6'>
          <h1 className='text-heading font-nunito text-[28px] font-semibold'>
            Enim quis est voluptatibus aliquid consequatur
          </h1>
          <p className='text-default mt-4'>
            Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
            laudantium. Soluta voluptate sed facere corporis dolores excepturi
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8'>
            {MoreFeaturesData.map((feature) => {
              return (
                <GenerateMoreFeaturesCard
                  key={feature.id}
                  id={feature.id}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              );
            })}
          </div>
        </div>
        <div className='basis-full lg:basis-[45%] order-1 lg:order-3 lg:max-h-[400px]'>
          <img src='/images/features-3.jpg' className='w-full h-full object-cover' alt='more feature image' />
        </div>
      </div>
    </section>
  );
}

export default MoreFeatures;
