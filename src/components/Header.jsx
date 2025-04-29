export default function Header({ date }) {
  return (
    <div className="text-center mb-4">
      <h1 className="text-2xl font-bold">🌞 Hari Baik</h1>
      {date && <p className="text-sm text-gray-600">Tanggal: {date}</p>}
    </div>
  );
}
