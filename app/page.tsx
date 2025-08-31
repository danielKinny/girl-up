"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import SplitText from "../components/SplitText/SplitText"

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
  const regParallaxRef = useRef<IParallax>(null);

  const goToStep = (step: number) => {
    if (regParallaxRef.current) {
      // Debug log
      console.log('regParallaxRef.current:', regParallaxRef.current);
      if (typeof regParallaxRef.current.scrollTo === 'function') {
        regParallaxRef.current.scrollTo(step);
      } else {
        console.warn('scrollTo is not a function on regParallaxRef.current');
      }
    } else {
      console.warn('regParallaxRef.current is null');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 left-0 w-full z-50 text-black bg-[#4e3493]/30 backdrop-filter backdrop-blur-md rounded-b-xl">
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <img src="/banner.png" className="h-20 object-contain" />
          <ul className="flex space-x-6 text-white">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Parallax pages={4} className="min-h-screen">
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

          <ParallaxLayer
            offset={0}
            speed={0.4}
            className="flex items-center text-white justify-center"
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center justify-center flex-col w-full">
              <SplitText
                text="GIRLUP"
                className="text-white md:text-9xl sm:text-8xl league-spartan font-extrabold text-center block"
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
                className="text-white sm:text-8xl md:text-7xl league-spartan font-extrabold text-center"
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

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
          >
            <div className="w-full h-screen flex justify-center items-center">
              <Parallax
                pages={3}
                horizontal
                ref={regParallaxRef}
                className="w-full h-full"
                style={{ width: '100vw', height: '100vh', background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)' }}
              >
                {/* Step 1 */}
                <ParallaxLayer offset={0} speed={0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-4xl font-bold mb-4 text-[#4e3493]">Register for GirlUp Equality Conference</h2>
                    <p className="text-lg text-gray-700 mb-6">Create your account to secure your spot.</p>
                    <button className="px-6 py-2 bg-[#4e3493] text-white rounded-lg font-semibold mb-2" onClick={() => regParallaxRef.current?.scrollTo(1)}>Next</button>
                  </div>
                </ParallaxLayer>
                {/* Step 2 */}
                <ParallaxLayer offset={1} speed={0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-4xl font-bold mb-4 text-[#4e3493]">Confirm Your Email</h2>
                    <p className="text-lg text-gray-700 mb-6">Check your inbox for a confirmation link.</p>
                    <div className="flex gap-4">
                      <button className="px-6 py-2 bg-gray-300 text-[#4e3493] rounded-lg font-semibold" onClick={() => regParallaxRef.current?.scrollTo(0)}>Back</button>
                      <button className="px-6 py-2 bg-[#4e3493] text-white rounded-lg font-semibold" onClick={() => regParallaxRef.current?.scrollTo(2)}>Next</button>
                    </div>
                  </div>
                </ParallaxLayer>
                {/* Step 3 */}
                <ParallaxLayer offset={2} speed={0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <h2 className="text-4xl font-bold mb-4 text-[#4e3493]">Personalize Your Experience</h2>
                    <p className="text-lg text-gray-700 mb-6">Tell us more about yourself and your interests!</p>
                    <button className="px-6 py-2 bg-gray-300 text-[#4e3493] rounded-lg font-semibold" onClick={() => regParallaxRef.current?.scrollTo(1)}>Back</button>
                  </div>
                </ParallaxLayer>
              </Parallax>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2}>
            <ParallaxLayer className="flex items-center justify-center">
              <div className="text-black notable-font text-2xl max-w-3xl p-7 bg-purple-200 rounded-2xl backdrop-filter backdrop-blur shadow-2xl shadow-[#4e3493]/40 drop-shadow-lg">
                Our vision at GIRLUP is a world where every girl is empowered, <br/> every voice is heard,<br/>and equality is a reality for all.
              </div>
            </ParallaxLayer>
          </ParallaxLayer>

        </Parallax>
      </main>
    </div>
  );
}
