import { SvgProps } from "@/types"

const TwitterX = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;


  return (
    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="black" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="black" stroke="white" />
          }
          <path d="M22.6012 22.4555L17.3303 14.7977L16.7346 13.9317L12.9644 8.45421L12.6521 8H8.01843L9.14851 9.64223L14.1617 16.926L14.7573 17.7912L18.7873 23.644L19.0997 24.0973H23.7329L22.6012 22.4555ZM19.6488 23.0495L15.4639 16.9693L14.8682 16.1037L10.012 9.04822H12.1009L16.0289 14.754L16.6246 15.6196L21.7385 23.05L19.6488 23.0495Z" fill="white" />
          <path d="M14.8678 16.1036L15.4639 16.9688L14.7574 17.7912L9.33662 24.0973H8L14.1613 16.926L14.8678 16.1036Z" fill="white" />
          <path d="M23.1733 8L17.3302 14.7977L16.6237 15.6196L16.0276 14.754L16.7341 13.9317L20.6923 9.32486L21.8367 8H23.1733Z" fill="white" />
        </svg>
      :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="black" />
            :
            <rect width="30" height="30" fill="black" />
          }
          <path d="M21.6012 21.4555L16.3303 13.7977L15.7346 12.9317L11.9644 7.45421L11.6521 7H7.01843L8.14851 8.64223L13.1617 15.926L13.7573 16.7912L17.7873 22.644L18.0997 23.0973H22.7329L21.6012 21.4555ZM18.6488 22.0495L14.4639 15.9693L13.8682 15.1037L9.01202 8.04822H11.1009L15.0289 13.754L15.6246 14.6196L20.7385 22.05L18.6488 22.0495Z" fill="white" />
          <path d="M13.8678 15.1036L14.4639 15.9688L13.7574 16.7912L8.33662 23.0973H7L13.1613 15.926L13.8678 15.1036Z" fill="white" />
          <path d="M22.1733 7L16.3302 13.7977L15.6237 14.6196L15.0276 13.754L15.7341 12.9317L19.6923 8.32486L20.8367 7H22.1733Z" fill="white" />
        </svg>
      }


    </>

  )
}

export default TwitterX