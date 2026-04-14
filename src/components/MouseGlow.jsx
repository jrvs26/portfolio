import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-10 w-[350px] h-[350px] rounded-full bg-emerald-400/20 blur-[120px]"
      style={{
        left: pos.x - 175,
        top: pos.y - 175,
      }}
    />
  );
}