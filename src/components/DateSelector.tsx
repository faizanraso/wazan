import React, { use, useState } from "react";

export default function DateSelector() {
  let date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let today = currentYear + "-" + currentMonth + "-" + currentDay;

  const [datePickerDate, setDatePickerDate] = useState(today);

  return (
    <>
      <input
        className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        type="date"
        value={datePickerDate}
        onChange={(e) => setDatePickerDate(e.target.value)}
      />
    </>
  );
}
