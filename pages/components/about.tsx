import Image from 'next/image';
import React, { useState } from 'react';
import boyImage from '../../pages/images/frame.png';

function About() {
  const [isImageVisible, setImageVisible] = useState(false);

  return (
    <div>
      <article
        className="lg:mt-[1rem] py-10 mb-10 lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer"
        id="about"
      >
        <div className="absolute w-[100%] h-[400px] ">
          <Image
            src={boyImage}
            className={isImageVisible ? '' : 'invisible'}
            alt="background"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 transition-all h-[25rem] items-center">
          <div className="relative h-[25rem]">
            <h1 className="about_wrapper_title mb-4 font-bold tracking-tight leading-none text-[7.5rem] text-white uppercase">
              about <br />
              us
            </h1>
            <span>Lorem</span>
            <br />
            <span>Lorem</span>
            <div
              className={`absolute top-[6.5rem] left-[13rem] w-[250px] h-[250px] backgroundRectangleImage ${
                isImageVisible ? 'hover:hidden backgroundCoverImage' : ''
              }`}
              onMouseEnter={() => setImageVisible(true)}
              onMouseLeave={() => setImageVisible(false)}
            >
              <Image
                className="rounded-full wrapper_image"
                src={boyImage}
                alt="boy images"
              />
            </div>
          </div>
          <p className="leading-8 text-[#FFFFFF] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </article>
    </div>
  );
}

export default About;
