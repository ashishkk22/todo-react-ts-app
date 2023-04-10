import React from "react";

export const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
export const monthArr = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

class TodayDetail extends React.Component {
  //getting today's detail and returning in obj
  dateReturn = () => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = monthArr[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const day = days[currentDate.getDay()];
    return {
      date,
      month,
      year,
      day,
    };
  };

  render(): React.ReactNode {
    const { date, month, year, day } = this.dateReturn();

    return (
      <div className="flex justify-between my-4 mt-12 items-center">
        <div className="flex">
          <div className="text-5xl mr-3 font-medium">{date}</div>
          <div className="flex flex-col">
            <div className="font-medium">{month}</div>
            {year}
          </div>
        </div>
        <div className="font-medium">{day}</div>
      </div>
    );
  }
}

export default TodayDetail;
