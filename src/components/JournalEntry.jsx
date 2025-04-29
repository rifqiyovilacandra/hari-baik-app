export default function JournalEntry({ data }) {
  return (
    <div className="bg-white p-4 rounded shadow mt-2">
      <p>
        <strong>Judul:</strong> {data.title}
      </p>
      <p>
        <strong>Pelajaran:</strong> {data.lesson}
      </p>
      <p>
        <strong>Mood:</strong> {data.mood}
      </p>
    </div>
  );
}
