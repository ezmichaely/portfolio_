import { SvgProps } from "@/types"

const Xampp = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className}  viewBox="0 0 101 101" fill="none">
      <rect x="0.222656" y="0.0351562" width="100" height="100" rx={radius} fill="#FB7A24"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M50.2452 64.1979C49.9634 65.9242 49.7653 67.4847 49.1452 68.9227C46.2421 75.6607 41.294 79.7665 33.8762 80.5839C25.1084 81.5498 17.0099 76.1382 14.575 67.7335C13.6925 64.6878 13.7809 61.5828 14.101 58.4828C14.4425 55.1703 15.4185 52.0293 16.9421 49.0657C17.1603 48.6421 17.156 48.3223 16.8832 47.9118C14.5436 44.3932 13.6359 40.506 13.9653 36.3103C14.1417 34.0676 14.6863 31.9227 15.7029 29.9134C18.6832 24.0277 25.2262 19.0328 33.9894 19.8622C41.6948 20.5909 48.8316 27.2378 49.9456 34.713C50.0018 35.0882 50.1072 35.4564 50.2305 36.0099C50.415 35.0076 50.5483 34.1804 50.7208 33.361C52.156 26.57 58.8037 19.4638 68.2262 19.3758C77.7766 19.2874 84.8491 26.7777 86.1836 33.7343C86.7475 36.6742 86.6495 39.6114 86.1843 42.5475C85.724 45.4685 84.8534 48.3099 83.5983 50.9874C83.3208 51.58 83.3495 52.0068 83.7049 52.5572C85.7619 55.7448 86.6696 59.244 86.5533 63.044C86.3099 70.9731 80.7018 78.0835 72.9867 79.9432C62.2154 82.539 53.9584 76.0971 51.1797 68.3033C50.7262 67.0347 50.5119 65.7103 50.2456 64.1979H50.2452ZM69.8146 50.2676C69.9297 49.8192 70.277 49.5506 70.5266 49.2188C73.2274 45.6297 74.6479 41.6207 74.3309 37.1064C74.0998 33.8118 71.3902 31.4909 68.1099 31.6138C64.8274 31.7366 62.3541 34.268 62.3076 37.5525C62.3041 37.8215 62.3204 38.0909 62.3037 38.3579C62.0778 41.8583 60.1464 43.7758 57.2196 43.9897C56.6851 44.0289 56.1491 44.0766 55.6138 44.0781C51.8154 44.0866 48.0173 44.0851 44.2185 44.0816C42.5595 44.08 40.9146 44.2607 39.3347 44.7483C31.9599 47.0234 27.6595 52.0669 26.2355 59.5835C25.9533 61.0707 25.6995 62.6141 26.1871 64.1417C26.8867 66.3328 28.1909 67.9622 30.4995 68.5072C32.8921 69.0719 34.9762 68.4471 36.632 66.5676C37.7022 65.3525 38.0398 63.9087 38.1196 62.3242C38.3266 58.2486 40.546 56.2114 44.2475 56.2421C49.9254 56.2893 55.6041 56.2521 61.2828 56.2564C62.2905 56.2568 62.2999 56.2703 62.3049 57.2672C62.3146 59.1083 62.258 60.9521 62.3289 62.7913C62.4444 65.794 65.0863 68.2897 68.1491 68.3777C71.3072 68.468 74.1223 66.132 74.3281 63.0827C74.5057 60.4432 74.4944 57.7878 74.3212 55.1463C74.1871 53.1017 73.0809 51.6444 71.2064 50.7986C70.7568 50.5963 70.284 50.4448 69.8146 50.2676ZM34.2208 44.0723C35.4421 44.0723 36.439 44.061 37.4351 44.0773C37.9289 44.0851 38.1119 43.8727 38.108 43.3886C38.0917 41.4727 38.1905 39.5506 38.0685 37.6417C37.9072 35.1234 36.5681 33.3029 34.2235 32.3847C31.8196 31.4432 29.6196 31.9804 27.7591 33.756C25.8905 35.5401 25.6413 37.7219 26.2952 40.1095C26.896 42.3041 28.3146 43.5506 30.5464 43.9273C31.8425 44.1455 33.146 44.0409 34.2208 44.0723Z" fill="white"/>
    </svg>
  )
}

export default Xampp