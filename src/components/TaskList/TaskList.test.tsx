import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TaskList from "./TaskList";

describe("TaskList component", () => {
  //testing the ui snapshot
  test("TaskList renders correctly", () => {
    const renderedComponent = renderer.create(<TaskList />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test("should render TaskDisplay components with correct props", () => {
    render(<TaskList />);
    const completedTasks = screen.getByText("Buy new sweatshirt");
    const pendingTasks = screen.getByText("Read an article");

    expect(completedTasks).toBeInTheDocument();
    expect(pendingTasks).toBeInTheDocument();
  });
});
