import { render, screen } from "@testing-library/react";
import TodayDetail, { days, monthArr } from "./TodayDetail";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

describe("TodayDetail component", () => {
  //testing the ui snapshot
  test("TodaysDetail renders correctly", () => {
    const renderedComponent = renderer.create(<TodayDetail />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  test("renders today's date, month, year and day", () => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = monthArr[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const day = days[currentDate.getDay()];

    render(<TodayDetail />);
    const dateElement = screen.getByText(date);
    const monthElement = screen.getByText(month);
    const yearElement = screen.getByText(year);
    const dayElement = screen.getByText(day);

    expect(dateElement).toBeInTheDocument();
    expect(monthElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(dayElement).toBeInTheDocument();
  });
});
