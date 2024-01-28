import { SvgProps } from "@/types"

const Javascript = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.984375" y="0.269531" width="100" height="100" rx={radius} fill="#F0DB4F" />
        <path d="M25.9845 82.4641L33.6373 77.8328C35.1136 80.4504 36.4566 82.6652 39.678 82.6652C42.7659 82.6652 44.7128 81.4574 44.7128 76.759V44.8066H54.1104V76.8918C54.1104 86.625 48.405 91.0555 40.0807 91.0555C32.5633 91.0555 28.1995 87.1621 25.9844 82.4633" fill="#323330" />
        <path d="M59.2148 81.4574L66.8664 77.0273C68.8809 80.3168 71.4988 82.7332 76.1301 82.7332C80.0242 82.7332 82.507 80.7863 82.507 78.1012C82.507 74.8793 79.9563 73.7379 75.6602 71.859L73.3113 70.8516C66.5313 67.9656 62.0336 64.3406 62.0336 56.6883C62.0336 49.6398 67.4039 44.2695 75.7949 44.2695C81.7691 44.2695 86.0652 46.3508 89.1527 51.7879L81.8359 56.4867C80.2246 53.6004 78.4801 52.4594 75.7949 52.4594C73.0426 52.4594 71.2973 54.2047 71.2973 56.4867C71.2973 59.3059 73.0426 60.4473 77.0699 62.193L79.4191 63.1996C87.407 66.6234 91.9047 70.1133 91.9047 77.9668C91.9047 86.4254 85.2594 91.0566 76.3316 91.0566C67.6055 91.0566 61.9668 86.8949 59.2148 81.4574Z" fill="#323330" />
      </svg>
  )
}

export default Javascript