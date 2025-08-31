"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import SplitText from "../components/SplitText/SplitText";

type PageProps = {
  offset: number;
  gradient?: string;
  onClick?: () => void;
};

export default function Home() {
  const regParallaxRef = useRef<IParallax>(null);
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 left-0 w-full z-50 text-black bg-[#fef56c]/50 backdrop-filter backdrop-blur-md rounded-b-xl">
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <img src="/banner.png" className="h-20 object-contain" />
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Parallax pages={4} className="min-h-screen">
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              backgroundImage: "url(/testing.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.4}
            className="text-white"
            style={{ zIndex: 1 }}
          >
            <div className="flex flex-col items-end justify-center h-full w-full pr-24">
              <SplitText
                text="GIRL UP"
                className="text-[10vw] font-extrabold text-center league-spartan text-[#fdf46b] leading-none"
                delay={100}
                duration={0.6}
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
                className="text-[6vw] font-extrabold text-center league-spartan text-[#fdf46b] leading-none"
                delay={100}
                duration={0.6}
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <div className="w-full h-screen flex justify-center items-center">
              <Parallax
                pages={3}
                horizontal
                ref={regParallaxRef}
                className="w-full h-full"
                style={{
                  width: "100vw",
                  height: "100vh",
                  background: "#23242b",
                }}
              >
                <ParallaxLayer
                  offset={0}
                  speed={0.4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
                    style={{ background: "#23242b" }}
                    onClick={() => regParallaxRef.current?.scrollTo(1)}
                  >
                    <span className="absolute left-10 text-[18vw] text-gray-500/40 font-bold select-none">
                      01
                    </span>
                    <div
                      className="absolute right-0 top-0 h-full w-1/2"
                      style={{
                        transform: "skewX(-25deg)",
                        background:
                          "linear-gradient(90deg, #ff5f6d 0%, #ffc371 100%)",
                      }}
                    />
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  offset={1}
                  speed={0.4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
                    style={{ background: "#2d223a" }}
                    onClick={() => regParallaxRef.current?.scrollTo(2)}
                  >
                    <span className="absolute left-10 text-[18vw] text-gray-500/40 font-bold select-none">
                      02
                    </span>
                    <div
                      className="absolute right-0 top-0 h-full w-1/2"
                      style={{
                        transform: "skewX(-25deg)",
                        background:
                          "linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)",
                      }}
                    />
                  </div>
                </ParallaxLayer>
                <ParallaxLayer
                  offset={2}
                  speed={0.4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                  }}
                >
                  <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-pointer"
                    style={{ background: "#1a2634" }}
                    onClick={() => regParallaxRef.current?.scrollTo(0)}
                  >
                    <span className="absolute left-10 text-[18vw] text-gray-500/40 font-bold select-none">
                      03
                    </span>
                    <div
                      className="absolute right-0 top-0 h-full w-1/2"
                      style={{
                        transform: "skewX(-25deg)",
                        background:
                          "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                      }}
                    />
                  </div>
                </ParallaxLayer>
              </Parallax>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2}>
            <ParallaxLayer className="flex items-center justify-center">
              <div className="text-black notable-font text-2xl max-w-3xl p-7 bg-purple-200 rounded-2xl backdrop-filter backdrop-blur shadow-2xl shadow-[#4e3493]/40 drop-shadow-lg">
                Our vision at GIRLUP is a world where every girl is empowered,{" "}
                <br /> every voice is heard,
                <br />
                and equality is a reality for all.
              </div>
            </ParallaxLayer>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
