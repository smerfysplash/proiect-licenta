import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInMonths, addMonths, differenceInDays } from "date-fns";

const CalendarCalculator = ({ onResult }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const pluralize = (value, singular, plural) => {
    return `${value} ${value === 1 ? singular : plural}`;
  };

  const calculateDifference = () => {
    if (!selectedDate) return;

    const today = new Date();
    const totalMonths = differenceInMonths(today, selectedDate);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const datePlusYearsAndMonths = addMonths(selectedDate, years * 12 + months);
    const days = differenceInDays(today, datePlusYearsAndMonths);

    let parts = [];

    if (years > 0) parts.push(pluralize(years, "an", "ani"));
    if (months > 0) parts.push(pluralize(months, "lună", "luni"));
    if (days > 0) parts.push(pluralize(days, "zi", "zile"));

    const message =
      parts.length === 1
        ? `${parts[0].startsWith("1 ") ? "A trecut" : "Au trecut"} ${parts[0]}.`
        : parts.length > 1
        ? `Au trecut ${parts.join(" și ")}.`
        : "Data aleasă este chiar astăzi.";

    // Trimite rezultatul în App.jsx direct când data este selectată
    onResult(message);
  };

  // Folosim useEffect pentru a calcula automat atunci când data se schimbă
  React.useEffect(() => {
    calculateDifference();
  }, [selectedDate]);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h2>De cât timp ati observat simptomele?</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        isClearable
        placeholderText="Selectează o dată"
      />
    </div>
  );
};

export default CalendarCalculator;
