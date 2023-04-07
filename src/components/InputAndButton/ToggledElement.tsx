import { useState, useCallback } from "react";
import InputField from "./InputField/InputField";
import Button from "./Button/Button";

type ToggledElementProps = {
  addNewTask: (value: string) => void;
};

const ToggledElement = ({ addNewTask }: ToggledElementProps) => {
  const [inputActive, setInputActive] = useState(false);

  const inputShowHandler = useCallback(() => {
    setInputActive(state => (state ? false : true));
  }, []);

  return (
    <>
      {inputActive ? (
        <InputField optionHandler={inputShowHandler} addNewTask={addNewTask} />
      ) : (
        <Button optionHandler={inputShowHandler} />
      )}
    </>
  );
};

export default ToggledElement;
