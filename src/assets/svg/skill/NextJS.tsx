import { SvgProps } from "@/types"

const NextJS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.0546875" y="0.255859" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M47.4965 11.2085C47.3285 11.2238 46.7937 11.2773 46.3125 11.3154C35.2163 12.3159 24.8225 18.3032 18.2396 27.5056C14.5739 32.6223 12.2294 38.4263 11.3435 44.5739C11.0304 46.72 10.9922 47.354 10.9922 50.2633C10.9922 53.1731 11.0304 53.8071 11.3435 55.9528C13.4665 70.6231 23.9061 82.9493 38.0648 87.5161C40.6004 88.3333 43.273 88.8907 46.3125 89.2266C47.4965 89.3563 52.6129 89.3563 53.7969 89.2266C59.0434 88.6461 63.4879 87.3481 67.8715 85.1102C68.5434 84.7668 68.6734 84.675 68.5816 84.5989C68.5207 84.5528 65.6566 80.7114 62.2203 76.0684L55.9734 67.6297L48.1453 56.0446C43.8383 49.6754 40.2949 44.4668 40.2641 44.4668C40.2336 44.4594 40.2031 49.6067 40.1879 55.8918C40.1648 66.8965 40.1574 67.3395 40.0199 67.5989C39.8215 67.9731 39.6687 68.1258 39.3477 68.2942C39.1034 68.4161 38.8896 68.4391 37.7364 68.4391H36.4153L36.064 68.2176C35.8349 68.0727 35.6669 67.8817 35.5523 67.6602L35.3919 67.3165L35.4072 52.0047L35.4301 36.6851L35.6669 36.3872C35.7891 36.2269 36.0487 36.0207 36.232 35.9214C36.5451 35.7686 36.6673 35.7534 37.9885 35.7534C39.5465 35.7534 39.8059 35.8145 40.2109 36.2574C40.3254 36.3796 44.5637 42.7641 49.6348 50.4543C54.7055 58.1446 61.6398 68.6454 65.0457 73.8L71.2316 83.1707L71.5449 82.9645C74.3168 81.1622 77.2496 78.5961 79.5711 75.9231C84.5121 70.2489 87.6969 63.3301 88.766 55.9528C89.0789 53.8071 89.1172 53.1731 89.1172 50.2633C89.1172 47.354 89.0789 46.72 88.766 44.5739C86.643 29.9036 76.2031 17.5777 62.0445 13.0108C59.5473 12.2013 56.8898 11.6438 53.9113 11.3078C53.1781 11.2315 48.1301 11.1474 47.4965 11.2085ZM63.4879 34.837C63.8543 35.0202 64.1523 35.3715 64.2594 35.7381C64.3203 35.9367 64.3355 40.1829 64.3203 49.7516L64.2973 63.4829L61.8766 59.7711L59.448 56.0598V46.0786C59.448 39.6254 59.4785 35.9977 59.5242 35.8221C59.6465 35.3945 59.9137 35.0584 60.2805 34.8599C60.5934 34.6995 60.7082 34.6842 61.907 34.6842C63.0375 34.6842 63.2359 34.6995 63.4879 34.837Z" fill="white" />
      </svg>
  )
}

export default NextJS