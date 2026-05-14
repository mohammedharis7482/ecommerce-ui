import { useEffect, useState } from "react";

function CustomCursor() {

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (

    <div
      className="
      fixed
      top-0
      left-0
      w-8
      h-8
      rounded-full
      bg-black/80
      backdrop-blur-md
      pointer-events-none
      z-[9999]
      mix-blend-difference
      transition-transform
      duration-75
      "
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    />
  );
}

export default CustomCursor;