import { SvgProps } from "@/types"

const SQLite = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <path d="M100.788 20.0156V24.3856C100.788 33.6256 94.4778 45.7356 88.5378 55.0856C83.9622 56.7258 79.5606 58.816 75.3978 61.3256C75.7078 61.1856 76.4578 60.8356 78.0378 60.1656C80.8935 59.2375 83.7978 58.4663 86.7378 57.8556C82.1878 64.7056 78.2978 69.5056 78.2978 69.5056C78.2978 69.5056 70.3578 72.7256 67.9078 80.2156C69.5044 71.6066 71.8843 63.1615 75.0178 54.9856C78.0178 47.0456 87.9278 25.6156 95.2678 18.9856C87.2678 25.4056 78.4178 38.8256 72.0678 55.5656C68.5953 65.4102 66.525 75.6943 65.9178 86.1156C65.6274 90.7889 66.0694 95.4789 67.2278 100.016H20.7578C15.4535 100.016 10.3664 97.9085 6.61568 94.1578C2.86495 90.4071 0.757813 85.32 0.757813 80.0156V20.0156C0.757812 14.7113 2.86495 9.62424 6.61568 5.87351C10.3664 2.12278 15.4535 0.0156475 20.7578 0.0156475H80.7578C83.3868 0.0117041 85.9907 0.526109 88.4207 1.52944C90.8507 2.53277 93.059 4.00533 94.9193 5.86289C96.7797 7.72046 98.2556 9.92657 99.2625 12.355C100.27 14.7835 100.788 17.3867 100.788 20.0156Z" fill="url(#paint0_linear_244_2536)" />
        <path d="M88.5377 55.0865C83.9621 56.7266 79.5605 58.8169 75.3977 61.3265C75.7077 61.1865 76.4577 60.8365 78.0377 60.1665C80.8934 59.2383 83.7978 58.4672 86.7377 57.8565C82.1877 64.7065 78.2977 69.5065 78.2977 69.5065C78.2977 69.5065 70.3577 72.7265 67.9077 80.2165C69.5044 71.6075 71.8843 63.1624 75.0177 54.9865C78.0177 47.0465 87.9277 25.6165 95.2677 18.9865C87.2677 25.4065 78.4177 38.8265 72.0677 55.5665C68.5952 65.411 66.5249 75.6951 65.9177 86.1165C65.6273 90.7898 66.0693 95.4798 67.2277 100.017H66.4977C65.7019 97.1489 65.2059 94.2065 65.0177 91.2365C64.744 87.8771 64.6772 84.5041 64.8177 81.1365C64.8177 80.6365 64.7477 80.3065 64.7477 80.3065C64.7477 80.3065 64.0177 75.3765 62.9677 71.3065C62.6288 69.7946 62.1049 68.3302 61.4077 66.9465C61.1277 66.4565 61.4077 64.4665 62.2477 61.5065C63.2852 63.2538 64.2331 65.0528 65.0877 66.8965C65.3777 67.7165 65.5177 68.1465 65.5877 68.3565C65.0064 65.3619 64.0593 62.4501 62.7677 59.6865C63.1577 58.3765 63.6177 56.9165 64.1477 55.3665C64.7677 56.4465 66.1477 58.9265 66.6677 60.1065C66.7177 60.2165 66.7577 60.3165 66.7877 60.3965C66.8177 60.4765 66.9277 60.7765 66.9777 60.9365C67.1877 61.5465 67.2877 61.8465 67.3177 61.9365C67.3177 61.7765 67.1877 61.2965 67.0277 60.6165C66.9477 60.2665 66.8477 59.8465 66.7277 59.4065C66.2421 57.4348 65.5725 55.513 64.7277 53.6665C66.9677 42.0265 74.1777 26.7865 81.9377 18.5565C82.6077 17.8565 83.2777 17.1865 83.9377 16.5565C88.4777 12.5565 93.0777 11.1665 96.8777 14.5565C99.6277 17.0065 100.748 20.3965 100.748 24.2865C100.788 33.6265 94.4777 45.7365 88.5377 55.0865Z" fill="#003B57" />
        <path d="M15.6264 28.1955C14.7195 27.2179 13.6547 26.3998 12.4764 25.7755C11.4976 25.255 10.6095 24.5796 9.84641 23.7755C9.4494 23.3061 9.23309 22.7103 9.23642 22.0955C9.22813 21.7908 9.28959 21.4883 9.41611 21.211C9.54263 20.9337 9.73086 20.6889 9.96642 20.4955C10.521 20.0783 11.203 19.8662 11.8964 19.8955C12.7209 19.866 13.5256 20.1521 14.1464 20.6955C14.7514 21.2804 15.1092 22.0748 15.1464 22.9155H15.5864V19.5355H15.1764C15.1545 19.6575 15.1068 19.7734 15.0364 19.8755C15.0038 19.9037 14.9655 19.9246 14.9241 19.9367C14.8826 19.9488 14.8391 19.9518 14.7964 19.9455C14.5364 19.9248 14.2805 19.8675 14.0364 19.7755C13.3456 19.5298 12.6195 19.398 11.8864 19.3855C10.8162 19.3399 9.77096 19.7171 8.97641 20.4355C8.61675 20.7897 8.33631 21.2162 8.15359 21.6868C7.97088 22.1574 7.89004 22.6614 7.91641 23.1655C7.91313 23.708 8.00799 24.2467 8.19641 24.7555C8.39477 25.256 8.68663 25.7142 9.05641 26.1055C9.76601 26.7458 10.544 27.3058 11.3764 27.7755C12.4074 28.3261 13.3482 29.0309 14.1664 29.8655C14.5865 30.3334 14.8243 30.9368 14.8364 31.5655C14.8535 31.9213 14.7894 32.2764 14.6491 32.6038C14.5088 32.9312 14.2958 33.2225 14.0264 33.4555C13.4173 33.9552 12.6431 34.2085 11.8564 34.1655C10.9284 34.1665 10.036 33.8081 9.36641 33.1655C9.00415 32.8324 8.71827 32.4249 8.5284 31.971C8.33852 31.517 8.24915 31.0273 8.26642 30.5355H7.81641V34.5355H8.26642C8.39642 34.1555 8.58642 33.9655 8.82642 33.9655C9.10807 34.0086 9.38342 34.0858 9.64641 34.1955C10.471 34.5157 11.3426 34.6981 12.2264 34.7355C12.7823 34.7472 13.3348 34.646 13.8505 34.4381C14.3661 34.2301 14.8342 33.9196 15.2264 33.5255C15.6264 33.1393 15.9415 32.6739 16.1516 32.1591C16.3616 31.6443 16.462 31.0913 16.4464 30.5355C16.4463 29.6851 16.1572 28.86 15.6264 28.1955ZM34.6864 38.4155C34.2556 38.5647 33.8023 38.6391 33.3464 38.6355C32.6538 38.6182 31.9807 38.4031 31.4064 38.0155C30.4867 37.3309 29.6685 36.5195 28.9764 35.6055C28.6944 35.2255 28.3799 34.8709 28.0364 34.5455C29.826 34.2261 31.4448 33.2838 32.6064 31.8855C33.7631 30.5352 34.395 28.8135 34.3864 27.0355C34.405 26.0164 34.2079 25.005 33.8081 24.0674C33.4082 23.1299 32.8147 22.2875 32.0664 21.5955C31.3128 20.8663 30.4215 20.2945 29.4446 19.9134C28.4677 19.5322 27.4247 19.3494 26.3764 19.3755C24.9781 19.3494 23.5979 19.6944 22.3764 20.3755C21.1913 21.0357 20.2092 22.0074 19.5364 23.1855C18.8643 24.3488 18.5188 25.6721 18.5364 27.0155C18.5217 28.8047 19.17 30.5361 20.3564 31.8755C21.4581 33.2304 22.9891 34.1687 24.6964 34.5355C25.3366 34.9541 25.9013 35.4782 26.3664 36.0855C26.9847 36.8261 27.6822 37.4967 28.4464 38.0855C29.0029 38.4838 29.6212 38.7879 30.2764 38.9855C30.9623 39.1825 31.6728 39.2801 32.3864 39.2755C33.2311 39.2905 34.0693 39.1269 34.8464 38.7955L34.6864 38.4155ZM26.3764 34.1655C25.5985 34.1751 24.8296 33.9986 24.1338 33.6507C23.438 33.3028 22.8355 32.7936 22.3764 32.1655C21.2962 30.6796 20.7532 28.8707 20.8364 27.0355C20.7368 25.1767 21.2884 23.3413 22.3964 21.8455C22.8904 21.2175 23.5254 20.7147 24.2498 20.3777C24.9742 20.0406 25.7678 19.8789 26.5664 19.9055C27.3376 19.8918 28.1013 20.0594 28.7961 20.3946C29.4908 20.7298 30.0971 21.2233 30.5664 21.8355C31.6788 23.3706 32.2264 25.243 32.1164 27.1355C32.2118 28.9645 31.6555 30.768 30.5464 32.2255C30.0529 32.8541 29.4181 33.3573 28.6935 33.6944C27.969 34.0315 27.1751 34.1929 26.3764 34.1655ZM45.1364 32.1655C45.1036 32.4432 45.0083 32.7099 44.8576 32.9454C44.7069 33.181 44.5048 33.3793 44.2664 33.5255C43.4876 33.844 42.6455 33.9775 41.8064 33.9155H40.9164C39.8564 33.9155 39.2464 33.5355 39.0864 32.7755C39.0657 32.6128 39.0657 32.4482 39.0864 32.2855V21.8455C39.033 21.3138 39.1373 20.7782 39.3864 20.3055C39.5347 20.1629 39.7105 20.0521 39.903 19.9799C40.0956 19.9076 40.301 19.8755 40.5064 19.8855V19.4155H35.5064V19.8855C36.5064 19.8855 37.0164 20.1655 37.1464 20.7255C37.1962 21.0967 37.2196 21.471 37.2164 21.8455V32.1255C37.2772 32.6433 37.1571 33.1661 36.8764 33.6055C36.5634 33.8557 36.177 33.9962 35.7764 34.0055V34.4655H45.4564L45.7064 32.1255L45.1364 32.1655ZM49.7864 23.0155C49.7356 22.7845 49.6045 22.579 49.4164 22.4355C49.2405 22.285 49.0179 22.2002 48.7864 22.1955C48.6823 22.1892 48.5782 22.2077 48.4826 22.2494C48.387 22.2911 48.3026 22.3549 48.2364 22.4355C48.1679 22.5135 48.1201 22.6076 48.0974 22.7089C48.0747 22.8102 48.0778 22.9157 48.1064 23.0155C48.1576 23.2516 48.2926 23.4612 48.4864 23.6055C48.6661 23.764 48.8968 23.8527 49.1364 23.8555C49.2386 23.8617 49.3408 23.842 49.4334 23.7983C49.526 23.7546 49.6062 23.6883 49.6664 23.6055C49.7344 23.5173 49.7808 23.4143 49.8016 23.3048C49.8225 23.1954 49.8172 23.0826 49.7864 22.9755V23.0155ZM58.7864 32.3155C58.1852 33.0587 57.3234 33.545 56.3764 33.6755C56.1745 33.6811 55.9783 33.6081 55.8291 33.472C55.6799 33.3358 55.5893 33.1471 55.5764 32.9455C55.5646 32.8091 55.5646 32.6719 55.5764 32.5355V26.6555H57.9564V25.9655H55.6064V23.7455H55.1564C55.0611 24.3911 54.7522 24.9861 54.2791 25.4356C53.806 25.8851 53.196 26.1632 52.5464 26.2255V26.6555H54.1064V31.8155C54.0888 32.407 54.1189 32.9989 54.1964 33.5855C54.2484 33.9131 54.4254 34.2077 54.6903 34.4073C54.9552 34.6069 55.2872 34.6959 55.6164 34.6555C56.7564 34.6555 57.9664 33.9755 59.2164 32.5955L58.7864 32.3155ZM67.2064 31.7055C66.899 32.2352 66.4629 32.6788 65.9385 32.9952C65.4141 33.3116 64.8184 33.4905 64.2064 33.5155C63.5711 33.5461 62.9488 33.3285 62.4711 32.9086C61.9933 32.4887 61.6976 31.8995 61.6464 31.2655C61.6052 31.064 61.5751 30.8603 61.5564 30.6555C62.9017 30.5142 64.1905 30.0399 65.3064 29.2755C66.1564 28.6155 67.0064 27.9155 66.8464 27.1755C66.757 26.751 66.5106 26.376 66.1564 26.1255C65.5897 25.8507 64.9661 25.7137 64.3364 25.7255C63.6747 25.7306 63.026 25.9098 62.4556 26.2451C61.8851 26.5804 61.4129 27.0599 61.0864 27.6355C60.6722 28.2469 60.3898 28.9379 60.2572 29.6644C60.1246 30.391 60.1448 31.1372 60.3164 31.8555C60.4543 32.6689 60.8673 33.4102 61.4864 33.9555C62.1156 34.4641 62.908 34.7271 63.7164 34.6955C64.5858 34.7347 65.4477 34.5192 66.1964 34.0755C66.7853 33.5118 67.2487 32.8303 67.5564 32.0755L67.2064 31.7055ZM62.0364 27.7055C62.1619 27.3919 62.3745 27.1207 62.6492 26.924C62.9239 26.7273 63.2491 26.6133 63.5864 26.5955C63.8862 26.607 64.174 26.7158 64.4064 26.9055C64.6419 27.0726 64.8116 27.3166 64.8864 27.5955C65.1464 28.8288 64.0331 29.6822 61.5464 30.1555C61.4801 29.3034 61.668 28.4508 62.0864 27.7055H62.0364ZM50.6864 33.7855C50.5901 33.7303 50.5075 33.6539 50.4452 33.5621C50.3828 33.4703 50.3422 33.3654 50.3264 33.2555C50.2821 32.9241 50.262 32.5898 50.2664 32.2555V25.7155H49.7464L46.8764 26.3655V26.8755L47.8764 26.7555C48.0748 26.7295 48.2756 26.7818 48.4361 26.9013C48.5966 27.0207 48.7043 27.198 48.7364 27.3955C48.7681 27.594 48.7848 27.7945 48.7864 27.9955V32.6155C48.7864 33.2655 48.7064 33.6155 48.5564 33.7455C48.1935 33.898 47.7979 33.9565 47.4064 33.9155V34.3455H51.9564V33.9355C51.5438 33.9674 51.129 33.9164 50.7364 33.7855H50.6864Z" fill="#003B57" />
        <defs>
          <linearGradient id="paint0_linear_244_2536" x1="50.7878" y1="100.016" x2="50.7878" y2="0.0156488" gradientUnits="userSpaceOnUse">
            <stop offset="0.06" stopColor="#0F80CC" />
            <stop offset="1" stopColor="#97D9F6" />
          </linearGradient>
        </defs>
      </svg>
  )
}

export default SQLite