"use client";
import Image from "next/image";
import { useState } from "react";
import DisplayLottie from "../Lottie/DisplayLottie";
import WebDevServices from "./WebServices";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 apt-35 md:pt-40 lg:pt-5 axl:pb-25 axl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 ">
          <div className="flex flex-col-reverse md:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2 flex flex-col pl-10 md:pl-0">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              🔥 ABC - Helping you go Online
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Lets create your {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg0 dark:before:bg-titlebgdark ">
                  Website
                </span>
              </h1>
              <p>
                Wordpress, Code From Scratch, Restful API 
                Integration, Payment Gateway Integration, Domain Name Registration, Hosting
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    <button 
                      aria-label="view portfolio button"
                      onClick={() => window.open('/portfolio', '_blank')}
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out dark:bg-btndark dark:hover:bg-blackho dark:text-white hover:text-white hover:bg-black"
                    >
                      View Portfolio
                    </button>
                    <button
                      aria-label="whatsapp button"
                      onClick={() => window.open('https://wa.me/96171441380', '_blank')}
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:text-white hover:bg-black dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Whatsapp me
                    </button>
                  </div>
                </form>

                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>

            <div className="animate_right  md:w-1/2 lg:block ahidden">
              <div className="relative 2xl:-mr-7.5 h-[auto]">
                {/* <WebDevServices /> */}
                <DisplayLottie animationPath="/lottie/lottie-hero-3.json" speed={1} />
                {/* <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
