import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import TodoContainer from "./TodoContainer";

describe("TodoContainer component", () => {
  //testing the ui snapshot
  test("TodoContainer renders correctly", () => {
    const renderedComponent = renderer.create(<TodoContainer />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
