export const ArrowSvg = (props) => {
    return (
    <svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M2.182 20.12c-.549 0-1.001-.477-1.063-1.093l-.007-.144v-8.047c0-2.313 1.566-4.202 3.538-4.326l.205-.006H18.85l-3.52-4.076c-.386-.447-.416-1.149-.09-1.635l.09-.116c.385-.446.991-.48 1.411-.103l.1.103 5.348 6.19c.038.043.073.09.104.138l.076.137.058.14.037.13.027.146.008.072.004.112-.003.093-.019.155-.032.138-.047.138-.055.12-.069.114-.088.117-5.348 6.19c-.418.483-1.095.483-1.513 0-.385-.447-.415-1.149-.089-1.635l.09-.116 3.52-4.076H4.855c-.834 0-1.519.736-1.597 1.678l-.007.178v8.047c0 .683-.479 1.238-1.07 1.238Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="rotate(180 11.484 11.318)"
          d="M0 0h22.321v22.321H0z"
        />
      </clipPath>
    </defs>
  </svg>
    )
}