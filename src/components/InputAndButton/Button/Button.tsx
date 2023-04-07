import { ButtonProps } from "./Button.types";

function Button({ optionHandler }: ButtonProps) {
  return (
    <button
      className="absolute bottom-[calc(11vh-30px)] left-[calc(50vw-38px)] rounded-full bg-lightGreen p-7 opacity-95"
      onClick={optionHandler}
    >
      <img src="/assets/plus.png" alt="plus" className="opacity-40 w-6" />
    </button>
  );
}

export default Button;
