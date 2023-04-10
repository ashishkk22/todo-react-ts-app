import { render, renderHook, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import user from "@testing-library/user-event";
import InputField from "./InputField";

describe("InputField", () => {
  //testing the ui snapshot
  test("InputField renders correctly", () => {
    const renderedComponent = renderer
      .create(<InputField optionHandler={() => {}} addNewTask={() => {}} />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  //events with btn are handled
  test("should add and remove event listener on mount and unmount", () => {
    const addEventListenerMock = jest.spyOn(document, "addEventListener");
    const removeEventListenerMock = jest.spyOn(document, "removeEventListener");

    const { unmount } = render(
      <InputField optionHandler={() => {}} addNewTask={() => {}} />
    );

    expect(addEventListenerMock).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function)
    );

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function)
    );
  });
});
