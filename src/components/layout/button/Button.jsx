import React from "react";

const STYLES = [
  "btn--solid--primary",
  "btn--solid--warning",
  "btn--solid--danger",
  "btn--solid--success",
  "btn--outline--primary",
  "btn--outline--warning",
  "btn--outline--danger",
  "btn--outline--success",
];

const SIZES = ["btn--medium", "btn--big"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
