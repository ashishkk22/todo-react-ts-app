import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "./Button";
import user from "@testing-library/user-event";

describe("Button", () => {
  //testing the ui snapshot
  test("Button renders correctly", () => {
    const renderedComponent = renderer
      .create(<Button optionHandler={() => {}} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  //events with btn are handled
  test("Button handlers are called", async () => {
    user.setup();
    const optionHandler = jest.fn();
    render(<Button optionHandler={optionHandler} />);
    const addButton = screen.getByRole("button", {
      name: /plus/i,
    });
    await user.dblClick(addButton);
    expect(optionHandler).toHaveBeenCalledTimes(2);
  });
});
