const COLORS = ["139,92,246", "59,130,246", "34,211,238"];

// 28 curved paths (two mirrored sets of 14), staggered in opacity, width and speed.
// Animated purely in CSS via the `pathflow` keyframe.
function path(i: number, dir: 1 | -1) {
  const x = (n: number) => n + dir * 5 * i;
  const xr = (n: number) => n - dir * 5 * i;
  const y = (n: number) => n - 6 * i;
  const d = `M${x(-380)} ${y(-189)}C${x(-380)} ${y(-189)} ${x(-312)} ${y(216)} ${xr(152)} ${y(343)}C${xr(616)} ${y(470)} ${xr(684)} ${y(875)} ${xr(684)} ${y(875)}`;
  return {
    d,
    stroke: `rgba(${COLORS[i % 3]},${(0.06 + 0.018 * i).toFixed(3)})`,
    width: (0.5 + 0.04 * i).toFixed(2),
    duration: (16 + 1.3 * i).toFixed(1),
  };
}

const PATHS = [
  ...Array.from({ length: 14 }, (_, i) => ({ ...path(i, 1), reverse: false })),
  ...Array.from({ length: 14 }, (_, i) => ({ ...path(i, -1), reverse: true })),
];

export default function FlowLines() {
  return (
    <svg
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      fill="none"
      aria-hidden="true"
    >
      {PATHS.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={p.width}
          strokeDasharray="6 14"
          style={{ animation: `pathflow ${p.duration}s linear infinite${p.reverse ? " reverse" : ""}` }}
        />
      ))}
    </svg>
  );
}
