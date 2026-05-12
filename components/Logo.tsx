export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="toothGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0CC7A" />
          <stop offset="50%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#B88D2C" />
        </linearGradient>
        <linearGradient id="toothGoldSheen" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A843" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Tooth body */}
      <path
        d="M32 6C24.5 6 18 10.5 16 17c-1.5 4.8-1 9.2 0 13 1.5 5.5 2 9 2.5 14 .4 3.8 1.2 8 3.5 8 1.8 0 2.8-2.5 4-7 .8-3 1.5-6 6-6s5.2 3 6 6c1.2 4.5 2.2 7 4 7 2.3 0 3.1-4.2 3.5-8 .5-5 1-8.5 2.5-14 1-3.8 1.5-8.2 0-13C46 10.5 39.5 6 32 6z"
        fill="url(#toothGold)"
      />

      {/* Sheen highlight */}
      <path
        d="M22 14c2-4 6-7 10-7.5"
        stroke="url(#toothGoldSheen)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Root split line — subtle */}
      <path
        d="M32 36v14"
        stroke="#8F6B18"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  )
}
