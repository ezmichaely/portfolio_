import { SvgProps } from "@/types"

const Xampp = ({ width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 70 71" fill="none">
      <g clipPath="url(#clip0_69_154)">
        <path fillRule="evenodd" clipRule="evenodd" d="M34.9355 0.277398C43.9506 0.277398 52.9659 0.277398 61.981 0.276855C63.1124 0.276855 64.2329 0.375073 65.3185 0.70608C67.6722 1.42344 68.9183 3.11131 69.4067 5.43732C69.6007 6.3598 69.6558 7.29992 69.6577 8.24003C69.6721 14.5536 69.6826 20.8677 69.6832 27.1818C69.6837 38.6814 69.6851 50.1809 69.6615 61.6802C69.6582 63.2899 69.5725 64.9172 68.7778 66.3837C67.8963 68.01 66.6895 69.2971 64.8572 69.8631C64.5262 69.9654 64.1806 70.0818 63.8412 70.0818C63.0592 70.0823 62.2982 70.276 61.5187 70.276C43.8648 70.2747 26.2113 70.285 8.55743 70.2571C7.12162 70.2543 5.66247 70.1499 4.29856 69.5657C4.02724 69.4491 3.75321 69.3514 3.51445 69.1696C1.77801 67.8464 0.598865 66.196 0.345997 63.9627C0.255105 63.1575 0.226074 62.3565 0.226074 61.551C0.228787 43.6571 0.230415 25.7631 0.23964 7.86914C0.240454 6.83108 0.251035 5.77511 0.570377 4.78155C1.42069 2.1343 3.28138 0.688987 6.0396 0.395421C6.68073 0.327049 7.32728 0.282824 7.97139 0.282282C16.9588 0.274956 25.9476 0.277398 34.9355 0.277398Z" fill="#FB7A24" />
        <path fillRule="evenodd" clipRule="evenodd" d="M35.1652 44.8037C34.9679 46.0122 34.8293 47.1045 34.3952 48.1111C32.363 52.8277 28.8994 55.7018 23.7069 56.274C17.5694 56.9501 11.9005 53.162 10.1961 47.2787C9.57829 45.1467 9.64015 42.9732 9.86426 40.8032C10.1033 38.4845 10.7865 36.2857 11.853 34.2112C12.0058 33.9147 12.0028 33.6908 11.8118 33.4035C10.1741 30.9405 9.53868 28.2194 9.7693 25.2824C9.89275 23.7126 10.2739 22.2111 10.9856 20.8046C13.0718 16.6846 17.6519 13.1882 23.7861 13.7688C29.1799 14.2789 34.1757 18.9317 34.9555 24.1643C34.9948 24.427 35.0686 24.6847 35.1549 25.0722C35.284 24.3705 35.3774 23.7915 35.4981 23.218C36.5028 18.4642 41.1562 13.4899 47.7519 13.4283C54.4372 13.3664 59.3879 18.6096 60.3221 23.4792C60.7168 25.5372 60.6482 27.5932 60.3226 29.6485C60.0004 31.6932 59.3909 33.6822 58.5124 35.5564C58.3181 35.9713 58.3382 36.27 58.587 36.6553C60.0269 38.8866 60.6623 41.336 60.5809 43.996C60.4105 49.5464 56.4848 54.5237 51.0842 55.8255C43.5443 57.6425 37.7644 53.1332 35.8193 47.6775C35.5019 46.7895 35.3519 45.8624 35.1655 44.8037H35.1652ZM48.8638 35.0526C48.9443 34.7387 49.1874 34.5506 49.3622 34.3184C51.2527 31.806 52.2471 28.9998 52.0252 25.8397C51.8634 23.5335 49.9667 21.9089 47.6705 21.9949C45.3727 22.0809 43.6414 23.8528 43.6089 26.152C43.6064 26.3403 43.6178 26.5289 43.6062 26.7158C43.448 29.1661 42.096 30.5083 40.0473 30.658C39.6731 30.6854 39.2979 30.7188 38.9232 30.7199C36.2643 30.7259 33.6057 30.7248 30.9465 30.7223C29.7852 30.7213 28.6338 30.8477 27.5279 31.189C22.3655 32.7816 19.3552 36.312 18.3584 41.5737C18.1609 42.6147 17.9832 43.6951 18.3245 44.7644C18.8142 46.2982 19.7272 47.4388 21.3432 47.8203C23.018 48.2156 24.4769 47.7782 25.636 46.4626C26.3851 45.612 26.6214 44.6013 26.6773 43.4922C26.8222 40.6393 28.3757 39.2132 30.9668 39.2347C34.9414 39.2678 38.9164 39.2417 42.8915 39.2447C43.5969 39.245 43.6035 39.2545 43.607 39.9523C43.6138 41.2411 43.5741 42.5317 43.6238 43.8191C43.7047 45.921 45.554 47.668 47.6979 47.7296C49.9086 47.7929 51.8792 46.1576 52.0233 44.0232C52.1475 42.1755 52.1397 40.3167 52.0184 38.4677C51.9245 37.0365 51.1502 36.0163 49.8381 35.4243C49.5233 35.2827 49.1923 35.1766 48.8638 35.0526ZM23.9481 30.7158C24.803 30.7158 25.5008 30.708 26.1981 30.7194C26.5438 30.7248 26.6719 30.5761 26.6691 30.2372C26.6577 28.8961 26.7269 27.5506 26.6415 26.2144C26.5286 24.4516 25.5912 23.1773 23.95 22.5345C22.2673 21.8755 20.7273 22.2515 19.425 23.4944C18.1169 24.7433 17.9425 26.2706 18.4002 27.9419C18.8207 29.4781 19.8138 30.3506 21.376 30.6144C22.2833 30.7671 23.1957 30.6939 23.9481 30.7158Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_69_154">
          <rect width="69.468" height="70" fill="white" transform="translate(0.220703 0.276855)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Xampp