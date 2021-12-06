import "./Forecast.scss";
import axios from "axios";
import { useEffect } from "react";

const forecastAPI = process.env.REACT_APP_AV_CAN_API;
const header = { "x-api-key": process.env.REACT_APP_AV_CAN_KEY };

console.log(forecastAPI);

export default function Forecast() {
  //   useEffect(() => {
  //     const config = {
  //       method: "get",
  //       url: "https://api.avalanche.ca/forecasts/en/products/e7677e53-9c1f-4a6d-8a38-a53c6e5244cd",
  //       headers: {
  //         "x-api-key": "uthziK49IH5MHweAyVl5a1gusaPq4EvmvVCEaf5g",
  //       },
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   });

  return (
    <main>
      <h1>Forecast</h1>
    </main>
  );
}
