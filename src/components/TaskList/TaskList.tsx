import useLocalStorage from "../../hooks/useLocalStorage";
import ToggledElement from "../InputAndButton/ToggledElement";
import TaskDisplay from "../DisplayTasks/TaskDisplay";
import toast from "react-hot-toast";

type ObjStructure = {
  date: string;
  completed: string[];
  pending: string[];
};

const initialObj: ObjStructure = {
  date: new Date().toLocaleDateString(),
  completed: [],
  pending: [],
};

function TaskList() {
  const [obj, setObj] = useLocalStorage("todo", initialObj);

  //adding new task in the pending key of obj
  const newTask = (value: string): void => {
    setObj({ ...obj, pending: [...obj.pending, value] });
    toast.success("New task added successfully!");
  };

  //moving task in the completed and removing from pending in obj
  const addToCompleted = (value: string): void => {
    const newPendingArr = obj.pending.filter(pendingVal => {
      return pendingVal !== value;
    });
    setObj({
      ...obj,
      pending: newPendingArr,
      completed: [...obj.completed, value],
    });
    toast.success("Hurray, Task Completed !");
  };

  //deleting the task in the completed key of obj
  const deleteTheTask = (value: string): void => {
    const newCompletedArr = obj.completed.filter(completedVal => {
      return completedVal !== value;
    });
    setObj({
      ...obj,
      completed: newCompletedArr,
    });
    toast.error("Task has been Deleted !");
  };

  return (
    <>
      <div className="h-[100%] overflow-auto ">
        <TaskDisplay
          actionOnTask={deleteTheTask}
          list={obj.completed}
          type="completed"
        />
        <TaskDisplay
          actionOnTask={addToCompleted}
          list={obj.pending}
          type="pending"
        />
        {obj?.pending?.length <= 0 && obj?.completed?.length <= 0 && (
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
