export default function ForecastCard({ summary }) {
  let observations = summary.content.replace(/<[^>]*>/g, "");

  return (
    <div>
      <h5>{summary.type.display}</h5>
      <p>{observations}</p>
    </div>
  );
}
