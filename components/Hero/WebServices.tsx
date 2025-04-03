import React from "react";

const WebDevServices: React.FC = () => {
    const services = [
        {
          title: "Wordpress",
          description: "Launch reliable, enterprise-grade rollups on your preferred framework",
          link: "/rollups",
          imgSrc: "/images/icon/wordpress.svg",
          bgGradient: "bg-gradient-to-tr from-[#006BFF] via-[#4D9FFF] to-[#A3CFFF]",
        },
        {
          title: "Custom Code",
          description: "No seed phrases or gas fees. Just seamless onchain journeys, start to finish",
          link: "/smart-wallets",
          imgSrc: "/images/icon/custom-code.svg",
          bgGradient: "bg-gradient-to-tr from-[#006BFF] via-[#4D9FFF] to-[#A3CFFF]",
        },
      ];
    
      const smallServices = [
        {
          title: "Payment Gateway",
          link: "/token-api",
          bgGradient: "bg-gradient-to-tr from-[#006BFF] via-[#4D9FFF] to-[#A3CFFF]",
        },
        {
          title: "Restful API",
          link: "/supernode",
          bgGradient: "bg-gradient-to-tr from-[#006BFF] via-[#4D9FFF] to-[#A3CFFF]",
        },
      ];
    
      return (
        <div className="min-h-lg flex h-fit w-full max-w-xl items-center rounded-lg bg-transparent p-4">
          <div className="grid w-full gap-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {services.map((service, index) => (
                <a key={index} href={service.link} className={`group relative overflow-hidden rounded-lg border-2 p-4 h-[200px] lg:h-[300px] ${service.bgGradient}`}>
                  <div className="absolute right-[-13%] top-[44%] opacity-80 lg:translate-y-full lg:opacity-0 lg:transition-transform lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-80">
                    <img src={service.imgSrc} alt="" width="200" height="200" className="z-50 object-contain object-right opacity-40" />
                  </div>
                  <div className="relative flex h-full flex-col justify-between text-white">
                    <h2 className="text-xl font-bold">{service.title}</h2>
                    <div className="mt-auto opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
                      <p className="mb-6 text-white text-lg lg:mb-10">{service.description}</p>
                      <div className="flex items-center font-bold">Get started →</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {smallServices.map((service, index) => (
              <a key={index} href={service.link} className={`group relative overflow-hidden rounded-lg border-2 p-4 h-[56px] ${service.bgGradient}`}>
                <div className="relative flex h-full items-center justify-center text-white font-bold transition-transform duration-500 group-hover:left-0">
                  {service.title}
                  <span className="absolute right-0 flex items-center text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">Get started →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    };

export default WebDevServices;