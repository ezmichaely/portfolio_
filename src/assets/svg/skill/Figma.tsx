import { SvgProps } from "@/types"

const Figma = ({ width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 65 65" fill="none">
        <g clip-path="url(#clip0_69_174)">
          <path d="M21.3947 64.7869C24.2237 64.7869 26.9368 63.6631 28.9372 61.6628C30.9376 59.6624 32.0614 56.9493 32.0614 54.1203V43.4536H21.3947C18.5657 43.4536 15.8526 44.5774 13.8522 46.5778C11.8518 48.5782 10.728 51.2913 10.728 54.1203C10.728 56.9493 11.8518 59.6624 13.8522 61.6628C15.8526 63.6631 18.5657 64.7869 21.3947 64.7869Z" fill="#0ACF83" />
          <path d="M10.728 32.7873C10.728 29.9583 11.8518 27.2452 13.8522 25.2448C15.8526 23.2444 18.5657 22.1206 21.3947 22.1206H32.0614V43.4539H21.3947C18.5657 43.4539 15.8526 42.3301 13.8522 40.3297C11.8518 38.3294 10.728 35.6162 10.728 32.7873Z" fill="#A259FF" />
          <path d="M10.728 11.4538C10.728 8.62624 11.8507 5.9144 13.8493 3.91425C15.8479 1.9141 18.5588 0.789318 21.3864 0.787109L32.053 0.787109V22.1204H21.3947C18.5657 22.1204 15.8526 20.9966 13.8522 18.9962C11.8518 16.9959 10.728 14.2828 10.728 11.4538Z" fill="#F24E1E" />
          <path d="M32.0615 0.787109H42.7282C45.5572 0.787109 48.2703 1.91092 50.2707 3.9113C52.2711 5.91169 53.3949 8.6248 53.3949 11.4538C53.3949 14.2828 52.2711 16.9959 50.2707 18.9962C48.2703 20.9966 45.5572 22.1204 42.7282 22.1204H32.0615V0.787109Z" fill="#FF7262" />
          <path d="M53.3949 32.7873C53.3949 35.6162 52.2711 38.3294 50.2707 40.3297C48.2703 42.3301 45.5572 43.4539 42.7282 43.4539C39.8992 43.4539 37.1861 42.3301 35.1857 40.3297C33.1853 38.3294 32.0615 35.6162 32.0615 32.7873C32.0615 29.9583 33.1853 27.2452 35.1857 25.2448C37.1861 23.2444 39.8992 22.1206 42.7282 22.1206C45.5572 22.1206 48.2703 23.2444 50.2707 25.2448C52.2711 27.2452 53.3949 29.9583 53.3949 32.7873Z" fill="#1ABCFE" />
        </g>
        <defs>
          <clipPath id="clip0_69_174">
            <rect width="64" height="64" fill="white" transform="translate(0.0532227 0.787109)" />
          </clipPath>
        </defs>
    </svg>
  )
}

export default Figma