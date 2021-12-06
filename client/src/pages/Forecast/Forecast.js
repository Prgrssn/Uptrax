import "./Forecast.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { SettingsSystemDaydreamRounded } from "@mui/icons-material";

const forecastAPI = process.env.REACT_APP_AVCAN_API;
const header = { "x-api-key": process.env.REACT_APP_AVCAN_KEY };

export default function Forecast() {
  const [area, setArea] = useState();
  const [summaries, setSummaries] = useState();
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(area);
  console.log(dateIssued);
  console.log(validUntil);
  console.log(highlights);
  console.log("");

  return (
    <main>
      <h1>Forecast</h1>
      <p>Area: {area}</p>
      <div>{highlights}</div>
    </main>
  );
}
