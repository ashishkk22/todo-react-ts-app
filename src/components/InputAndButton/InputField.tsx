import React from "react";

type InputFieldProps = {
  optionHandler: () => void;
  addNewTask: (value: string) => void;
};

function InputField({ optionHandler, addNewTask }: InputFieldProps) {
  const inputHandler = (
    e: React.KeyboardEvent<HTMLInputElement> & {
      target: HTMLInputElement;
    }
  ) => {
    //on escape toggling the btn to input field or vice versa
    if (e.key === "Escape") {
      optionHandler();
    }

    //on key Enter calling the newTask fn of parent component
    if (e.key === "Enter") {
      if (e.target.value === "") {
        return;
      }
      addNewTask(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <input
      className="w-full my-4 text-textLight bg-white focus:outline-0"
      placeholder="Enter the Task !"
      onKeyDown={inputHandler}
      autoFocus
    />
  );
}

export default InputField;
