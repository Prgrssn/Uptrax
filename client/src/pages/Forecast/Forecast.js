import "./Forecast.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

const forecastAPI = process.env.REACT_APP_AVCAN_API;
const header = { "x-api-key": process.env.REACT_APP_AVCAN_KEY };

export default function Forecast() {
  const [area, setArea] = useState();
  const [summaries, setSummaries] = useState([]);
  const [travelAdvice, setTravelAdvice] = useState();
  const [dateIssued, setDateIssued] = useState();
  const [validUntil, setValidUntil] = useState();
  const [highlights, setHighlights] = useState();

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://api.avalanche.ca/forecasts/en/products/e7677e53-9c1f-4a6d-8a38-a53c6e5244cd",
      headers: {
        "x-api-key": "uthziK49IH5MHweAyVl5a1gusaPq4EvmvVCEaf5g",
      },
    };

    axios(config)
      .then(function (response) {
        const report = response.data;
        setArea(report.area.name);
        setDateIssued(report.report.dateIssued);
        setValidUntil(report.report.validUntill);
        setHighlights(report.report.highlights);
        setSummaries(report.report.summaries);
        setTravelAdvice(report.report.terrainAndTravelAdvice);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(travelAdvice);

  return (
    <main>
      <h1>Forecast</h1>
      <h2>Area: {area}</h2>
      <h5>Highlights</h5>
      <div>{highlights}</div>
      <ul>
        {travelAdvice.map((advice) => (
          <li>{advice}</li>
        ))}
      </ul>
      {summaries.map((summary) => (
        <div>
          <ForecastCard key={summary.type.value} summary={summary} />
        </div>
      ))}
      <span>
        Avalanche and Weather Forecast Provided by Avalanche Canada. For a more
        complete version of this report and access to trip planning resources,
        please visit their <a>website</a>
      </span>
    </main>
  );
}
