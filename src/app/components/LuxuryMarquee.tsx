import { useState } from "react";

const ITEMS = [
  "20 Years of Heritage",
  "Premium Footwear",
  "Signature Bags",
  "Crafted With Precision",
  "Trusted Quality",
  "Modern Elegance",
  "Est. 2005",
  "Premium Materials",
  "Sivagangai's Finest",
  "Timeless Style",
];

const SEP = (
  <span style={{ color: "#E6007E", fontSize: "7px", lineHeight: 1, flexShrink: 0, padding: "0 22px", opacity: 0.9 }}>
    ◆
  </span>
);

function Track({ paused }: { paused: boolean }) {
  // Duplicate for seamless -50% loop
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        willChange: "transform",
        animation: "lux-marquee 32s linear infinite",
        animationPlayState: paused ? "paused" : "running",
      }}
    >
      {doubled.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(10px, 1.2vw, 12.5px)",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#e8e4f8",
              padding: "0 20px",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
          {SEP}
        </span>
      ))}
    </div>
  );
}

export function LuxuryMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <style>{`
        @keyframes lux-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "70px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0d1130 0%, #141a3d 45%, #0a0f28 100%)",
          cursor: "default",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Top accent line — pink glow */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
          background: "linear-gradient(90deg, transparent 0%, #E6007E 40%, #2D5BFF 60%, transparent 100%)",
          opacity: 0.7,
        }} />

        {/* Bottom accent line — blue glow */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px",
          background: "linear-gradient(90deg, transparent 0%, #2D5BFF 40%, #E6007E 60%, transparent 100%)",
          opacity: 0.5,
        }} />

        {/* Subtle blue shimmer across mid-height */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(45,91,255,0.06), transparent)",
        }} />

        {/* Track */}
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Track paused={paused} />
        </div>

        {/* Left edge fade */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: 0, width: "80px", pointerEvents: "none",
          background: "linear-gradient(to right, #0d1130, transparent)",
        }} />

        {/* Right edge fade */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, right: 0, width: "80px", pointerEvents: "none",
          background: "linear-gradient(to left, #0a0f28, transparent)",
        }} />
      </div>
    </>
  );
}
