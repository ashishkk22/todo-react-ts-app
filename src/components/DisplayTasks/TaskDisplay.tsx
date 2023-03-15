type TaskDisplayProps = {
  list: string[];
  type: "pending" | "completed";
};

const TaskDisplay = ({ list, type }: TaskDisplayProps) => {
  return (
    <>
      {list?.map((value, idx) => {
        return (
          <div
            className="flex justify-between items-center mt-8"
            key={value + idx}
          >
            <div
              className={`break-words text-justify flex-1 mr-2 max-w-[80%] text-lg ${
                type === "completed" ? "text-textComplete" : ""
              }`}
            >
              {value}
            </div>
            <button className="w-9">
              <img src={`/assets/task-${type}.png`} alt="completed" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default TaskDisplay;
