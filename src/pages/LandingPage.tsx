function LandingPage() {
  return (
    <div className='relative w-svw min-h-svh overflow-hidden pt-10'>
      <div>
        <img src='/images/hero-bg-light.webp' alt='hero-bg-light' className='w-svw absolute top-0 left-0 h-svh -z-10' />
        <div className='absolute top-0 left-0 w-full h-full bg-white opacity-85 -z-10'></div>
      </div>
      <div className='w-full pt-40 flex items-center justify-center'>
        <h1 className='text-heading text-5xl font-bold font-nunito'>
          Welcome to <span className='text-primary'>QuickStart</span>
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
