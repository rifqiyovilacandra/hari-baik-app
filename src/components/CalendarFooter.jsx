import { useState } from "react";

function CalendarFooter({ selectedDate, setSelectedDate }) {
  const [viewYear, setViewYear] = useState(selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate.getMonth());

  const months = [
    "JANUARI",
    "FEBRUARI",
    "MARET",
    "APRIL",
    "MEI",
    "JUNI",
    "JULI",
    "AGUSTUS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DESEMBER",
  ];

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const days = [...Array(daysInMonth)].map((_, i) => {
    const date = new Date(viewYear, viewMonth, i + 1);
    return (
      <button
        key={i}
        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg text-sm md:text-base 
          ${
            date.toDateString() === selectedDate.toDateString()
              ? "bg-white text-black"
              : "bg-gray-600 text-white hover:bg-gray-500"
          }`}
        onClick={() => setSelectedDate(date)}
      >
        {i + 1}
      </button>
    );
  });

  return (
    <div className="bg-gray-800 rounded-2xl p-4 flex flex-col gap-4">
      {/* Pilihan Bulan & Tahun */}
      <div className="flex flex-wrap gap-2">
        <select
          value={viewMonth}
          onChange={(e) => setViewMonth(parseInt(e.target.value))}
          className="bg-gray-700 text-white p-2 rounded"
        >
          {months.map((month, idx) => (
            <option key={month} value={idx}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={viewYear}
          onChange={(e) => setViewYear(parseInt(e.target.value))}
          className="bg-gray-700 text-white p-2 rounded"
        >
          {Array.from({ length: 20 }, (_, i) => {
            const year = new Date().getFullYear() - 10 + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      {/* Kalender Hari */}
      <div className="grid grid-cols-7 sm:grid-cols-7 md:grid-cols-7 gap-2">
        {days}
      </div>
    </div>
  );
}

export default CalendarFooter;
