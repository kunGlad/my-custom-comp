// packages/components/Button/index.tsx
import React, { JSX } from "react";

interface ButtonProps {
  children?: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

export default Button;
