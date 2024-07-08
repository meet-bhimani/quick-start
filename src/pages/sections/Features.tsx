import { ReactElement, useMemo, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { BsBinoculars, BsBoxSeam, BsSun } from "react-icons/bs";
import { cn } from "../../utils/functions";

type Feature = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};

type FeatureCardProps = Feature & {
  activeFeatureId: number;
  setActiveFeatureId: (id: number) => void;
};

const GenerateFeatureCard = ({
  id,
  icon,
  title,
  description,
  activeFeatureId,
  setActiveFeatureId,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "flex gap-4 group/feature-card p-4 sm:p-8 rounded-lg w-full md:w-[85%] cursor-pointer hover:bg-secondary bg-opacity-20 hover:bg-opacity-20 duration-500",
        id === activeFeatureId ? "bg-secondary" : ""
      )}
      onClick={() => setActiveFeatureId(id)}>
      <div>
        <div className='bg-white rounded-full text-primary shadow size-[48px] flex items-center justify-center text-2xl'>
          {icon}
        </div>
      </div>
      <div>
        <h2 className='text-default font-semibold text-xl font-nunito hidden lg:block'>{title}</h2>
        <p className='text-default text-[15px] mt-2'>{description}</p>
      </div>
    </div>
  );
};

function Features() {
  const FeaturesData: Feature[] = useMemo(() => {
    return [
      {
        id: 1,
        title: "Modi sit est dela pireda nest",
        description:
          "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        icon: <BsBinoculars />,
      },
      {
        id: 2,
        title: "Unde praesenti mara setra le",
        description:
          "Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas",
        icon: <BsBoxSeam />,
      },
      {
        id: 3,
        title: "Pariatur explica nitro dela",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut",
        icon: <BsSun />,
      },
    ];
  }, []);

  const [activeFeatureId, setActiveFeatureId] = useState(1);

  return (
    <section id='features-section' className='py-14 px-4 sm:px-10 md:px-20'>
      <SectionTitle
        title='Features'
        subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <div className='flex flex-col lg:flex-row justify-between mt-14 gap-0 lg:gap-8'>
        {/* features */}
        <ul
          className='basis-1/2 flex flex-col items-center justify-around gap-4 py-0 lg:py-16'
          data-aos='fade-up'
          data-aos-delay='100'>
          {FeaturesData.map((feature) => {
            return (
              <GenerateFeatureCard
                key={feature.id}
                id={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                activeFeatureId={activeFeatureId}
                setActiveFeatureId={setActiveFeatureId}
              />
            );
          })}
        </ul>

        {/* images  */}
        <div className='basis-1/2' data-aos='fade-up' data-aos-delay='200'>
          <img
            src={`/images/tabs-${activeFeatureId}.jpg`}
            alt='tabs'
            className='mx-auto w-full sm:w-[85%] lg:w-[min(100%,650px)] rounded-lg'
            data-aos='fade'
            data-aos-delay='50'
            key={activeFeatureId}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
