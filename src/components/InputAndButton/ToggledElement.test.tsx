import { render, fireEvent, screen } from "@testing-library/react";
import ToggledElement from "./ToggledElement";
import "@testing-library/jest-dom";
describe("ToggledElement", () => {
  test("renders a button by default", () => {
    render(<ToggledElement addNewTask={() => {}} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("toggles between button and input field when clicked", () => {
    render(<ToggledElement addNewTask={() => {}} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const inputElement = screen.getByPlaceholderText("Enter the Task !");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).not.toBeInTheDocument();
  });
});
