import { SvgProps } from "@/types"

const Laravel = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      <rect x="0.984375" y="0.0371094" width="100" height="100" rx={radius} fill="#1A1F33" />
      <path fillRule="evenodd" clipRule="evenodd" d="M85.1156 30.5073C85.1406 30.6024 85.1539 30.7005 85.1539 30.799V46.1113C85.1539 46.3078 85.1027 46.5008 85.0059 46.6707C84.9086 46.841 84.7687 46.982 84.6008 47.0797L71.9266 54.4789V69.1449C71.9266 69.5441 71.7176 69.9125 71.3762 70.1137L44.9199 85.557C44.8594 85.5918 44.7934 85.6141 44.7273 85.6379C44.7023 85.6465 44.6793 85.6617 44.6531 85.6687C44.468 85.718 44.2738 85.718 44.0887 85.6687C44.0586 85.6602 44.0309 85.6434 44.002 85.6324C43.9414 85.6102 43.8781 85.5906 43.8203 85.557L17.3697 70.1137C17.2016 70.0156 17.062 69.8746 16.9649 69.7047C16.8677 69.5348 16.8165 69.3414 16.8164 69.1449V23.2085C16.8164 23.108 16.8302 23.0103 16.8549 22.9154C16.8632 22.8833 16.8825 22.854 16.8935 22.8219C16.9141 22.7633 16.9334 22.7033 16.9637 22.6489C16.9843 22.6126 17.0146 22.5833 17.0394 22.5498C17.071 22.5051 17.0999 22.4591 17.1371 22.42C17.1687 22.3879 17.21 22.3642 17.2458 22.3363C17.2857 22.3028 17.3215 22.2665 17.3669 22.24H17.3683L30.5943 14.5183C30.7618 14.4206 30.9516 14.3691 31.1448 14.3691C31.338 14.3691 31.5279 14.4206 31.6953 14.5183L44.9215 22.24H44.9242C44.968 22.2679 45.0055 22.3028 45.0453 22.3349C45.0809 22.3628 45.1207 22.3879 45.1523 22.4186C45.191 22.4591 45.2187 22.5051 45.2516 22.5498C45.275 22.5833 45.3066 22.6126 45.3258 22.6489C45.3574 22.7047 45.3754 22.7633 45.3977 22.8219C45.4086 22.854 45.4277 22.8833 45.4359 22.9168C45.4613 23.0119 45.4742 23.11 45.4746 23.2085V51.9L56.4957 45.4652V30.7976C56.4957 30.6999 56.5094 30.6008 56.5344 30.5073C56.5441 30.4738 56.5617 30.4445 56.573 30.4124C56.5949 30.3538 56.6141 30.2938 56.6445 30.2394C56.6652 30.2031 56.6953 30.1738 56.7187 30.1403C56.752 30.0956 56.7793 30.0496 56.818 30.0105C56.8496 29.9784 56.8895 29.9547 56.9254 29.9268C56.9664 29.8933 57.0023 29.857 57.0465 29.8305H57.048L70.2754 22.1088C70.4426 22.0109 70.6324 21.9594 70.8258 21.9594C71.0191 21.9594 71.209 22.0109 71.3762 22.1088L84.6023 29.8305C84.6492 29.8584 84.6848 29.8933 84.7262 29.9254C84.7605 29.9533 84.8004 29.9784 84.832 30.0091C84.8707 30.0496 84.898 30.0956 84.9312 30.1403C84.9559 30.1738 84.9863 30.2031 85.0055 30.2394C85.0371 30.2938 85.0551 30.3538 85.077 30.4124C85.0895 30.4445 85.1074 30.4738 85.1156 30.5073ZM82.9492 45.4652V32.7319L78.3207 35.4337L71.9266 39.1668V51.9L82.9504 45.4652H82.9492ZM69.723 68.4988V55.7574L63.4336 59.4L45.473 69.7941V82.6555L69.723 68.4988ZM19.0212 25.1414V68.4988L43.2684 82.6543V69.7953L30.6012 62.5258L30.597 62.523L30.5915 62.5203C30.5489 62.4953 30.5131 62.459 30.4732 62.4281C30.4388 62.4004 30.3989 62.3781 30.3686 62.3473L30.3659 62.3434C30.3301 62.3082 30.3053 62.2652 30.275 62.2258C30.2475 62.1883 30.2145 62.1563 30.1924 62.1172L30.1909 62.1129C30.1661 62.0711 30.1509 62.0207 30.133 61.9734C30.1152 61.9316 30.0918 61.8926 30.0808 61.8477V61.8461C30.067 61.7934 30.0643 61.7375 30.0587 61.6828C30.0532 61.641 30.0422 61.5992 30.0422 61.5574V61.5547V31.5764L23.6496 27.8418L19.0212 25.1428V25.1414ZM31.1462 16.7763L20.1264 23.2085L31.1434 29.6407L42.1617 23.2071L31.1434 16.7763H31.1462ZM36.877 56.9184L43.2699 53.1867V25.1414L38.6414 27.8432L32.2472 31.5763V59.6219L36.877 56.9184ZM70.8258 24.3668L59.807 30.799L70.8258 37.2312L81.8426 30.7976L70.8258 24.3668ZM69.723 39.1668L63.3289 35.4337L58.7008 32.7319V45.4652L65.0934 49.1969L69.723 51.9V39.1668ZM44.3695 67.8613L60.5309 58.5051L68.6098 53.8301L57.5996 47.402L44.9227 54.8027L33.3689 61.5477L44.3695 67.8613Z" fill="#FF2D20" />
    </svg>
  )
}

export default Laravel