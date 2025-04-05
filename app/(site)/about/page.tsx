import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page - ABC Development",

  // other metadata
  description: "This is About page for ABC Development"
};

export default function DocsPage() {


  return (
    <>
      <section className="pb-16 pt-32 md:pb-20 md:pt-28 lg:pb-24 lg:pt-[15rem]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                  <li className="block">
                    <Link
                      href={`/about`}
                      className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
                    >
                      Introduction
                    </Link>
                    <Link
                      href={`/about`}
                      className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
                    >
                      Work
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}


            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to ABC Development</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  ABC Development is a freelancing web development business founded by Abed El Razzak Chreim.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Please visit:{" "}
                  <b>
                    <a href="https://abedelrazzak-portfolio.vercel.app/" target="/blank">
                    https://abedelrazzak-portfolio.vercel.app/
                    </a>
                  </b>{" "}
                  to know more
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  we build Wordpress sites, Sites from scratch using code, payment gateways, restful APIs, and setup the domain name and hosting for your site.
                </p>
              </div>
            </div>

            


          </div>
        </div>
      </section>
    </>
  );
}
