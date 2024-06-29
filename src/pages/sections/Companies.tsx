const CompaniesImagesPath: string[] = [
  "/images/client-1.png",
  "/images/client-2.png",
  "/images/client-3.png",
  "/images/client-4.png",
  "/images/client-5.png",
  "/images/client-6.png",
];

function Companies() {
  return (
    <section id='companies-section' className='my-14 px-0 sm:px-20'>
      <div className='grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {CompaniesImagesPath.map((imagePath, i) => {
          return (
            <img
              key={imagePath}
              src={imagePath}
              alt={`company ${i} image`}
              className='w-full max-w-[100px] filter grayscale-[100%] opacity-50 hover:opacity-100 hover:grayscale-0 duration-300'
            />
          );
        })}
      </div>
    </section>
  );
}

export default Companies;
