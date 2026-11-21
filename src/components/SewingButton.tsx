interface SewingButtonProps {
  className?: string;
}

export function SewingButton({ className = '' }: SewingButtonProps) {
  return (
    <span className={`button-ornament ${className}`} aria-hidden="true">
      <span className="button-holes">
        <span className="button-hole" />
        <span className="button-hole" />
        <span className="button-hole" />
        <span className="button-hole" />
      </span>
    </span>
  );
}
