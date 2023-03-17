import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type InputFieldProps = {
  optionHandler: () => void;
  addNewTask: (value: string) => void;
};

function InputField({ optionHandler, addNewTask }: InputFieldProps) {
  const [value, setValue] = useState("");

  //on submit adding task and clearing the value of inputField
  const formSubmitHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    //if empty throw error else add the task and empty the value
    if (value === "") {
      toast.error("Task can't be empty !");
      return;
    }
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
