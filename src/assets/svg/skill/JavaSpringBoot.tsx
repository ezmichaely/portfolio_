import { SvgProps } from "@/types"

const JavaSpringBoot = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      <rect x="0.787109" y="0.015625" width="100" height="100" rx={radius} fill="#1A1F33" />
      <path d="M82.6406 67.184C73.0254 79.9954 52.4852 75.6707 39.3165 76.2926C39.3165 76.2926 36.9853 76.4223 34.6372 76.809C34.6372 76.809 35.5251 76.4301 36.6574 76.0399C45.9066 72.8414 50.2773 72.1989 55.8973 69.3122C66.4566 63.9028 76.966 52.1207 79.1043 39.8809C75.0848 51.6528 62.8609 61.7844 51.7305 65.8985C44.1117 68.7098 30.3347 71.4457 30.3327 71.4469C30.3392 71.4567 29.7837 71.1586 29.7759 71.152C20.4064 66.5934 20.136 46.3004 37.1529 39.759C44.6141 36.8891 51.7504 38.4655 59.816 36.5457C68.4184 34.5004 78.3816 28.0524 82.4313 19.6223C86.9711 33.088 92.4246 54.1551 82.6406 67.184ZM82.8078 15.4496C81.6633 18.1692 80.266 20.6198 78.6559 22.8118C71.5672 15.5367 61.673 11.0039 50.7367 11.0039C29.2242 11.0039 11.7246 28.5055 11.7246 50.0141C11.7246 61.2895 16.5375 71.4586 24.2107 78.5868L25.065 79.3434C23.6384 78.1801 23.419 76.0852 24.5753 74.6571C25.7386 73.2285 27.8357 73.0071 29.263 74.1641C30.6941 75.3235 30.9122 77.4239 29.7534 78.8543C28.599 80.2856 26.4981 80.5016 25.0689 79.3469L25.6503 79.8618C32.4377 85.5766 41.1871 89.0286 50.7367 89.0286C71.2992 89.0286 88.184 73.0266 89.6293 52.8293C90.6996 42.9403 87.7789 30.3831 82.8078 15.4496Z" fill="#5FB832" />
    </svg>
  )
}

export default JavaSpringBoot