import React, { useEffect, useState } from "react";
import { InputFieldProps } from "./InputField.types";

function InputField({ optionHandler, addNewTask }: InputFieldProps) {
  const [value, setValue] = useState("");

  //on submit adding task and clearing the value of inputField
  const formSubmitHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(value);
    setValue("");
  };

  //on escape keyPress toggling the input and btn
  useEffect(() => {
    function keyPressHandler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        optionHandler();
      }
    }
    document.addEventListener("keydown", keyPressHandler);

    return () => document.removeEventListener("keydown", keyPressHandler);
  }, [optionHandler]);

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        className="w-full my-4 text-textLight bg-white focus:outline-0"
        placeholder="Enter the Task !"
        value={value}
        onChange={e => setValue(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default InputField;
