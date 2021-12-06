export default function ForecastCard({ summary }) {
  return (
    <div>
      <h5>{summary.type.display}</h5>
      <p>{summary.content}</p>
    </div>
  );
}
