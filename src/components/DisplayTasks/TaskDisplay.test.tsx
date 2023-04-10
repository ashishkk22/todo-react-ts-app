import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TaskDisplay from "./TaskDisplay";

//mock tasks
const taskList = [
  "Begin promotional phase",
  "Read an article",
  "Begin QA for the product",
];

describe("TaskDisplay", () => {
  //testing the ui snapshot
  test("TaskDisplay renders correctly", () => {
    const renderedComponent = renderer
      .create(<TaskDisplay list={taskList} type="pending" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  //renders the tasks
  test("renders a tasks list", () => {
    render(<TaskDisplay list={taskList} type="completed" />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(taskList.length);
  });
});
