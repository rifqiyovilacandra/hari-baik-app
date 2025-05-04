function JournalForm({ selectedDate }) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
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

  return (
    <div className="flex flex-col justify-between h-full">
      <textarea
        className="w-full h-full p-4 text-black rounded-xl resize-none"
        placeholder="Tulis catatan harimu di sini..."
      />
      <div className="flex justify-between items-center mt-4 px-2 py-3 border-t border-white/10">
        <div>
          <p className="text-sm text-gray-400">{days[selectedDate.getDay()]}</p>
          <p className="text-lg font-bold">
            {selectedDate.getDate()} {months[selectedDate.getMonth()]},{" "}
            {selectedDate.getFullYear()}
          </p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-xl">
          Simpan
        </button>
      </div>
    </div>
  );
}

export default JournalForm;
