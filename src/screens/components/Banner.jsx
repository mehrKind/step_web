import React from 'react';

import phonesImage from '../../assets/images/phone-banner.svg'; // Image of two phones
import backgroundShape from '../../assets/images/bg-1.png'; // Purple background image

const Banner = () => {
  return (
    <header className="relative mt-7 md:mt-7 py-10 overflow-hidden">
      <img
        src={backgroundShape}
        alt="" // This image is decorative and does not require alt text
        className="absolute bottom-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative container mx-auto px-4 z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0 md:p-7">
          <h1 className="text-[#000066] text-4xl lg:text-5xl peydaBlack leading-tight">
            قدم به قدم به سوی پیشرفت با استپ!
          </h1>
          <p className='text-[#404040] text-lg lg:text-xl peydaBold mt-6 mb-8'>
            وقتشه قدم اول رو برداری :)
          </p>
          <a href='Step.apk' download className='text-white py-4 px-10 bg-[#7B61FF] hover:bg-[#6a50e0] transition-colors peydaExBold text-lg rounded-xl cursor-pointer w-full sm:w-auto'>
            دانلود اِستِپ و شروع حرکت
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img 
            src={phonesImage} 
            alt="اپلیکیشن استپ" 
            className="w-[80%] transform md:-translate-y-14" 
          />
        </div>
      </div>
    </header>
  );
}

export default Banner;
