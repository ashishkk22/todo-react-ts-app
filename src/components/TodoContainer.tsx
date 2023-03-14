import TodayDetail from "./TodayDetail";
import TaskList from "./TaskList";

function TodoContainer() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-textLight">
      <div className="static rounded overflow-hidden shadow-lg bg-white w-4/5 sm:w-1/2 lg:w-1/3 xl:w-1/4 px-10 h-[75vh] flex flex-col">
        <TodayDetail />
        <TaskList />
      </div>
    </div>
  );
}
export default TodoContainer;
