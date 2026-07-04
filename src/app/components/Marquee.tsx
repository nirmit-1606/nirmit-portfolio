interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export function Marquee({ items, speed = 30, className = "" }: MarqueeProps) {
  // 4 copies so the strip always fills the viewport; duration × 2 keeps per-item speed identical
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex items-center gap-10 ${className}`}
        style={{
          animation: `marquee ${speed * 2}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap flex-shrink-0">
            <span>{item}</span>
            <span style={{ color: "var(--accent-color)", opacity: 0.8 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
