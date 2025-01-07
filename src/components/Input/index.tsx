import { InputHTMLAttributes } from "react";
import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  variant = "primary",
  ...props
}: InputProps) => {
  return (
    <input
      type="text"
      className={Styles[variant]}
      {...props}
    />
  );
};

export default Input;
