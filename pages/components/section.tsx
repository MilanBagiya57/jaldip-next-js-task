import React from "react";
import Image from "next/image";
import boyImage from "../../pages/images/image2.jpeg";
import icon1 from "../../pages/images/icon/shield-tick.svg";
import icon2 from "../../pages/images/icon/dataflow-03.svg";
import icon3 from "../../pages/images/icon/target-05.ee15170d.svg";
function Section() {
  return (
    <div>
      <section className="container mx-auto max-w-[1237px] px-5 pt-16">
        <article className="container mx-auto max-w-[1237px] pt-16">
          <h1 className="lg:mb-24 sm:mb-5 text-3xl font-bold text-white md:text-5xl lg:text-6xl dark:text-white uppercase md:w-9/12 xs:w-full">
            lorem ipsum dolor set
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">
                Lorem ipsum dolor
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-5">
                <Image className="h-8 w-auto" src={icon1} alt="" />
              </div>
            </div>
            <div className="md:my-0 my-8">
              <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">
                dolor sit amet
              </h1>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-5">
                <Image className="h-8 w-auto" src={icon2} alt="" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-16">
            <div></div>
            <div className="">
              {" "}
              <Image src={boyImage} width={500} height={500} alt="image" />
            </div>
            <div>
              <h1 className="max-sm:mt-10 font-bold text-[1.5rem] leading-[0.75rem] text-white text-[1.42rem] mb-3 uppercase">
                Lorem ipsum
              </h1>
              <p className="leading-7 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="mt-5">
                <Image className="h-8 w-auto" src={icon3} alt="" />
              </div>
            </div>
          </div>
        </article>
        <article className="pt-20 lg:mt-[15rem] md:mt-[5rem]">
          <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase">
            lorem ipsum dolor
          </h1>
        </article>
      </section>
    </div>
  );
}

export default Section;
