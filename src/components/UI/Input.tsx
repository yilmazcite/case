import classes from "../UI/Input.module.scss";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className={classes.Input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
