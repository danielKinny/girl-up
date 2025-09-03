"use client";
import React, { useRef, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import SplitText from "../components/SplitText/SplitText";
import Link from "next/link";
import {Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "../components/ui/carousel"

interface workshop {
  id: number;
  name: string;
  description: string;
}

const workshops: workshop[] = [
  {
    id: 1,
    name: "lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "dolor sit amet",
    description: "Dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "dolor sit amet",
    description: "Dolor sit amet, consectetur adipiscing elit.",
  },
];
export default function Home() {
  const parallaxRef = useRef<IParallax>(null); // using a forward reference to manage the root compoooo
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !parallaxRef.current ||
        !parallaxRef.current.container ||
        !parallaxRef.current.container.current
      )
        return;
      const container = parallaxRef.current.container.current;
      const scrollTop = container.scrollTop;
      const pageHeight = container.clientHeight;
      const currentPage = scrollTop / pageHeight;
      setHeaderBlack(currentPage >= 6.8);
    };
    const container = parallaxRef.current?.container?.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-50 bg-[#FF7A77] w-full h-full"
        aria-hidden="true"
      />
      <header
        className={`absolute top-0 left-0 w-full z-50 ${
          headerBlack ? "text-white bg-black/80" : "text-black bg-[#fef56c]/50"
        } backdrop-filter backdrop-blur-md rounded-b-xl transition-colors duration-300`}
      >
        <nav className="px-8 mx-auto flex justify-between items-center py-4">
          <Link href="/">
            <img src="/banner.png" className="h-20 object-contain" />
          </Link>
          <ul className="flex space-x-6 text-white text-lg">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-400">
                The Team
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Parallax
          pages={3}
          className="min-h-screen bg-transparent"
          ref={parallaxRef}
        >
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              backgroundImage: "url(/realbg.jpg)",
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
            <div className="flex flex-col items-end justify-center h-full w-full pr-[8vw]">
              <SplitText
                text="GIRL UP"
                className="text-[16vw] pr-[2vw] font-extrabold text-center anton-font text-[#fdf46b] leading-none"
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
                className="text-[13vw] pr-[3vw] font-extrabold text-center anton-font text-[#fdf46b] leading-none"
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
          <ParallaxLayer
            offset={1}
            speed={1.4}
            style={{
              backgroundImage: "url(/realbg4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundColor: "transparent",
            }}
          >
            <div className="relative flex items-center justify-center gap-4 min-h-screen">
              <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer h-[38vh] w-[32vw] min-w-[320px] min-h-[340px] overflow-auto">
                <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight mb-2 tracking-tight text-left">
                  WHO <span className="block">ARE WE?</span>
                </h2>
                <div className="text-left text-base md:text-md text-[#2a2040] font-medium whitespace-pre-line">
                  We are a student-led team at our school, committed to
                  empowering the next generation to explore a wide range of
                  career opportunities while promoting equality and inclusion
                  for all. Through our programs and initiatives, we provide
                  young people with the resources, guidance, and inspiration
                  they need to envision their future, free from stereotypes or
                  limitations.
                </div>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer h-[44vh] w-[32vw] min-w-[320px] min-h-[380px] overflow-auto">
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left text-purple-400">
                  OUR <span className="block">VISION!</span>
                </h2>
                <div className="text-left text-base md:text-lg text-[#2a2040] font-medium whitespace-pre-line">
                  To create a future where every young person, regardless of
                  gender or background, feels empowered to pursue their dreams
                  and make an impact in the world. We believe that equal
                  opportunities lead to stronger communities and a brighter
                  tomorrow.
                </div>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer h-[38vh] w-[32vw] min-w-[320px] min-h-[340px] overflow-auto">
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left bg-gradient-to-r from-purple-400 to-blue-100 bg-clip-text text-transparent">
                  YOUR <span className="block">EXPERIENCE!</span>
                </h2>
                <div className="text-left text-base md:text-md text-[#2a2040] font-medium whitespace-pre-line">
                  At this conference, you will take part in engaging workshops,
                  hear from inspiring panelists, and gain valuable insights into
                  a range of career paths. Our conference are designed to foster
                  confidence, broaden perspectives, and spark ambition, all
                  within an inclusive space that champions equality and
                  opportunity for every participant.
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              backgroundImage: "url(/realbg3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundColor: "transparent",
            }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 bg-clip-text ">
                  Our Workshops
                </h1>
                <div className=" md:text-lg max-w-2xl text-center text-white font-medium whitespace-pre-line">
                  Join us for our interactive workshops where we explore various
                  topics related to gender equality, leadership, and personal
                  development. Our workshops are designed to empower
                  participants and provide them with the tools they need to
                  succeed.
                </div>
              </div>

              <div>
                <Carousel orientation = "vertical">
                  <CarouselContent className="gap-4">
                    {workshops.map((workshop) => (
                      <CarouselItem key={workshop.id} className="md:basis-1/2 lg:basis-1/3 bg-white/20 rounded-xl text-white min-h-[15vh]">
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">{workshop.name}</h3>
                          <p className="text-sm">{workshop.description}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext />
                  <CarouselPrevious /> 
                </Carousel>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div>
  );
}
