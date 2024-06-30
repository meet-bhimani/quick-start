import { ReactElement } from "react";
import { BsEasel, BsPatchCheck, BsSun } from "react-icons/bs";
import Button from "../../components/common/Button";
import { cn } from "../../utils/functions";

type FeatureDetail = {
  icon: ReactElement;
  text: string;
};

type FeatureDetails = {
  id: number;
  title: string;
  description: string;
  featureDetails?: FeatureDetail[];
  buttonText: string;
  imageUrl: string;
};

const FeatureDetailsData: FeatureDetails[] = [
  {
    id: 1,
    title: "Corporis temporibus maiores provident",
    description:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    buttonText: "Learn More",
    imageUrl: "/images/features-1.jpg",
  },
  {
    id: 2,
    title: "Corporis temporibus maiores provident",
    description: "Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena plasico mares",
    featureDetails: [
      { icon: <BsEasel />, text: "Et corporis ea eveniet ducimus." },
      { icon: <BsPatchCheck />, text: "Exercitationem dolorem sapiente." },
      { icon: <BsSun />, text: "Veniam quia modi magnam." },
    ],
    buttonText: "Learn More",
    imageUrl: "/images/features-2.jpg",
  },
];

const GenerateFeatureDetailsCard = ({
  imageUrl,
  buttonText,
  title,
  description,
  featureDetails,
  isReverse,
}: FeatureDetails & { isReverse?: boolean }) => {
  return (
    <div className='w-full md:w-[85%] lg:w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center my-14 gap-8 lg:gap-0'>
      <div className={cn("basis-1/2", isReverse && "lg:order-2")}>
        <img src={imageUrl} alt={title} className='rounded-lg w-full lg:w-[min(100%,630px)]' />
      </div>
      <div className='w-full basis-1/2 lg:basis-[40%] order-1 bg-secondary bg-opacity-20 py-6 px-9 rounded-lg'>
        <div>
          <h1 className='text-heading font-nunito text-[26px] font-bold'>{title}</h1>
          <p className='text-default my-4'>{description}</p>
          {featureDetails && (
            <ul className='text-default'>
              {featureDetails.map(({ icon, text }: FeatureDetail, index) => {
                return (
                  <li key={index} className='flex gap-2 py-2'>
                    <span className='text-primary text-xl'>{icon}</span> <p> {text}</p>
                  </li>
                );
              })}
            </ul>
          )}
          <Button className='px-8 mt-3'>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

function FeatureDetails() {
  return (
    <section id='feature-details-section' className='px-4 sm:px-20 flex flex-col'>
      {FeatureDetailsData.map((featureData: FeatureDetails, index) => {
        return (
          <GenerateFeatureDetailsCard
            key={featureData.id}
            title={featureData.title}
            id={featureData.id}
            description={featureData.description}
            buttonText={featureData.buttonText}
            imageUrl={featureData.imageUrl}
            featureDetails={featureData.featureDetails}
            isReverse={index % 2 === 0 ? false : true}
          />
        );
      })}
    </section>
  );
}

export default FeatureDetails;
