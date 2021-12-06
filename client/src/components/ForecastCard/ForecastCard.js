import "./ForecastCard.scss";

export default function ForecastCard({ summary }) {
  let observations = summary.content.replace(/<[^>]*>/g, "");

  return (
    <div className="forecast-card">
      <h5 className="forecast-card__header">{summary.type.display}</h5>
      <p className="forecast-card__obs">{observations}</p>
    </div>
  );
}
