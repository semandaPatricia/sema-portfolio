'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
//import PopMenu from "./menu/PopMenu";

const SlideTab = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Pricing", path: "/pricing" },
    { id: 3, name: "Features", path: "/features" },
    { id: 4, name: "Docs", path: "/docs" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <div className="hidden md:block">
    <nav aria-label="Global">
    <ul
  onMouseLeave={() => {
    setPosition({
      ...position,
      opacity: 0,
    });
  }}
  className="relative mx-auto flex gap-6 text-sm w-fit rounded-full border-2 border-black bg-white p-1"
>
{navItems.map((item) => (
  <Tab key={item.id} setPosition={setPosition}>
    <a href={item.path}>{item.name}</a>
  </Tab>
))}
{/*CURSOR */}
  <Cursor position={position} />
</ul>
{/*Menu profile */}

</nav>
  </div>
  );
};

export default SlideTab;

const Tab = ({ children, position, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
