import { useState, useEffect } from "react";
import Header from "./components/Header";
import JournalEntry from "./components/JournalEntry";
import JournalForm from "./components/JournalForm";
import CalendarFooter from "./components/CalendarFooter";

function App() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-based
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [journalData, setJournalData] = useState({});

  const getDateKey = (year, month, day) => `${year}-${month + 1}-${day}`;

  const selectedDateKey = getDateKey(currentYear, currentMonth, selectedDay);
  const currentEntry = journalData[selectedDateKey];

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("hari-baik-journals");
    if (saved) {
      setJournalData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("hari-baik-journals", JSON.stringify(journalData));
  }, [journalData]);

  const handleSaveEntry = (title, lesson, mood) => {
    const newData = {
      ...journalData,
      [selectedDateKey]: { title, lesson, mood },
    };
    setJournalData(newData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-yellow-50 p-4">
      <div>
        <Header date={selectedDateKey} />
        {currentEntry ? (
          <JournalEntry data={currentEntry} />
        ) : (
          <JournalForm onSave={handleSaveEntry} />
        )}
      </div>

      <CalendarFooter
        currentYear={currentYear}
        currentMonth={currentMonth}
        onSelectDate={(day) => setSelectedDay(day)}
      />
    </div>
  );
}

export default App;
