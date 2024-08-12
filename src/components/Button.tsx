import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export default Button;
