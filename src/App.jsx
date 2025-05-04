import { useState } from "react";
import JournalForm from "./components/JournalForm";
import CalendarFooter from "./components/CalendarFooter";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen w-screen bg-red-900 text-white flex flex-col md:flex-row items-stretch p-4 gap-4">
      <div className="flex-1 bg-gray-800 rounded-2xl p-4 flex flex-col justify-between">
        <JournalForm selectedDate={selectedDate} />
      </div>
      <div className="md:w-1/3">
        <CalendarFooter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
}

export default App;
