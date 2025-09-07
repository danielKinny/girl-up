"use client";
import React, { useRef, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { IParallax } from "@react-spring/parallax";
import SplitText from "../components/SplitText/SplitText";
import Image from "next/image";
import {
  CalendarDaysIcon
} from "@heroicons/react/24/outline";
import Nav from "@/components/nav";

interface workshop {
  id: number;
  name: string;
  description: string;
}

interface sdg {
  id: number;
  alt: string,
  src: string
}

const sdgs : sdg[] = [
  {
    id: 1,
    alt: "SDG 5",
    src: "/unemblem.png"
  },
  {
    id: 2,
    alt: "SDG 8",
    src: "/formallogo.png"
  },
]

const workshops: workshop[] = [
  {
    id: 1,
    name: "Ethical Dilemma Lab",
    description:
      "Participants step into the role of medical or scientific professionals confronted with challenging ethical decisions. The workshop introduces the four pillars of medical ethics—Autonomy, Beneficence, Non-maleficence, and Justice—guiding attendees through real-world scenarios where they must weigh competing values and make thoughtful choices.",
  },
  {
    id: 2,
    name: "Mock Boardroom Pitch",
    description:
      "Teams collaborate to design a social enterprise that addresses a pressing community issue, such as financial literacy or inclusive product design. Each group prepares and delivers a pitch to a simulated board that upholds Girl Up’s values and the UN Sustainable Development Goals, providing a realistic experience of advocating for support and funding.",
  },
  {
    id: 3,
    name: "Trash to Treasure: SustainHERability",
    description:
      "Focusing on innovation, creativity, and teamwork, students receive a selection of recycled materials and are challenged to construct a practical item for everyday use—such as an organizer jar or plant holder. The activity may include a time constraint or a “mini shop” where teams can barter for additional supplies, encouraging resourcefulness and collaboration.",
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
        className="fixed inset-0 -z-50 bg-[#FF7A77] w-full h-full bg-gradient-to-br from-[#FF7A77] to-[#FFD100]"
        aria-hidden="true"
      />
      <header
        className={`absolute top-0 left-0 w-full z-50 ${
          headerBlack ? "text-white bg-black/80" : "text-black bg-[#fef56c]/20"
        } backdrop-filter backdrop-blur-md rounded-b-xl transition-colors duration-300`}
      >
        <Nav />
      </header>
      <main>
        <Parallax
          pages={5}
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
            <div className="flex flex-col items-end justify-center h-full w-full pr-[8vw] sm:pr-[4vw] md:pr-[8vw]">
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
            speed={0.4}
            style={{
              backgroundImage: "url(/realbg2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundColor: "transparent",
            }}
          />
          <ParallaxLayer
            offset={1}
            speed={0.4}
            className="flex flex-col text-white league-spartan items-center justify-center gap-8 md:gap-16 px-4 md:px-0 mt-8 sm:mt-12 md:mt-20 min-h-2xl"
          >
            <div className="flex flex-col items-center w-full h-7xl">
              <div className="text-center w-full max-w-lg md:max-w-xl mt-4 sm:mt-8 mx-auto">
                <h1 className="text-white text-center league-spartan font-extrabold text-base sm:text-2xl md:text-4xl">
                  GIRL UP - A UN INITIATIVE
                </h1>
                <p className="text-xs sm:text-base md:text-lg text-center p-2 sm:p-4 md:p-5">
                  Girl Up, a United Nations initiative, empowers young women to become leaders and advocates for gender equality, education, and opportunity worldwide. Through leadership training and advocacy, it inspires students to take action on both local and global issues that affect girls and women. Our school is proud to launch its own Girl Up club, joining this international movement of changemakers. As part of our commitment, we aim to raise awareness, share ideas, and drive meaningful progress toward equality.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-center mt-6">
                {
                  sdgs.map((sdg) => (
                    <Image key={sdg.id} className="rounded-xl w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-contain" width={160} height={160} src={sdg.src} alt={sdg.alt} />
                  ))
                }
              </div>
            </div>

          </ParallaxLayer>


          <ParallaxLayer
            offset={2}
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
            <div
              className="relative flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-4 min-h-screen px-2 md:px-8 py-8 overflow-hidden"

            >
              <div className="bg-white/80 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 max-w-lg md:max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer min-w-[180px] min-h-[120px] w-full lg:w-[32vw] h-auto overflow-auto">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight mb-2 tracking-tight text-left">
                <span className="break-words text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">WHO <span className="block">ARE WE?</span></span>
              </h2>
              <div className="text-left text-sm sm:text-base md:text-md text-[#2a2040] font-medium whitespace-pre-line">
                We are a student-led team at our school, committed to
                empowering the next generation to explore a wide range of
                career opportunities while promoting equality and inclusion
                for all. Through our programs and initiatives, we provide
                young people with the resources, guidance, and inspiration
                they need to envision their future, free from stereotypes or
                limitations.
              </div>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 max-w-lg md:max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer min-w-[180px] min-h-[120px] w-full lg:w-[32vw] overflow-auto">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left text-purple-400">
                <span className="break-words text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">OUR <span className="block">VISION!</span></span>
              </h2>
              <div className="text-left text-sm sm:text-base md:text-md text-[#2a2040] font-medium whitespace-pre-line">
                To create a future where every young person, regardless of
                gender or background, feels empowered to pursue their dreams
                and make an impact in the world. We believe that equal
                opportunities lead to stronger communities and a brighter
                tomorrow.
              </div>
              </div>
              <div className="bg-white/80 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 max-w-lg md:max-w-2xl flex flex-col gap-4 border-2 border-[#b6b6e5] transition-all duration-300 hover:scale-102 hover:shadow-[0_8px_40px_0_rgba(80,0,120,0.15)] hover:bg-white/90 hover:backdrop-blur-md cursor-pointer min-w-[180px] min-h-[120px] w-full lg:w-[32vw] h-auto overflow-auto">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-2 tracking-tight text-left bg-gradient-to-r from-purple-400 to-blue-100 bg-clip-text text-transparent">
                YOUR <span className="block">EXPERIENCE!</span>
              </h2>
              <div className="text-left text-sm sm:text-xs md:text-md text-[#2a2040] font-medium whitespace-pre-line">
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
            offset={3}
            speed={0.5}
            className="league-spartan"
            style={{
              backgroundImage: "url(/realbg3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundColor: "transparent",
            }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center h-full gap-6 md:gap-12 px-2 md:px-8 py-8">
              <div className="text-white text-center md:text-left flex-1 mt-4 pl-[4vw]">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-2 bg-clip-text pl-[3vw]">
                  Our Workshops
                </h1>
                <div className="text-base sm:text-xl md:text-2xl max-w-xl md:max-w-2xl text-center md:text-left text-white font-medium whitespace-pre-line mx-auto md:mx-0">
                  Join us for our interactive workshops where we explore various
                  topics related to gender equality, leadership, and personal
                  development. Our workshops are designed to empower
                  participants and provide them with the tools they need to
                  succeed.
                </div>
              </div>
              <div className="w-full md:w-auto flex-1">
                  <div className="p-4 sm:p-6 md:p-8 flex-col flex gap-4 md:max-h-[70vh] overflow-y-auto">
                    {workshops.map((workshop) => (
                      <div
                        key={workshop.id}
                        className="bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl shadow-2xl min-h-xl flex items-center justify-center p-0 max-w-xl h-full"
                      >
                        <div className="p-4 sm:p-6 w-full league-spartan text-gray-900 text-center">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{workshop.name}</h3>
                          <p className="text-sm sm:text-base font-medium opacity-80">{workshop.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={4}
            speed={0.3}
            style={{
              backgroundImage: "url(/realbg4.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 0,
              backgroundColor: "transparent",
            }}/>
          <ParallaxLayer
            offset={4}
            speed={0.3}
            className="league-spartan flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-2 md:px-8 py-8"
            >
              <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-4 mb-4 md:mb-0">
                <h2 className="text-3xl sm:text-5xl md:text-[12vh] font-bold text-white text-center">SAVE THE DATE</h2>
                <p className="text-base sm:text-lg md:text-xl text-white max-w-xl text-center mt-2">
                  Join us in making a difference! Whether you&apos;re a student,
                  educator, or ally, there are many ways to get involved and
                  support our mission.
                </p>
              </div>
              <div className="text-pink-400 bg-white py-2 rounded-4xl league-spartan font-bold px-4 md:mr-[5vw]">
                <h1 className="text-xl sm:text-3xl md:text-[5vh] text-center mx-2 md:mx-4">
                  <CalendarDaysIcon className="inline-block h-8 sm:h-10 md:h-15 mr-2 mb-1 md:mb-3" />
                  <span className="text-pink-400"> 22nd November 2025 </span>
                </h1>
              </div>
            </ParallaxLayer>

        </Parallax>
      </main>
    </div>
  );
}
