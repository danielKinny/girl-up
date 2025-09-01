"use client";
import React, { useRef, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import SplitText from "../components/SplitText/SplitText";

export default function Home() {
  const parallaxRef = useRef<IParallax>(null); // using a forward reference to manage the root compoooo
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !parallaxRef.current.container || !parallaxRef.current.container.current) return;
      const container = parallaxRef.current.container.current;
      const scrollTop = container.scrollTop;
      const pageHeight = container.clientHeight;
      const currentPage = scrollTop / pageHeight;
      setHeaderBlack(currentPage >= 0.8 && currentPage < 1.8);
    };
    const container = parallaxRef.current?.container?.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-[#23242b] via-[#2d223a] to-[#1a2634] w-full h-full" aria-hidden="true" />
      <header
        className={`absolute top-0 left-0 w-full z-50 ${headerBlack ? 'text-white bg-black/80' : 'text-black bg-[#fef56c]/50'} backdrop-filter backdrop-blur-md rounded-b-xl transition-colors duration-300`}
      >
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <img src="/banner.png" className="h-20 object-contain" />
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-gray-400">
                The Team
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
  <Parallax
    pages={2}
    className="min-h-screen bg-transparent"
    ref={parallaxRef}
  >
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              backgroundImage: "url(/testing.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundColor: "transparent",
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

          {
            // this layer will be the registration steps
            // commented out until theyre finalised
          }

          {/*
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              backgroundColor: "transparent",
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
                      <div></div>
                      <div
                        className="absolute left-150 top-0 h-full w-1/8"
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
                        className="absolute left-150 top-0 h-full w-1/8"
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
                        className="absolute left-150 top-0 h-full w-1/8"
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
          */}

          {/* the offset at this layer should be changed to 2 once the registration steps are finalized */}
          <ParallaxLayer offset={1} speed={1.4} style={{ backgroundColor: "white" }}>
            <div className="relative flex items-center justify-center gap-4 min-h-screen">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-pink-200 opacity-40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse delay-2000" />
                <div className="absolute top-1/2 left-1/2 w-[30vw] h-[30vw] bg-blue-300 opacity-30 rounded-full blur-2xl animate-pulse delay-1000" />
                <div className="absolute bottom-1/3 left-1/4 w-[28vw] h-[28vw] bg-indigo-200 opacity-30 rounded-full blur-2xl animate-pulse delay-1500" />
                <div className="absolute top-[10%] right-[20%] w-[18vw] h-[18vw] bg-fuchsia-200 opacity-20 rounded-full blur-2xl animate-pulse delay-700" />
                <div className="absolute top-1/4 left-1/2 w-[12vw] h-[12vw] bg-emerald-200 opacity-10 rounded-full blur-2xl animate-pulse delay-500" />
                <div className="absolute top-1/4 left-1/2 w-[12vw] h-[12vw] bg-emerald-200 opacity-10 rounded-full blur-2xl animate-pulse delay-500" />
                <div className="absolute bottom-1/4 left-1/2 w-[12vw] h-[12vw] bg-emerald-200 opacity-10 rounded-full blur-2xl animate-pulse delay-500" />
              </div>
              <div className="bg-white/80 max-h-2xl rounded-2xl shadow-2xl p-10 max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer">
                <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight mb-2 tracking-tight text-left">
                  WHO <span className="block">ARE WE?</span>
                </h2>
                <div className="text-left text-base md:text-lg text-[#2a2040] font-medium whitespace-pre-line">
                  We&apos;re a{" "}
                  <span className="font-bold">
                    student + teacher-led community
                  </span>
                  .<br />A safe, supportive space where we learn, grow, and
                  raise awareness about the importance of gender equality.
                </div>
              </div>
              <div className="bg-white/80 max-h-2xl rounded-2xl shadow-2xl p-10 max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer">
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left text-purple-400">
                  OUR <span className="block">VISION!</span>
                </h2>
                <div className="text-left text-base md:text-lg text-[#2a2040] font-medium whitespace-pre-line">
                  We believe every woman deserves safety and the chance to lead. Our goal is to create more opportunities for growth and leadership, starting within our own community.

                  We aim to create a safe space for like-minded individuals to spread awareness and nurture bright ideas.
                </div>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-2xl max-h-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer">
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left bg-gradient-to-r from-purple-400 to-blue-100 bg-clip-text text-transparent">
                  YOUR <span className="block">EXPERIENCE!</span>
                </h2>
                <div className="text-left text-base md:text-lg text-[#2a2040] font-medium whitespace-pre-line">
                  We&apos;re a{" "}
                  <span className="font-bold">
                    student-led community
                  </span>
                  .<br />A safe, supportive space where we learn, grow, and
                  raise awareness about the importance of gender equality.
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
