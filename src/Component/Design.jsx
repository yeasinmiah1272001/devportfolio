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
            mode: "bubble", // Bubble effect on hover
          },
        },
        modes: {
          bubble: {
            distance: 200, // Bubble interaction range
            size: 10, // Enlarged size during hover
            duration: 1, // Smooth expansion
            opacity: 0.8, // Slight transparency on hover
          },
        },
      },
      particles: {
        color: {
          value: ["#ff0054", "#1E90FF", "#32CD32"], // Vibrant pink, blue, and green
        },
        links: {
          enable: true, // Connecting lines for a network effect
          color: "#ffffff",
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2, // Faster movement for dynamic feel
          outModes: {
            default: "out", // Particles move out and reappear
          },
        },
        number: {
          density: {
            enable: true,
            area: 900, // Ensures even spacing
          },
          value: 70, // Total number of particles
        },
        opacity: {
          value: 0.6, // Subtle initial transparency
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.4,
          },
        },
        shape: {
          type: "polygon", // Hexagonal particles
          options: {
            polygon: {
              sides: 6, // Hexagons
            },
          },
        },
        size: {
          value: { min: 3, max: 6 }, // Varying initial sizes
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 2,
          },
        },
      },
      detectRetina: true,
      //   background: {
      //     color: "#1A202C", // Dark slate gray for a sleek background
      //   },
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
