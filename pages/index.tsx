import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import logo from "../pages/images/Group 144.svg";
import icon5 from "../pages/images/icon/cpu-chip-01.svg";
import icon7 from "../pages/images/icon/cube-01.svg";
import icon4 from "../pages/images/icon/percent-03.svg";
import icon2 from "../pages/images/icon/server-01.1545c11c.svg";
import icon3 from "../pages/images/icon/target-05.ee15170d.svg";
import icon1 from "../pages/images/icon/users-plus.07b79e68.svg";
import LadyImage from "../pages/images/image1.jpeg";
import boyImage from "../pages/images/image2.jpeg";
import About from "./components/about";
import Section from "./components/section";
import Slider from "./shared/slider";
import Accordion from "./shared/accordion";

const inter = Inter({ subsets: ["latin"] });
const navigation = [
  { name: "About", href: "#" },
  { name: "List", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Lorem</span>
                <Image className="h-8 w-auto" src={logo} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="lg:hidden lg:flex lg:gap-x-5 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Image className="h-8 w-auto" src={logo} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  "
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <div className="relative ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className=""
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-5xl py-10 sm:py-15 lg:py-15">
            <div className=" py-15 sm:py-10">
              <div className="mx-auto max-w-9xl px-6 lg:px-8">
                <div className="mt-6">
                  <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-[5rem] dark:text-white">
                    LOREM IPSUM
                  </h1>
                </div>
                <article className="text-white pt-10 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
                    <div className="md:my-0 my-8">
                      <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                        Lorem ipsum
                      </h1>
                      <p className="leading-8 text-[#FFFFFF] opacity-70">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                      <div className="mt-5 ">
                        <Image className="h-8 w-auto " src={icon1} alt="" />
                      </div>
                    </div>
                    <div className="md:my-0 my-8">
                      <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                        Lorem ipsum
                      </h1>
                      <p className="leading-8 text-[#FFFFFF] opacity-70">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                      <div className="mt-5">
                        <Image className="h-8 w-auto" src={icon2} alt="" />
                      </div>
                    </div>

                    <div className="md:my-0 my-8">
                      <Image
                        src={LadyImage}
                        width={500}
                        height={500}
                        alt="image"
                      />
                      <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 mt-2 uppercase">
                        Lorem ipsum
                      </h1>
                      <p className="leading-8 text-[#FFFFFF] opacity-70">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                      <div className="mt-5">
                        <Image className="h-8 w-auto" src={icon3} alt="" />
                      </div>
                    </div>
                  </div>
                </article>
                <article className="text-white pt-10 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
                    <div className="md:my-0 my-8">
                      <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                        Lorem ipsum
                      </h1>
                      <p className="leading-8 text-[#FFFFFF] opacity-70">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                      <div className="mt-5">
                        <Image className="h-8 w-auto" src={icon4} alt="" />
                      </div>
                    </div>
                    <div className="md:my-0 my-8">
                      <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                        Lorem ipsum
                      </h1>
                      <p className="leading-8 text-[#FFFFFF] opacity-70">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit.
                      </p>
                      <div className="mt-5">
                        <Image className="h-8 w-auto" src={icon5} alt="" />
                      </div>
                    </div>
                    <div className="md:my-0 my-8">
                      <div className="mt-5"></div>
                    </div>
                  </div>
                </article>
                <article className="text-white pt-10 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
                    <div className="md:my-0 my-8">
                      <div className="mt-5"></div>
                    </div>
                    <div className="md:my-0 my-8">
                      <div className="mt-5">
                        <Image
                          src={boyImage}
                          width={500}
                          height={500}
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="md:my-0 my-8">
                      <div className="mt-5">
                        <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-[1.42rem] mb-3 uppercase">
                          Lorem ipsum
                        </h1>
                        <p className="leading-8 text-[#FFFFFF] opacity-70">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit.
                        </p>
                        <Image className="h-8 w-auto" src={icon7} alt="" />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-5xl py-1 sm:py-15 lg:py-15">
            <About />
          </div>
          <div className="">
            <Slider />
          </div>
          <div className="mx-auto max-w-5xl  sm:py-15 lg:py-15">
            <Section />
          </div>
          <Accordion />
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className=""
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
