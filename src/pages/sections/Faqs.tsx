import { useEffect, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { cn } from "../../utils/functions";
import { BsChevronRight } from "react-icons/bs";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    id: 2,
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    id: 3,
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.",
  },
  {
    id: 4,
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    id: 5,
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.",
  },
  {
    id: 6,
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
  },
];

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (item.id === 1) setIsOpen(true);
  }, []);
  return (
    <div className={cn("border border-gray-200 rounded-md py-4", isOpen && "bg-secondary bg-opacity-15")}>
      <div className='flex justify-between items-center px-4'>
        <h2
          className={cn(
            "text-default text-[17px] font-nunito cursor-pointer hover:text-primary duration-500",
            isOpen && "text-primary"
          )}
          onClick={() => setIsOpen(!isOpen)}>
          {item.question}
        </h2>
        <span className={cn("transition-transform duration-300", isOpen && "rotate-90 text-primary")}>
          <BsChevronRight />
        </span>
      </div>
      <div className={cn("px-4 h-0 pt-2 overflow-hidden transition-all duration-500 ease-out", isOpen && "h-[70px]")}>
        <p className='text-default'>{item.answer}</p>
      </div>
    </div>
  );
};

function Faqs() {
  return (
    <section id='faq-section' className='py-14 px-4 sm:px-20'>
      <SectionTitle title='Frequently Asked Questions' subTitle='' />
      <div className='w-full lg:w-4/5 mx-auto grid grid-cols-1 gap-4' data-aos='fade-up' data-aos-delay='100'>
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Faqs;
