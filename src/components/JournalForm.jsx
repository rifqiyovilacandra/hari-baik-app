import { useState } from "react";

export default function JournalForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [lesson, setLesson] = useState("");
  const [mood, setMood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && lesson && mood) {
      onSave(title, lesson, mood);
      setTitle("");
      setLesson("");
      setMood("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 mt-4 rounded shadow">
      <input
        type="text"
        placeholder="Judul"
        className="block w-full mb-2 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Pelajaran Hari Ini"
        className="block w-full mb-2 p-2 border rounded"
        value={lesson}
        onChange={(e) => setLesson(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mood (😊 / 😔)"
        className="block w-full mb-2 p-2 border rounded"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-white w-full"
      >
        Simpan Catatan
      </button>
    </form>
  );
}
