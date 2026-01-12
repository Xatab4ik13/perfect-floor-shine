interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Parquet herringbone pattern */}
      <rect
        x="4"
        y="8"
        width="10"
        height="4"
        rx="0.5"
        transform="rotate(-45 4 8)"
        className="fill-primary"
      />
      <rect
        x="11"
        y="8"
        width="10"
        height="4"
        rx="0.5"
        transform="rotate(45 11 8)"
        className="fill-gold"
      />
      <rect
        x="4"
        y="16"
        width="10"
        height="4"
        rx="0.5"
        transform="rotate(-45 4 16)"
        className="fill-gold"
      />
      <rect
        x="11"
        y="16"
        width="10"
        height="4"
        rx="0.5"
        transform="rotate(45 11 16)"
        className="fill-primary"
      />
      <rect
        x="4"
        y="24"
        width="10"
        height="4"
        rx="0.5"
        transform="rotate(-45 4 24)"
        className="fill-primary"
      />
      <rect
        x="11"
        y="24"
        width="10"
        height="4"
        rx="0.5"
        transform="rotate(45 11 24)"
        className="fill-gold"
      />
    </svg>
  );
}

export function LogoSimple({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simple floor boards pattern */}
      <rect x="2" y="4" width="12" height="5" rx="1" className="fill-primary" />
      <rect x="16" y="4" width="14" height="5" rx="1" className="fill-gold/80" />
      <rect x="2" y="11" width="8" height="5" rx="1" className="fill-gold/80" />
      <rect x="12" y="11" width="18" height="5" rx="1" className="fill-primary" />
      <rect x="2" y="18" width="14" height="5" rx="1" className="fill-primary" />
      <rect x="18" y="18" width="12" height="5" rx="1" className="fill-gold/80" />
      <rect x="2" y="25" width="10" height="5" rx="1" className="fill-gold/80" />
      <rect x="14" y="25" width="16" height="5" rx="1" className="fill-primary" />
    </svg>
  );
}
