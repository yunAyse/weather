import React from "react";
import "./Days.css";
import { addDays, format } from "date-fns";

function Days({ handleClickDay }) {
  const date = new Date();
  // console.log(format(date, 'EEE'));

  let days = [];
  days.push(date);
  for (let i = 1; i < 5; i = i + 1) {
    days.push(addDays(date.i));
  }

  return (
    <>
      <a href="#" className="clickedDay" onClick={handleClickDay}>
        Thursday
      </a>
      <a href="#" onClick={handleClickDay}>
        Friday
      </a>
      <a href="#" onClick={handleClickDay}>
        Saturday
      </a>
      <a href="#" onClick={handleClickDay}>
        Sunday
      </a>
      <a href="#" onClick={handleClickDay}>
        Monday
      </a>
    </>
  );
}

export default Days;
