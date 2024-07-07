import { ReactElement } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import {
  BsActivity,
  BsArrowRight,
  BsBoundingBoxCircles,
  BsBroadcast,
  BsCalendar4Week,
  BsChatSquareText,
  BsEasel,
} from "react-icons/bs";
import { cn } from "../../utils/functions";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  iconColor: string;
};

const ServicesData: Service[] = [
  {
    id: 1,
    title: "Nesciunt Mete",
    description:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    icon: <BsActivity />,
    iconColor: "#0dcaf0",
  },
  {
    id: 2,
    title: "Eosle Commodi",
    description:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    icon: <BsBroadcast />,
    iconColor: "#fd7e14",
  },
  {
    id: 3,
    title: "Ledo Markt",
    description:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    icon: <BsEasel />,
    iconColor: "#20c997",
  },
  {
    id: 4,
    title: "Asperiores Commodi",
    description:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    icon: <BsBoundingBoxCircles />,
    iconColor: "#df1529",
  },
  {
    id: 5,
    title: "Velit Doloremque.",
    description:
      "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    icon: <BsCalendar4Week />,
    iconColor: "#6610f2",
  },
  {
    id: 6,
    title: "Dolori Architecto",
    description:
      "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    icon: <BsChatSquareText />,
    iconColor: "#f3268c",
  },
];

const GenerateServiceCard = ({ id, icon, title, description, iconColor }: Service) => {
  return (
    <div
      key={id}
      className={cn(
        "flex gap-4 group/service-card hover:shadow-custom rounded-lg w-full cursor-pointer p-8 bg-white duration-500"
      )}
      data-aos='fade-up'
      data-aos-delay={id * 100}>
      <div>
        <div
          className='rounded-lg border size-[72px] flex items-center justify-center text-[32px] bg-opacity-20'
          style={{ borderColor: iconColor, color: iconColor, backgroundColor: `${iconColor}11` }}>
          {icon}
        </div>
      </div>
      <div className='ml-2'>
        <h2 className='text-heading text-opacity-60 group-hover/service-card:text-opacity-100 duration-300 font-semibold text-[22px] font-nunito'>
          {title}
        </h2>
        <p className='text-default text-opacity-60 group-hover/service-card:text-opacity-100 duration-300 mt-2'>
          {description}
        </p>
        <p className='text-primary text-opacity-100 group-hover/service-card:text-opacity-80 duration-300 mt-4 text-sm flex items-center gap-2'>
          Learn more <BsArrowRight />
        </p>
      </div>
    </div>
  );
};

function Services() {
  return (
    <section id='services-section' className='bg-secondary bg-opacity-15 py-14 px-4 sm:px-20'>
      <SectionTitle
        title='Services'
        subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {ServicesData.map((service) => {
          return (
            <GenerateServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconColor={service.iconColor}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
