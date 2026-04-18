import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  dashed?: boolean;
};

const BOX_PATH = `
  M 34,6
  C 80,2   130,5   166,7
  C 184,8   197,20  196,36
  C 198,80  197,128  195,166
  C 194,184  182,197  166,196
  C 128,199  78,197   34,195
  C 17,194   3,182    4,166
  C 2,126    3,78     5,36
  C 6,19    18,5     34,6 Z
`;

export default function SketchBox({ dashed = false, className = "", children, ...props }: Props) {
  return (
    <div className={`relative ${className}`} {...props}>
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={BOX_PATH}
          fill="transparent"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeDasharray={dashed ? "8 5" : undefined}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </div>
  );
}
