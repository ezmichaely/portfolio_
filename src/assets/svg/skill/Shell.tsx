import { SvgProps } from "@/types"

const Shell = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className}  viewBox="0 0 101 101" fill="none">
        <rect x="0.558594" y="0.640625" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path fillRule="evenodd" clipRule="evenodd" d="M14.7799 80.1789C14.2868 80.1938 13.797 80.0949 13.3481 79.8906C12.8993 79.6859 12.5034 79.3809 12.1912 78.9988C11.8789 78.5856 11.6641 78.1066 11.5627 77.5988C11.4613 77.0906 11.4759 76.566 11.6054 76.0645L23.3131 24.9207C23.5731 23.8606 24.1715 22.914 25.0177 22.2244C25.8638 21.5348 26.9116 21.1397 28.0024 21.099H86.3375C86.8305 21.0848 87.3203 21.1838 87.7688 21.3884C88.2176 21.5929 88.6137 21.8976 88.9262 22.279C89.2383 22.6926 89.4531 23.1713 89.5543 23.6793C89.6559 24.1874 89.6414 24.7119 89.5121 25.2136L77.7961 76.3602C77.5359 77.4203 76.9375 78.3668 76.0914 79.0563C75.2453 79.7461 74.1977 80.141 73.1066 80.1816H14.7799V80.1789Z" fill="url(#paint0_linear_244_2213)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M28.0024 21.756H86.3376C86.7462 21.7393 87.1529 21.8212 87.5228 21.9948C87.8931 22.1684 88.2162 22.4286 88.4646 22.7534C88.713 23.0781 88.8794 23.458 88.9501 23.8607C89.0208 24.2635 88.9935 24.6773 88.8705 25.0672L77.1544 76.2111C76.9236 77.1236 76.4056 77.938 75.6767 78.5345C74.9482 79.1306 74.047 79.4767 73.1068 79.522H14.7799C14.3713 79.5388 13.9648 79.4572 13.5945 79.2833C13.2243 79.1099 12.9013 78.8497 12.6529 78.5247C12.4044 78.2001 12.2379 77.8201 12.1672 77.4173C12.0966 77.0146 12.1239 76.6009 12.247 76.2111L23.9631 25.0672C24.1931 24.1556 24.7097 23.3418 25.4369 22.7457C26.164 22.1497 27.0633 21.8028 28.0024 21.756Z" fill="url(#paint1_linear_244_2213)" />
        <path fillRule="evenodd" clipRule="evenodd" d="M50.6707 66.1055H64.8582C65.6617 66.1395 66.4211 66.4828 66.9777 67.0633C67.5344 67.6441 67.8453 68.4172 67.8453 69.2215C67.8453 70.0258 67.5344 70.7988 66.9777 71.3797C66.4211 71.9602 65.6617 72.3035 64.8582 72.3375H50.6707C49.8672 72.3035 49.1078 71.9602 48.5512 71.3797C47.9945 70.7988 47.6836 70.0258 47.6836 69.2215C47.6836 68.4172 47.9945 67.6441 48.5512 67.0633C49.1078 66.4828 49.8672 66.1395 50.6707 66.1055Z" fill="#2C5591" />
        <path fillRule="evenodd" clipRule="evenodd" d="M59.8726 52.2532C59.4664 52.9364 58.9007 53.5106 58.2238 53.927L31.8931 72.8262C31.1599 73.3032 30.2716 73.4805 29.4114 73.3215C28.5513 73.1625 27.7849 72.6797 27.2704 71.9723C26.7558 71.2649 26.5324 70.3872 26.6462 69.52C26.76 68.6528 27.2023 67.8622 27.8818 67.3114L51.6265 50.1165V49.7649L36.708 33.9036C36.1517 33.2345 35.872 32.3784 35.9258 31.5099C35.9796 30.6415 36.3629 29.8264 36.9974 29.2311C37.6319 28.6357 38.4697 28.3051 39.3398 28.3066C40.2101 28.3082 41.0464 28.6419 41.6789 29.2395L59.5824 48.2836C60.0632 48.82 60.3531 49.5004 60.4054 50.2192C60.4578 50.9375 60.2703 51.6528 59.8726 52.2532Z" fill="#2C5591" />
        <path fillRule="evenodd" clipRule="evenodd" d="M59.2066 51.595C58.8023 52.2786 58.2375 52.8528 57.5609 53.2688L31.2387 72.1707C30.5052 72.6375 29.6213 72.8075 28.7671 72.6454C27.9128 72.4836 27.1524 72.002 26.6407 71.2989C26.129 70.5961 25.9046 69.7243 26.013 68.8618C26.1215 67.9989 26.5547 67.2102 27.2245 66.6555L50.9719 49.461V49.1067L36.0534 33.2368C35.492 32.5681 35.2081 31.7097 35.2601 30.8381C35.3121 29.9666 35.696 29.148 36.3328 28.5507C36.9698 27.9535 37.8113 27.6229 38.6844 27.627C39.5575 27.6311 40.3961 27.9695 41.0273 28.5727L58.9277 47.6168C59.4109 48.1539 59.7008 48.8371 59.7512 49.5579C59.8019 50.2786 59.6101 50.9957 59.2066 51.595Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M50.2805 65.7383H64.468C65.2516 65.7383 66.0027 66.0496 66.557 66.6035C67.1109 67.1574 67.4223 67.909 67.4223 68.6922C67.4223 69.4758 67.1109 70.2273 66.557 70.7813C66.0027 71.3352 65.2516 71.6465 64.468 71.6465H50.2805C49.4969 71.6465 48.7453 71.3352 48.1914 70.7813C47.6375 70.2273 47.3262 69.4758 47.3262 68.6922C47.3262 67.909 47.6375 67.1574 48.1914 66.6035C48.7453 66.0496 49.4969 65.7383 50.2805 65.7383Z" fill="white" />
        <defs>
          <linearGradient id="paint0_linear_244_2213" x1="70.9922" y1="68.8926" x2="26.178" y2="28.8623" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5391FE" />
            <stop offset="1" stopColor="#3E6DBF" />
          </linearGradient>
          <linearGradient id="paint1_linear_244_2213" x1="25.7317" y1="28.3282" x2="70.0884" y2="68.1912" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5391FE" />
            <stop offset="1" stopColor="#3E6DBF" />
          </linearGradient>
        </defs>
      </svg>
  )
}

export default Shell