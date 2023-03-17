import ToggledElement from "../InputAndButton/ToggledElement";
import TaskDisplay from "../DisplayTasks/TaskDisplay";

const tempObj = {
  completed: ["Buy new sweatshirt", "Begin promotional phase"],
  pending: [
    "Read an article",
    "Try not to sleep",
    "Watch 'Sherlock'",
    "Begin QA for the product",
    "Go for a walk",
  ],
};

function TaskList() {
  function newTask() {}

  return (
    <>
      <div className="h-[100%] overflow-auto ">
        <TaskDisplay list={tempObj.completed} type="completed" />
        <TaskDisplay list={tempObj.pending} type="pending" />
        {tempObj.pending.length <= 0 && tempObj.completed.length <= 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-xl text-center">Nothing Left in the List!</div>
            <img
              src="/assets/hurray.jpg"
              alt="hurray"
              className="w-36 opacity-90"
            />
          </div>
        )}
      </div>
      <ToggledElement addNewTask={newTask} />
    </>
  );
}

export default TaskList;
