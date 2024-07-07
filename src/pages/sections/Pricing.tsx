import { BsCheck, BsX } from "react-icons/bs";
import Button from "../../components/common/Button";
import SectionTitle from "../../components/common/SectionTitle";
import { cn } from "../../utils/functions";

type PlanType = "Free" | "Business" | "Developer";

type PricingCard = {
  id: number;
  title: PlanType;
  description: string;
  price: number;
  buttonText: string;
  creditCardInfo: string;
  isPopular?: boolean;
};

type PricingCardFeature = {
  id: number;
  text: string;
  availableFor: PlanType[];
};

const PricingCardData: PricingCard[] = [
  {
    id: 1,
    title: "Free",
    description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
    price: 0,
    buttonText: "Start a free trial",
    creditCardInfo: "No credit card required",
  },
  {
    id: 2,
    title: "Business",
    description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
    price: 29,
    buttonText: "Start a free trial",
    creditCardInfo: "No credit card required",
    isPopular: true,
  },
  {
    id: 3,
    title: "Developer",
    description: "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
    price: 49,
    buttonText: "Start a free trial",
    creditCardInfo: "No credit card required",
  },
];

const FeaturesData: PricingCardFeature[] = [
  {
    id: 1,
    text: "Quam adipiscing vitae proin",
    availableFor: ["Free", "Business", "Developer"],
  },
  {
    id: 2,
    text: "Nec feugiat nisl pretium",
    availableFor: ["Free", "Business", "Developer"],
  },
  {
    id: 3,
    text: "Nulla at volutpat diam uteera",
    availableFor: ["Free", "Business", "Developer"],
  },
  {
    id: 4,
    text: "Pharetra massa massa ultricies",
    availableFor: ["Business", "Developer"],
  },
  {
    id: 5,
    text: "Massa ultricies mi quis hendrerit",
    availableFor: ["Business", "Developer"],
  },
  {
    id: 6,
    text: "Voluptate id voluptas qui sed aperiam rerum",
    availableFor: ["Business", "Developer"],
  },
  {
    id: 7,
    text: "Iure nihil dolores recusandae odit voluptatibus",
    availableFor: ["Developer"],
  },
];

function GeneratePricingCard({ id, title, description, price, buttonText, creditCardInfo, isPopular }: PricingCard) {
  return (
    <div
      key={id}
      className='relative pricing-card basis-full lg:basis-1/3 bg-secondary bg-opacity-15 rounded-lg p-10'
      data-aos='zoom-in'
      data-aos-delay={id * 100}>
      {isPopular && (
        <span className='bg-primary rounded-md text-white text-sm font-medium px-4 pt-1 pb-[6px] absolute right-4 top-4'>
          Popular
        </span>
      )}
      <h2 className='text-xl font-nunito font-bold text-heading mb-4'>{title} Plan</h2>
      <p className='text-default text-sm mb-4'>{description}</p>
      <p className='text-[48px] text-primary font-nunito font-bold flex items-center gap-1'>
        <sup className='text-[28px] font-semibold mt-3'>$</sup> {price}
        <sub className='text-default opacity-50 text-xl font-normal'>/ month</sub>
      </p>
      <Button className='w-full font-nunito py-[10px] mt-4 mb-1' variant={isPopular ? "primary" : "outlined"}>
        {buttonText}
      </Button>
      <p className='text-center text-sm text-default'>{creditCardInfo}</p>
      <ul className='mt-6'>
        {FeaturesData.map((feature) => (
          <li
            key={feature.id}
            className={cn(
              "text-default py-[10px] text-opacity-80 flex items-center gap-1",
              !feature.availableFor.includes(title) && "line-through text-opacity-50"
            )}>
            <span className='text-2xl'>
              {feature.availableFor.includes(title) ? <BsCheck className='text-green-700' /> : <BsX />}
            </span>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section id='pricing-section' className='py-14 px-4 sm:px-20'>
      <SectionTitle
        title='Pricing'
        subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <div className='mt-14 flex flex-col lg:flex-row justify-between gap-6'>
        {PricingCardData.map((card) => GeneratePricingCard(card))}
      </div>
    </section>
  );
}

export default Pricing;
