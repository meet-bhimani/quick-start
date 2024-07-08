type SectionTitleProps = {
  title: string;
  subTitle: string;
};

function SectionTitle({ title, subTitle }: SectionTitleProps) {
  return (
    <div data-aos='fade-up'>
      <h1 className='text-center w-fit mx-auto mt-0 font-nunito text-[32px] text-heading font-bold relative mb-[50px] after:absolute after:w-[50px] after:bg-primary after:h-[4px] after:top-[120%] after:left-1/2 after:-translate-x-1/2 '>
        {title}
      </h1>
      <p className='w-fit text-center mx-auto text-default px-0 sm:px-4'>{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
