import React from "react";
import { TaskDisplayProps } from "./TaskDisplay.types";

const TaskDisplay = ({ list, type }: TaskDisplayProps) => {
  return (
    <>
      <ul>
        {list?.map((value, idx) => {
          return (
            <li
              className="flex justify-between items-center mt-8"
              key={value + idx}
            >
              <div
                className={`break-words text-justify flex-1 mx-2 max-w-[80%] text-lg ${
                  type === "completed" ? "text-textComplete" : ""
                }`}
              >
                {value}
              </div>
              <button className="w-9">
                <img src={`/assets/task-${type}.png`} alt="completed" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskDisplay;
