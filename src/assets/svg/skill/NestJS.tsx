import { SvgProps } from "@/types"

const NestJS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.429688" y="0.945312" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M57.8957 7.97656C57.2879 7.97656 56.7234 8.11023 56.2023 8.28848C57.3098 9.04605 57.9176 10.0487 58.2215 11.185C58.2434 11.341 58.2867 11.4524 58.3082 11.6083C58.3301 11.742 58.352 11.8757 58.352 12.0094C58.4387 13.9701 57.8523 14.2152 57.4398 15.3738C56.8102 16.8666 56.984 18.4709 57.7438 19.7631C57.809 19.9191 57.8957 20.0973 58.0043 20.2533C57.1793 14.6163 61.7605 13.7696 62.6074 12.0094C62.6723 10.472 61.4348 9.44711 60.4578 8.7341C59.5242 8.1548 58.6773 7.97656 57.8957 7.97656ZM64.8004 9.24656C64.7133 9.75902 64.7785 9.62535 64.757 9.89273C64.7352 10.071 64.7352 10.2938 64.7133 10.472C64.6699 10.6503 64.6266 10.8285 64.5613 11.0068C64.518 11.185 64.4527 11.3632 64.3879 11.5415C64.3008 11.7198 64.2359 11.8757 64.1488 12.0539C64.084 12.1431 64.0402 12.2322 63.9754 12.3213C63.932 12.3882 63.8883 12.455 63.8449 12.5219C63.7363 12.6779 63.6277 12.8338 63.5191 12.9675C63.3891 13.1012 63.2805 13.2571 63.1285 13.3686C63.1285 13.3909 63.1285 13.3909 63.1285 13.3909C62.998 13.5023 62.868 13.6359 62.716 13.7473C62.2602 14.1038 61.7391 14.3712 61.2613 14.7054C61.1094 14.8168 60.9574 14.9059 60.827 15.0396C60.675 15.151 60.5449 15.2624 60.4145 15.3961C60.2625 15.5298 60.1539 15.6635 60.0238 15.8195C59.9152 15.9532 59.7848 16.1091 59.698 16.2651C59.5895 16.4211 59.4809 16.577 59.3941 16.733C59.307 16.9112 59.2422 17.0672 59.1551 17.2454C59.0902 17.4237 59.025 17.5796 58.9816 17.7579C58.9164 17.9584 58.8731 18.1367 58.8297 18.3149C58.8078 18.4041 58.8078 18.5154 58.7859 18.6046C58.7645 18.6937 58.7645 18.7828 58.7426 18.872C58.7426 19.0502 58.7211 19.2507 58.7211 19.4289C58.7211 19.5627 58.7211 19.6963 58.7426 19.83C58.7426 20.0082 58.7645 20.1865 58.8078 20.387C58.8297 20.5653 58.8731 20.7435 58.9164 20.9218C58.9816 21.1 59.025 21.2783 59.0902 21.4565C59.1336 21.5679 59.1988 21.6793 59.2422 21.7684L54.2484 19.7854C53.4016 19.5404 52.5766 19.3175 51.7297 19.117C51.2738 19.0056 50.818 18.8942 50.3617 18.7828C49.059 18.5154 47.7348 18.3149 46.4102 18.1813C46.3668 18.1813 46.3453 18.1589 46.3016 18.1589C44.9988 18.0252 43.718 17.9584 42.4152 17.9584C41.4598 17.9584 40.5047 18.0029 39.571 18.0698C38.2466 18.1589 36.9222 18.3371 35.5977 18.56C35.272 18.6045 34.9463 18.6714 34.6207 18.7382C33.9476 18.8719 33.2962 19.0279 32.6666 19.1838C32.3409 19.273 32.0152 19.3621 31.6895 19.4512C31.3639 19.5849 31.0599 19.7409 30.7559 19.8745C30.5171 19.9859 30.2782 20.0973 30.0394 20.2087C29.996 20.2311 29.9525 20.2311 29.9309 20.2533C29.7138 20.3647 29.5183 20.4538 29.3229 20.5652C29.2578 20.5875 29.2144 20.6097 29.1709 20.6321C28.9321 20.7435 28.6933 20.8771 28.4979 20.9886C28.3459 21.0554 28.1939 21.1445 28.0636 21.2114C27.9985 21.2559 27.9116 21.3005 27.8682 21.3228C27.6728 21.4342 27.4774 21.5456 27.3037 21.657C27.1083 21.7684 26.9346 21.8798 26.7826 21.9912C26.6306 22.1026 26.4787 22.1917 26.3484 22.3031C26.3266 22.3254 26.305 22.3254 26.2832 22.3477C26.153 22.4368 26.001 22.5482 25.8707 22.6596C25.8707 22.6596 25.849 22.6819 25.8273 22.7041C25.7188 22.7933 25.6102 22.8823 25.5016 22.9715C25.4582 22.9938 25.4148 23.0383 25.3714 23.0606C25.2628 23.1498 25.1543 23.2612 25.0457 23.3503C25.0239 23.3948 24.9805 23.4171 24.9588 23.4395C24.8286 23.5731 24.6983 23.6845 24.568 23.8182C24.5463 23.8182 24.5463 23.8405 24.5246 23.8627C24.3943 23.9741 24.2641 24.1079 24.1338 24.2415C24.112 24.2638 24.112 24.2861 24.0904 24.2861C23.9818 24.3975 23.8733 24.5089 23.7647 24.6425C23.7213 24.6871 23.6562 24.7317 23.6127 24.7762C23.5042 24.9099 23.3739 25.0436 23.2436 25.1773C23.2219 25.2218 23.1785 25.2441 23.1568 25.2887C22.983 25.467 22.8311 25.6452 22.6574 25.8234C22.6356 25.8457 22.614 25.868 22.5922 25.8903C22.2448 26.2691 21.8757 26.6478 21.4849 26.982C21.0941 27.3385 20.6816 27.6727 20.2691 27.9624C19.8348 28.2743 19.4223 28.5417 18.9663 28.8091C18.5321 29.0541 18.0761 29.277 17.5985 29.4775C17.1425 29.678 16.6648 29.8563 16.1872 30.0122C15.2753 30.2128 14.3417 30.5915 13.5383 30.6584C13.3646 30.6584 13.1692 30.7029 12.9955 30.7252C12.8001 30.7697 12.6264 30.8144 12.4527 30.8589C12.279 30.9257 12.1053 30.9926 11.9316 31.0594C11.7579 31.1263 11.5843 31.2154 11.4105 31.3045C11.2586 31.4159 11.0849 31.505 10.9329 31.6164C10.7809 31.7279 10.6289 31.8615 10.4986 31.9952C10.3467 32.1066 10.1947 32.2626 10.0644 32.3963C9.93414 32.5523 9.80387 32.6859 9.69531 32.8419C9.58676 33.0202 9.45648 33.1761 9.36961 33.3544C9.26105 33.5104 9.1525 33.6886 9.06566 33.8668C8.97875 34.0673 8.89195 34.2456 8.8268 34.4461C8.76168 34.6244 8.69652 34.8249 8.63141 35.0254C8.58801 35.2037 8.54453 35.3819 8.52285 35.5602C8.52285 35.5825 8.50109 35.6047 8.50109 35.627C8.4577 35.8275 8.4577 36.0949 8.43598 36.2286C8.41422 36.3846 8.39258 36.5182 8.39258 36.6742C8.39258 36.7634 8.39258 36.8747 8.41434 36.9639C8.43605 37.1198 8.45769 37.2535 8.50121 37.3872C8.54461 37.5209 8.58809 37.6546 8.65316 37.7883C8.65316 37.8106 8.65316 37.8106 8.65316 37.8106C8.71832 37.9443 8.80516 38.0779 8.89203 38.2116C8.97891 38.3453 9.0657 38.479 9.17426 38.6127C9.28285 38.7241 9.41313 38.8578 9.5434 38.9692C9.67363 39.1029 9.80395 39.2143 9.9559 39.3257C10.477 39.7936 10.6073 39.9495 11.2804 40.3059C11.3889 40.373 11.4975 40.4176 11.6277 40.4844C11.6495 40.4844 11.6711 40.5066 11.6929 40.5066C11.6929 40.5512 11.6929 40.5734 11.7146 40.618C11.7364 40.7961 11.7798 40.9746 11.8232 41.1527C11.8666 41.3531 11.9318 41.5316 11.9969 41.6875C12.062 41.8211 12.1054 41.9547 12.1706 42.0887C12.1923 42.1332 12.214 42.1777 12.2357 42.2C12.3226 42.3781 12.4094 42.534 12.4963 42.6902C12.6048 42.8461 12.7134 43.002 12.822 43.1582C12.9305 43.2918 13.0608 43.4477 13.1911 43.5813C13.3213 43.7152 13.4516 43.8266 13.6036 43.9602C13.6036 43.9602 13.6253 43.9824 13.647 43.9824C13.7772 44.0938 13.9075 44.2055 14.0378 44.2945C14.1898 44.4059 14.3418 44.4949 14.5154 44.584C14.6674 44.673 14.8411 44.7621 15.0148 44.8293C15.1451 44.8961 15.2971 44.9406 15.4491 44.9852C15.4708 45.0074 15.4925 45.0074 15.5359 45.0297C15.6228 45.052 15.7313 45.0742 15.8182 45.0965C15.753 46.2996 15.7313 47.4359 15.9051 47.8371C16.1005 48.2828 17.0558 46.9234 18.0111 45.3637C17.8809 46.9012 17.794 48.7059 18.0111 49.2406C18.25 49.7977 19.5527 48.0598 20.6817 46.1438C36.0755 42.4895 50.1231 53.4074 51.5996 68.8258C51.3172 66.4191 48.4297 65.0824 47.1051 65.4168C46.4539 67.0652 45.3465 69.182 43.566 70.4965C43.7184 69.0262 43.6531 67.5109 43.3492 66.0406C42.8715 68.0902 41.9379 70.0066 40.6566 71.6551C38.5941 71.8113 36.5315 70.7863 35.4459 69.2488C35.359 69.182 35.3373 69.0484 35.2722 68.9594C35.2071 68.8031 35.1419 68.6473 35.0985 68.4914C35.0334 68.3355 34.9899 68.1793 34.9682 68.0234C34.9465 67.8676 34.9465 67.7117 34.9465 67.5332C34.9465 67.4219 34.9465 67.3105 34.9465 67.1992C34.9682 67.043 35.0116 66.8871 35.055 66.7313C35.0984 66.5754 35.1419 66.4191 35.207 66.2633C35.2939 66.1074 35.359 65.9516 35.4676 65.7953C35.8367 64.7258 35.8367 63.857 35.1636 63.3445C35.0333 63.2555 34.903 63.1887 34.7511 63.1219C34.6642 63.0992 34.5557 63.0547 34.4688 63.0324C34.4037 63.0102 34.3602 62.9879 34.2951 62.9656C34.1431 62.9211 33.9911 62.8766 33.8391 62.8543C33.6872 62.8098 33.5352 62.7875 33.3832 62.7875C33.2312 62.7652 33.0575 62.743 32.9055 62.743C32.797 62.743 32.6884 62.7652 32.5798 62.7652C32.4062 62.7652 32.2542 62.7875 32.1022 62.832C31.9502 62.8543 31.7982 62.8766 31.6463 62.9211C31.4943 62.9656 31.3423 63.0105 31.1903 63.0773C31.0383 63.1441 30.908 63.2109 30.7561 63.2777C30.6258 63.3445 30.4955 63.4336 30.3435 63.5004C25.2846 66.8871 28.3026 74.8191 31.7548 77.1141C30.4521 77.3594 29.1277 77.6488 28.7586 77.9387C28.7368 77.9609 28.7152 77.9832 28.7152 77.9832C29.6488 78.5625 30.6258 79.0527 31.6463 79.4758C33.0359 79.9437 34.5123 80.3672 35.1636 80.5453V80.5676C36.9657 80.9465 38.7895 81.0801 40.6352 80.9688C50.2535 80.2781 58.1348 72.7695 59.568 62.8766C59.6113 63.0773 59.6547 63.2555 59.698 63.4559C59.7633 63.857 59.85 64.2805 59.8938 64.7035C59.8938 64.7035 59.8938 64.7035 59.8938 64.7262C59.9371 64.9266 59.9586 65.127 59.9805 65.3055C59.9805 65.35 59.9805 65.3723 59.9805 65.3945C60.0023 65.5949 60.0238 65.7957 60.0238 65.9738C60.0457 66.2188 60.0672 66.4641 60.0672 66.709C60.0672 66.8203 60.0672 66.932 60.0672 67.0656C60.0672 67.177 60.0891 67.3105 60.0891 67.4219C60.0891 67.5559 60.0672 67.6895 60.0672 67.823C60.0672 67.9344 60.0672 68.0461 60.0672 68.1352C60.0672 68.291 60.0457 68.4246 60.0457 68.5809C60.0457 68.6699 60.0457 68.759 60.0238 68.8703C60.0238 69.0262 60.002 69.1824 60.002 69.3605C59.9801 69.4273 59.9801 69.4941 59.9801 69.5609C59.9586 69.7395 59.9367 69.8953 59.9152 70.0734C59.9152 70.1402 59.9152 70.207 59.8934 70.2742C59.8715 70.4969 59.8281 70.6973 59.8066 70.9203V70.9426V70.9648C59.7633 71.1652 59.7195 71.3883 59.6762 71.5887C59.6762 71.6109 59.6762 71.6332 59.6762 71.6555C59.6328 71.8559 59.5895 72.0566 59.5461 72.257C59.5461 72.2793 59.5242 72.3238 59.5242 72.3461C59.4809 72.5469 59.4375 72.7473 59.3723 72.948C59.3723 72.9703 59.3723 72.9922 59.3723 73.0148C59.307 73.2375 59.2418 73.4379 59.1984 73.6387C59.177 73.6609 59.177 73.6832 59.177 73.6832C59.1117 73.9059 59.0465 74.1285 58.9813 74.3516C58.8945 74.5742 58.8293 74.775 58.7426 74.9977C58.6559 75.2203 58.5906 75.4434 58.5039 75.6437C58.4168 75.8668 58.3301 76.0672 58.2434 76.2898H58.2215C58.1344 76.4906 58.0477 76.7133 57.9391 76.9137C57.9172 76.9805 57.8957 77.0254 57.8738 77.0699C57.8523 77.0922 57.8523 77.1145 57.8305 77.1367C56.4191 80.0555 54.3352 82.6176 51.7297 84.623C51.5559 84.7344 51.382 84.868 51.2086 85.002C51.1652 85.0461 51.1 85.0688 51.0566 85.1133C50.9043 85.2246 50.7523 85.3359 50.5789 85.4473L50.6438 85.5812H50.6656C50.9695 85.5367 51.2734 85.4918 51.5777 85.4473H51.5992C52.1637 85.3582 52.7285 85.2469 53.293 85.1355C53.4449 85.1133 53.6184 85.0688 53.7707 85.0242C53.8789 85.0016 53.966 84.9797 54.0746 84.957C54.2266 84.9348 54.3785 84.8902 54.5305 84.868C54.6606 84.8234 54.791 84.8012 54.9211 84.7566C57.0926 84.2219 59.1984 83.4867 61.2176 82.6176C57.7656 87.4527 53.141 91.352 47.7348 93.9141C50.2316 93.7359 52.7285 93.3125 55.1383 92.5996C63.8883 89.948 71.2488 83.9098 75.6563 75.7773C74.766 80.9242 72.7684 85.8262 69.8156 90.1039C71.9219 88.6781 73.8543 87.0293 75.6129 85.1578C80.4762 79.9441 83.668 73.3266 84.7535 66.2191C85.4918 69.7395 85.709 73.3711 85.3832 76.9582C101.059 54.5215 86.6859 31.2603 80.6719 25.133C80.65 25.0885 80.6285 25.0662 80.6285 25.0216C80.6066 25.0439 80.6066 25.0439 80.6066 25.0662C80.6066 25.0439 80.6066 25.0439 80.5848 25.0216C80.5848 25.289 80.5629 25.5564 80.5414 25.8238C80.4762 26.3362 80.4113 26.8264 80.3242 27.3166C80.2156 27.8068 80.0856 28.2969 79.9551 28.7871C79.8031 29.255 79.6297 29.7452 79.434 30.2131C79.2387 30.6587 79.0215 31.1266 78.7828 31.5722C78.5438 31.9955 78.2832 32.4412 78.0012 32.8422C77.7188 33.2655 77.4149 33.6666 77.1109 34.0454C76.7852 34.4464 76.4379 34.8029 76.0906 35.1594C75.8734 35.36 75.6777 35.5382 75.4609 35.7164C75.2871 35.8724 75.1352 36.0061 74.9613 36.1621C74.5707 36.474 74.1797 36.7636 73.7457 37.031C73.3332 37.2984 72.8988 37.5657 72.4645 37.7886C72.0086 38.0114 71.5527 38.2119 71.0969 38.4124C70.6406 38.5907 70.1629 38.7466 69.6856 38.8804C69.2078 39.014 68.7082 39.1254 68.2309 39.2145C67.7313 39.3037 67.232 39.3482 66.7543 39.3928C66.407 39.4151 66.0594 39.4373 65.7121 39.4373C65.2129 39.4373 64.7133 39.3928 64.2355 39.3482C63.7363 39.3036 63.2371 39.2368 62.7594 39.1254C62.2598 39.0362 61.7824 38.9025 61.3047 38.7466H61.2828C61.7606 38.7021 62.2383 38.6574 62.716 38.5683C63.2152 38.4792 63.693 38.3678 64.1707 38.2341C64.6481 38.1004 65.1258 37.9445 65.5816 37.7662C66.0594 37.588 66.5152 37.3652 66.9496 37.1423C67.4055 36.9195 67.818 36.6745 68.2523 36.4071C68.6648 36.1174 69.0773 35.8278 69.4684 35.5159C69.859 35.2039 70.2281 34.8697 70.5754 34.5132C70.9445 34.179 71.2703 33.8002 71.5961 33.4214C71.9219 33.0204 72.2258 32.6193 72.5078 32.2183C72.5512 32.1514 72.5949 32.0623 72.6383 31.9955C72.8555 31.639 73.0723 31.2825 73.268 30.926C73.5066 30.4804 73.7238 30.0348 73.9191 29.5669C74.1145 29.0989 74.2883 28.6311 74.4402 28.1409C74.5922 27.673 74.7008 27.1828 74.8094 26.6926C74.8965 26.1802 74.9832 25.69 75.0266 25.1998C75.0699 24.6873 75.1133 24.1749 75.1133 23.6847C75.1133 23.3282 75.0918 22.9717 75.0699 22.6152C75.0266 22.1028 74.9613 21.6126 74.8965 21.1224C74.8094 20.61 74.7008 20.1198 74.5707 19.6296C74.4188 19.1617 74.2668 18.6715 74.093 18.2036C73.9191 17.7357 73.7023 17.2678 73.4852 16.8222C73.2461 16.3766 73.0074 15.931 72.7469 15.5077C72.4645 15.0843 72.1824 14.6832 71.8785 14.2822C71.5527 13.9034 71.227 13.5246 70.8797 13.1459C70.7059 12.9676 70.5106 12.7671 70.3152 12.5889C69.3379 11.809 68.3176 11.0737 67.2973 10.4053C67.1453 10.3162 67.0149 10.2494 66.8629 10.1825C66.1465 9.71461 65.4734 9.46937 64.8004 9.24656Z" fill="#E0234E" />
      </svg>
  )
}

export default NestJS