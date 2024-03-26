import { SvgProps } from "@/types"

const Skype = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;


  return (

    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="#00AFF0" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="#00AFF0" stroke="white" />
          }
          <path d="M5.77457 13.9191C5.48249 15.5144 5.58204 17.1568 6.06467 18.7052C6.5473 20.2535 7.39858 21.6616 8.5454 22.8084C9.69221 23.9552 11.1003 24.8065 12.6486 25.2892C14.197 25.7718 15.8394 25.8713 17.4347 25.5793C23.8214 28.6847 28.2746 21.8293 25.5793 17.4347C26.9269 9.70035 19.8371 4.5441 13.9191 5.77457C12.7818 5.13126 11.465 4.87838 10.1704 5.05464C8.87568 5.23089 7.67443 5.82658 6.7505 6.7505C5.82658 7.67443 5.23089 8.87568 5.05464 10.1704C4.87838 11.465 5.13126 12.7818 5.77457 13.9191ZM19.8957 11.4582C20.8332 12.8058 18.9582 13.8605 18.255 13.0402C17.3175 11.9855 16.38 11.4582 15.3839 11.5168C12.8058 11.6925 12.8644 13.8605 15.091 14.1535C18.1379 14.6222 20.8918 15.4425 20.6574 18.1379C20.3644 21.1847 17.9035 22.0636 15.3839 21.8879C12.3371 21.6535 11.3996 20.5988 10.8136 19.4855C10.1105 18.1379 12.1027 16.8488 12.923 18.3136C14.2707 20.4816 16.7316 20.1886 17.4933 19.3097C18.6652 17.9621 17.4347 17.1418 16.1457 16.9074C14.7394 16.6144 13.2746 16.3214 12.1613 15.7355C10.4035 14.798 9.64176 10.3449 14.2707 9.58316C16.38 9.2316 18.8996 9.87613 19.8957 11.4582Z" fill="white" />
        </svg>
      :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="#00AFF0" />
            :
            <rect width="30" height="30" fill="#00AFF0" />
          }
          <path d="M4.77457 12.9191C4.48249 14.5144 4.58204 16.1568 5.06467 17.7052C5.5473 19.2535 6.39858 20.6616 7.5454 21.8084C8.69221 22.9552 10.1003 23.8065 11.6486 24.2892C13.197 24.7718 14.8394 24.8713 16.4347 24.5793C22.8214 27.6847 27.2746 20.8293 24.5793 16.4347C25.9269 8.70035 18.8371 3.5441 12.9191 4.77457C11.7818 4.13126 10.465 3.87838 9.17036 4.05464C7.87568 4.23089 6.67443 4.82658 5.7505 5.7505C4.82658 6.67443 4.23089 7.87568 4.05464 9.17036C3.87838 10.465 4.13126 11.7818 4.77457 12.9191ZM18.8957 10.4582C19.8332 11.8058 17.9582 12.8605 17.255 12.0402C16.3175 10.9855 15.38 10.4582 14.3839 10.5168C11.8058 10.6925 11.8644 12.8605 14.091 13.1535C17.1379 13.6222 19.8918 14.4425 19.6574 17.1379C19.3644 20.1847 16.9035 21.0636 14.3839 20.8879C11.3371 20.6535 10.3996 19.5988 9.81363 18.4855C9.11051 17.1379 11.1027 15.8488 11.923 17.3136C13.2707 19.4816 15.7316 19.1886 16.4933 18.3097C17.6652 16.9621 16.4347 16.1418 15.1457 15.9074C13.7394 15.6144 12.2746 15.3214 11.1613 14.7355C9.40348 13.798 8.64176 9.34488 13.2707 8.58316C15.38 8.2316 17.8996 8.87613 18.8957 10.4582Z" fill="white" />
        </svg>
      }
    </>
  )
}

export default Skype