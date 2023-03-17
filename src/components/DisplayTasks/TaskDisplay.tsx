import React from "react";

type TaskDisplayProps = {
  actionOnTask: (value: string) => void;
  list: string[];
  type: "pending" | "completed";
};

const TaskDisplay = ({ actionOnTask, list, type }: TaskDisplayProps) => {
  const btnClickHandler = (value: string) => {
    actionOnTask(value);
  };

  return (
    <>
      {list?.map((value, idx) => {
        return (
          <div
            className="flex justify-between items-center mt-8"
            key={value + idx}
          >
            <div
              className={`mx-2 break-words text-justify flex-1 max-w-[80%] text-lg ${
                type === "completed" ? "text-textComplete" : ""
              }`}
            >
              {value}
            </div>
            <button
              className="w-9"
              onClick={() => {
                btnClickHandler(value);
              }}
            >
              <img src={`/assets/task-${type}.png`} alt="completed" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TaskDisplay;
