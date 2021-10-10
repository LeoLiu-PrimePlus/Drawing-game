import "./style.scss";

const SvgCircle = ({
  className,
  done,
  max,
  radius,
  stroke,
  strokeWidth,
  children,
}) => {
  const size = (radius + strokeWidth) * 2;
  const length = Math.ceil(2 * radius * Math.PI);
  let remainingLength = 0;
  if (max !== 0) {
    remainingLength = length - Math.ceil(2 * radius * Math.PI) * (done / max);
  }

  return (
    <div className="svgContainer">
      <svg
        className={className}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle
            className="circle"
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            stroke={stroke}
            strokeDasharray={length}
            strokeDashoffset={remainingLength}
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            className="circle--bg"
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            stroke="rgba(0, 0, 0, .1)"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            fill="#00A7FF"
          />
        </g>
      </svg>
      <div className="textContent fs-1">{children}</div>
    </div>
  );
};

SvgCircle.defaultProps = {
  done: 0,
  max: 24,
  radius: 180,
  stroke: "#00A7FF",
  strokeWidth: 8,
};

export default SvgCircle;
