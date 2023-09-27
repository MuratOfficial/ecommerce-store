"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export function AnimateBlocks({ children }: { children: React.ReactNode }) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(block.current, {
      scrollTrigger: {
        trigger: block.current,
        toggleActions: "play none reverse none",
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
      x: -400,
      duration: 3,
      opacity: 0,

      ease: "none",
    });
  }, []);
  return <div ref={block}>{children}</div>;
}

export function FadeInBlocks({ children }: { children: React.ReactNode }) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      block.current,
      {
        x: 60,
        opacity: 0,
      },
      {
        duration: 1,
        x: 0,
        delay: 0.5,
        opacity: 1,
      }
    );
  }, []);

  return <div ref={block}>{children}</div>;
}

export function FadeInScroll({ children }: { children: React.ReactNode }) {
  const block = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(block.current, {
      scrollTrigger: {
        trigger: block.current,
        toggleActions: "play none reverse none",
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
      },
      y: 40,
      duration: 3,
      opacity: 0,

      ease: "none",
    });
  }, []);

  return <div ref={block}>{children}</div>;
}
