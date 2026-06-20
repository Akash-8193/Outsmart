export default function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 350 120" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer purple arc for the "O" */}
      <path d="M 60 100 A 40 40 0 1 1 100 60" stroke="#8B004A" strokeWidth="12" strokeLinecap="round" />
      
      {/* Inner purple arc for the "O" */}
      <path d="M 50 80 A 20 20 0 0 1 80 50" stroke="#8B004A" strokeWidth="10" strokeLinecap="round" />
      
      {/* Blue Network Nodes attached to "O" */}
      <circle cx="85" cy="45" r="8" fill="#0014B4" />
      <circle cx="110" cy="25" r="14" fill="#0014B4" />
      <circle cx="145" cy="40" r="10" fill="#0014B4" />
      
      {/* Connecting lines for nodes */}
      <line x1="85" y1="45" x2="110" y2="25" stroke="#0014B4" strokeWidth="4" />
      <line x1="110" y1="25" x2="145" y2="40" stroke="#0014B4" strokeWidth="4" />

      {/* "utsmart" Text */}
      <text x="120" y="75" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="56" fill="#0014B4" letterSpacing="-1">utsmart</text>
      
      {/* "TECHNOLOGY" Text */}
      <text x="45" y="110" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="22" fill="#8B004A" letterSpacing="6.5">TECHNOLOGY</text>
    </svg>
  );
}
