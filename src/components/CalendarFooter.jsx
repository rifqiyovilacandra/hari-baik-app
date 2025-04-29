export default function CalendarFooter({
  currentYear,
  currentMonth,
  onSelectDate,
}) {
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  return (
    <div className="mt-8">
      <h3 className="text-center font-semibold mb-2">📅 Pilih Tanggal</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            className="bg-white p-2 rounded shadow hover:bg-yellow-100"
            onClick={() => onSelectDate(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
