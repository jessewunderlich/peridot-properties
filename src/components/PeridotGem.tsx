interface PeridotGemProps {
  size?: number;
  className?: string;
}

export default function PeridotGem({ size = 24, className }: PeridotGemProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path d="M16 2L28 12L22 30H10L4 12L16 2Z" fill="#4F6F16" />
      <path d="M16 2L28 12L16 16L4 12L16 2Z" fill="#8BAD3F" />
      <path d="M16 16L28 12L22 30H10L4 12L16 16Z" fill="#5A7A1D" />
      <path d="M16 2L16 30" stroke="#4A6818" strokeWidth="0.5" opacity="0.3" />
      <path d="M4 12L28 12" stroke="#4A6818" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
