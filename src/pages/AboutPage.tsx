import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { TechStack } from "../components/aboutPage/techStack";
import { Experience } from "../components/aboutPage/experience";
import { Hero } from "../components/aboutPage/hero";

gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const { darkMode } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const techElements = document.querySelectorAll(".tech-card");

    gsap.fromTo(
      techElements,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".technologies-section",
          start: "top center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: darkMode ? "#0a192f" : "#f8fafc",
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: darkMode ? "#64748b" : "#1e40af",
            },
            links: {
              enable: true,
              color: darkMode ? "#1e3a8a" : "#2563eb",
              distance: 150,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: 2,
            },
            opacity: {
              value: 0.5,
            },
          },
        }}
        className="absolute inset-0"
      />
      <Hero />
      <TechStack />
      <Experience />
    </div>
  );
};

export default AboutPage;
