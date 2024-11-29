import React, { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HexBubbleDesign = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      const { initParticlesEngine } = await import("@tsparticles/react");
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse", // Repulse effect to push particles away when hovered
          },
        },
        modes: {
          repulse: {
            distance: 100, // Push particles away when the mouse hovers
            duration: 0.4, // Duration of the repulse effect
            speed: 10, // Speed of the push
          },
        },
      },
      particles: {
        color: {
          value: ["#8A2BE2", "#00FA9A", "#FF4500"], // Purple, green, and orange particles
        },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 100,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5, // Smooth floating effect
          direction: "none", // Particles move freely in all directions
          random: true, // Random movement for a natural look
          straight: false,
          outModes: {
            default: "out", // Particles move out and reappear
          },
        },
        number: {
          density: {
            enable: true,
            area: 700, // Density of particles
          },
          value: 90, // Total number of particles
        },
        opacity: {
          value: 0.6, // Particles have a soft opacity
          animation: {
            enable: true,
            speed: 1.5, // Smooth fade-in and fade-out
            minimumValue: 0.3, // Fade to a minimum opacity
          },
        },
        shape: {
          type: "circle", // Circular particles for smoothness
        },
        size: {
          value: { min: 4, max: 8 }, // Varying particle sizes
          animation: {
            enable: true,
            speed: 2, // Smooth size changes
            minimumValue: 3, // Minimum size of particles
          },
        },
      },
      detectRetina: true,
      // background: {
      //   color: "#2C3E50", // Dark background for contrast
      //   image:
      //     "radial-gradient(circle, rgba(44, 62, 80, 0.9), rgba(52, 152, 219, 0.9))", // Radial gradient background
      //   position: "50% 50%",
      //   repeat: "no-repeat",
      //   size: "cover",
      // },
    }),
    []
  );

  return init ? (
    <Particles
      id="tsparticles-bubble"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  ) : null;
};

export default HexBubbleDesign;
