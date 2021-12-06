import "./Forecast.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ForecastCard from "../../components/ForecastCard/ForecastCard";
import AdviceRow from "../../components/AdviceRow/AdviceRow";
import AvCanLogo from "../../assets/images/ave-can-logo.png";

const forecastAPI = process.env.REACT_APP_AVCAN_API;
const APIKey = process.env.REACT_APP_AVCAN_KEY;

export default function Forecast() {
  const [area, setArea] = useState("");
  const [summaries, setSummaries] = useState([]);
  const [travelAdvice, setTravelAdvice] = useState([]);
  const [dateIssued, setDateIssued] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [highlights, setHighlights] = useState("");

  useEffect(() => {
    const config = {
      method: "get",
      url: forecastAPI,
      headers: {
        "x-api-key": APIKey,
      },
    };

    axios(config)
      .then(function (response) {
        const report = response.data;
        setArea(report.area.name);
        setDateIssued(new Date(report.report.dateIssued).toString());
        setValidUntil(new Date(report.report.validUntil).toString());
        setHighlights(report.report.highlights.replace(/<[^>]*>/g, ""));
        setSummaries(report.report.summaries);
        setTravelAdvice(report.report.terrainAndTravelAdvice);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main className="forecast">
      <div className="forecast__info-wrap">
        {/* <h1 className="forecast__title">Forecast</h1> */}
        <div className="forecast__img-cont">
          <img
            src={AvCanLogo}
            alt="Avalanche Canada Logo"
            className="forecast__img"
          />
        </div>
        <h2 className="forecast__header">Area: {area}</h2>
        <p className="forecast__date">Report Issued on: {dateIssued}</p>
        <p className="forecast__date">Report Valid Until: {validUntil}</p>
      </div>
      <article className="forecast__info-wrap">
        <h5 className="forecast__subheader">Highlights</h5>
        <p className="forecast__highlights">{highlights}</p>
        <h5 className="forecast__subheader">Travel Advice</h5>
        <ul className="forecast__list">
          {travelAdvice.map((advice) => (
            <AdviceRow advice={advice} key={uuidv4()} />
          ))}
        </ul>
      </article>
      <article className="forecast__info-wrap">
        {summaries.map((summary) => (
          <div className="forecast__card">
            <ForecastCard key={uuidv4()} summary={summary} />
          </div>
        ))}
      </article>
      <p className="forecast__disclaimer">
        Forecast Provided by Avalanche Canada. For a more complete version of
        this report and access to trip planning resources, please visit their{" "}
        <a
          className="forecast__disclaimer--link"
          href="https://www.avalanche.ca/map/forecasts/kootenay-boundary"
        >
          website.
        </a>
      </p>
    </main>
  );
}
