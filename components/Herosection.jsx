"use client"
import React, { useEffect, useRef } from "react";

const Herosection = () => {
    const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };
  return (
    <div
    className="flex  h-screen w-full items-center  text-white overflow-hidden bg-cover bg-no-repeat "
    ref={containerRef}
    style={{ backgroundImage: `url(/lacrose8.webp` }}
  >
    <p className="  uppercase m-10 "> Software developer</p>
    <p className="  uppercase m-10 "> fullstack developer</p>
    
    <span
      className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-white! important   text-center font-bold uppercase "
      ref={textRef}
    >
      Patricia Semanda
      
    </span>
    {/* Media query for smaller screens */}
    
  </div>
  )
}

export default Herosection