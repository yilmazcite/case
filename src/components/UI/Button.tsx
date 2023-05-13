import classes from "./Button.module.scss";

export enum ButtonColor {
  Green = "Green",
  Red = "Red",
}

interface ButtonProps {
  children: string;
  color: ButtonColor;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <button
      className={[classes.Button, classes[color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
