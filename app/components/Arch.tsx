interface ArchProps {
  size?: number;
  strokeColor?: string;
  className?: string;
}

export function Arch({ size = 260, strokeColor = "#2e3491", className = "" }: ArchProps) {
  const count = 7;
  const gap = size / (count * 2.8);
  const height = size * 0.62;

  return (
    <svg
      width={size}
      height={height}
      viewBox={`0 0 ${size} ${height}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => {
        const offset = i * gap;
        const rx = (size - offset * 2) / 2;
        const top = offset + rx;
        return (
          <path
            key={i}
            d={`M ${offset} ${height} L ${offset} ${top} A ${rx} ${rx} 0 0 1 ${size - offset} ${top} L ${size - offset} ${height}`}
            stroke={strokeColor}
            strokeWidth={2.2}
            fill="none"
          />
        );
      })}
    </svg>
  );
}
