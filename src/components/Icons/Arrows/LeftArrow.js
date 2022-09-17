import React from "react";
import PropTypes from "prop-types";
import { STROKE } from "constant";

export default function LeftArrow({ width, height, stroke = STROKE }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L1.70711 7L7.35355 12.6464C7.54882 12.8417 7.54882 13.1583 7.35355 13.3536C7.15829 13.5488 6.84171 13.5488 6.64645 13.3536L0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447Z"
        fill={stroke}
      />
    </svg>
  );
}

LeftArrow.defaultProps = {
  width: "8",
  height: "14",
};

LeftArrow.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
};
