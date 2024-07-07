import SectionTitle from "../../components/common/SectionTitle";
import Slider from "react-slick";
import "@smastrom/react-rating/style.css";
import { Rating, Star } from "@smastrom/react-rating";

type Testimonial = {
  id: number;
  avatar: string;
  name: string;
  designation: string;
  description: string;
  starCount: number;
};

const TestimonialsData: Testimonial[] = [
  {
    id: 1,
    avatar: "/images/testimonials-1.jpg",
    name: "Saul Goodman",
    designation: "Ceo & Founder",
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    starCount: 5,
  },
  {
    id: 2,
    avatar: "/images/testimonials-2.jpg",
    name: "Sara Wilsson",
    designation: "Designer",
    description:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    starCount: 5,
  },
  {
    id: 3,
    avatar: "/images/testimonials-1.jpg",
    name: "Jena Karlis",
    designation: "Store Owner",
    description:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    starCount: 5,
  },
  {
    id: 4,
    avatar: "/images/testimonials-4.jpg",
    name: "Matt Brandon",
    designation: "Freelancer",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    starCount: 5,
  },
  {
    id: 5,
    avatar: "/images/testimonials-5.jpg",
    name: "John Larson",
    designation: "Entrepreneur",
    description:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    starCount: 5,
  },
];

const GenerateTestimonialsCard = ({ id, name, avatar, description, designation, starCount }: Testimonial) => {
  return (
    <div
      key={id}
      className='testimonial-card shadow-custom min-h-[450px] w-full mx-auto bg-white py-6 px-8 flex flex-col items-center justify-center text-center'>
      <Rating
        style={{ width: 100 }}
        itemStyles={{ itemShapes: Star, activeFillColor: "#ffb700", inactiveFillColor: "#fbf1a9" }}
        value={starCount}
        readOnly
      />
      <p className='italic text-heading my-4'>{description}</p>
      <img src={avatar} alt={name} className='rounded-full w-24 mt-14 xl:mt-2' />
      <h2 className='font-nunito text-heading font-bold mt-4'>{name}</h2>
      <h3 className='text-sm text-default font-nunito'>{designation}</h3>
    </div>
  );
};

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id='testimonials-section' className='pt-14 pb-20 px-4 sm:px-20 bg-secondary bg-opacity-20'>
      <SectionTitle
        title='Testimonials'
        subTitle='Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'
      />
      <div className='slider-container mt-10 py-14'>
        <Slider {...settings}>
          {TestimonialsData.map(({ id, name, avatar, description, designation, starCount }: Testimonial) => {
            return (
              <GenerateTestimonialsCard
                key={id}
                id={id}
                name={name}
                avatar={avatar}
                description={description}
                designation={designation}
                starCount={starCount}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
