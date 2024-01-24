import { SvgProps } from "@/types"

const EdgePaper = ({ width, height, size, color }: SvgProps) => {

  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={"1440"} height="81" viewBox="0 0 1440 81" fill="none">
      <path fill={color}
        d="M0 81L1440 81.0001L1440 17.6477L1432.55 12.7152L1412.73 16.5516L1396.95 31.4589L1376.91 35.076L1358.73 40.5567L1339.34 28.9378L1321.71 33.5415L1303.31 41.9816L1285.89 29.3762L1267.49 35.4049L1249.64 36.7202L1231.67 35.9529L1216.23 44.8315L1198.38 43.7354L1182.71 53.3813L1164.09 40.7759L1147.55 46.4757L1127.84 46.5853L1110.42 37.8163L1096.51 24.0052L1078.44 18.0861L1059.71 12.8247L1040.21 12.0575L1020.61 15.017L1000.67 18.4149L980.957 10.9613L962.884 20.1687L942.402 16.1131L924.549 24.4437L906.805 32.3357L888.732 38.6932L870.44 45.0507L851.82 49.9832L830.571 42.6392L812.827 50.7505L795.85 56.9984L778.106 57.3272L761.238 63.7944L743.166 62.2598L725.75 64.6713L707.897 58.2041L690.81 60.3964L673.285 63.1367L654.994 55.135L634.292 50.6409L616.548 39.022L595.409 45.0507L577.008 27.7319L557.073 30.253L538.781 34.4183L521.476 29.2665L503.294 35.624L485.659 36.9394L468.134 34.1991L450.39 27.1839L432.318 21.4841L415.231 35.1856L396.939 27.7319L378.757 26.4166L361.999 35.9528L345.46 45.2699L325.963 35.624L307.891 35.624L295.733 58.0945L277.003 55.0253L259.15 46.1467L243.158 49.1063L223.662 55.9022L209.97 39.8988L194.198 30.5818L173.825 32.226L158.929 20.1687L138.009 24.7724L123.77 9.42667L105.807 5.69987L86.8579 8.33057L69.333 2.30191L50.4937 6.46713L31.1067 2.19226L12.158 -2.7556e-06L6.94709e-06 1.5346L0 81Z" />
    </svg>
  )
}

export default EdgePaper