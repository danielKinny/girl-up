"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SplitText from "../components/SplitText/SplitText";

type PageProps = {
  offset: number;
  gradient?: string;
  onClick?: () => void;
};

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div
        className="bg-[#20232f] absolute w-[170%] h-full cursor-pointer"
        style={{ clipPath: 'polygon(20% 0, 70% 0, 50% 100%, 0% 100%)' }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div
        className="absolute w-[170%] h-full cursor-pointer"
        style={{ clipPath: 'polygon(70% 0, 100% 0, 80% 100%, 50% 100%)' }}
      />
    </ParallaxLayer>

    <ParallaxLayer
      className="pointer-events-none justify-start font-kanit leading-none uppercase text-[300px] text-[#545864] flex items-center"
      offset={offset}
      speed={0.3}
    >
      <span className="inline-block relative">0{offset + 1}</span>
    </ParallaxLayer>
  </>
)


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 left-0 w-full z-50 text-black bg-[#4e3493]/30 backdrop-filter backdrop-blur-md rounded-b-xl">
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <img src="/banner.png" className="w-12" />
          <ul className="flex space-x-6 text-white">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Parallax pages={4} className="min-h-screen">
          {/* Background Layer - slowest speed for deep parallax */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              backgroundImage: 'url(/bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
            }}
          />

          {/* Main Title Layer */}
          <ParallaxLayer
            offset={0}
            speed={0.4}
            className="flex items-center text-white justify-center"
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center justify-center flex-col">
              <SplitText
                text="GIRLUP"
                className="text-white md:text-9xl sm:text-8xl notable-font font-extrabold text-center block"
                delay={50}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="EQUALL"
                className="text-white sm:text-8xl md:text-7xl notable-font font-extrabold text-center"
                delay={50}
                duration={0.9}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </ParallaxLayer>

          {/* Decorative Parallax Layers for extra depth */}
          <ParallaxLayer offset={0.2} speed={0.7} style={{ zIndex: 2 }}>
            <div className="absolute left-1/4 top-1/2 w-1/2 h-32 bg-[#4e3493]/30 rounded-full blur-2xl" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={1.2} style={{ zIndex: 2 }}>
            <div className="absolute right-1/4 top-1/3 w-1/3 h-24 bg-[#20232f]/20 rounded-full blur-2xl" />
          </ParallaxLayer>

          {/* Section 1 */}
          <ParallaxLayer offset={1} speed={0.3} style={{ zIndex: 3 }}>
            <Page offset={1} gradient="bg-gradient-to-r from-[#4e3493] to-[#20232f]" onClick={() => console.log("Page 1 clicked")} />
          </ParallaxLayer>
          {/* Section 2 */}
          <ParallaxLayer offset={2} speed={0.3} style={{ zIndex: 3 }}>
            <Page offset={2} gradient="bg-gradient-to-r from-[#20232f] to-[#4e3493]" onClick={() => console.log("Page 2 clicked")} />
          </ParallaxLayer>
          {/* Section 3 */}
          <ParallaxLayer offset={3} speed={0.3} style={{ zIndex: 3 }}>
            <Page offset={3} gradient="bg-gradient-to-r from-[#4e3493] to-[#20232f]" onClick={() => console.log("Page 3 clicked")} />
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
