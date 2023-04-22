import TodoContainer from "./components/TodoContainer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <TodoContainer />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
