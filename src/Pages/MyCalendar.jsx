import React, { useState } from "react";
import Calendar from "react-calendar";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="md:w-1/4 mx-auto">
        <Calendar />
      </div>
    </div>
  );
};

export default MyCalendar;
