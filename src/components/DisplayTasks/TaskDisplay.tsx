import React from "react";

type TaskDisplayProps = {
  actionOnTask: (value: string) => void;
  list: string[];
  type: "pending" | "completed";
};

const TaskDisplay = React.forwardRef<HTMLUListElement, TaskDisplayProps>(
  ({ actionOnTask, list, type }, ref) => {
    const btnClickHandler = (value: string) => {
      actionOnTask(value);
    };

    return (
      <ul ref={ref}>
        {list?.map((value, idx) => {
          return (
            <li
              className="flex items-center justify-between mt-8"
              key={value + idx}
            >
              <div
                className={`break-words text-justify flex-1 mx-2 max-w-[80%] text-lg ${
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
            </li>
          );
        })}
      </ul>
    );
  }
);
export default TaskDisplay;
