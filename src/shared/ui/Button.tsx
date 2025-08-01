import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isActive = false,
  onClick,
  className = "",
  disabled = false,
}) => {
  const buttonClass = ` ${
    isActive ? "button button--active" : "button"
  } ${className}`;

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
