import "./style.scss";
import { useState, useEffect } from "react";

const SvgCircle = ({
  className,
  done,
  max,
  radius,
  stroke,
  strokeWidth,
  circleBgColor,
  children,
}) => {
  const [width, setWindowWidth] = useState(0)

  useEffect(() => { 
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => 
      window.removeEventListener('resize',updateDimensions);
  }, [])
  if (width < 576) radius = 160;
  const size = (radius + strokeWidth) * 2;
  const length = Math.ceil(2 * radius * Math.PI);
  let remainingLength = 0;
  if (max !== 0) {
    remainingLength = length - Math.ceil(2 * radius * Math.PI) * (done / max);
  }


  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
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
            fill="rgba(0, 0, 0, 0)"
          />
          <circle
            className="circle--bg"
            r={radius}
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            stroke="rgba(0, 0, 0, .1)"
            strokeLinecap="round"
            strokeWidth={strokeWidth}
            fill={circleBgColor}
          />
        </g>
      </svg>
      <div className="textContent">{children}</div>
    </div>
  );
};

SvgCircle.defaultProps = {
  done: 0,
  max: 24,
  radius: 240,
  stroke: "#00A7FF",
  strokeWidth: 20,
};

export default SvgCircle;
