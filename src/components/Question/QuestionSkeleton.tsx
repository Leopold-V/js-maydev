export const QuestionSkeleton = () => (
  <svg
    data-testid="question-element"
    role="img"
    width="721"
    height="160"
    aria-labelledby="loading-aria"
    viewBox="0 0 721 160"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      style={{ fill: 'URL("#fill")' }}
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <rect x="6" y="5" rx="0" ry="0" width="123" height="41" />
        <rect x="27" y="59" rx="0" ry="0" width="168" height="22" />
        <rect x="129" y="167" rx="0" ry="0" width="28" height="0" />
        <rect x="27" y="98" rx="0" ry="0" width="168" height="22" />
        <rect x="438" y="99" rx="0" ry="0" width="168" height="22" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stopColor="#444f5b" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stopColor="#2e3a48" stopOpacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stopColor="#444f5b" stopOpacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
);
