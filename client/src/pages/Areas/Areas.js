import axios from "axios";
import { useEffect, useState } from "react";
import AreaCard from "../../components/AreaCard/AreaCard";
import "./Areas.scss";

const areaApi = "http://localhost:8080/api/v1/areas";

export default function Areas() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    axios
      .get(areaApi)
      .then((res) => {
        setAreas(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="area-section">
      <div className="area-section__img-cont">
        <img
          className="area-section__img"
          src="https://pcacdn.azureedge.net/-/media/pn-np/bc/kootenay/WET4/modules/hivernale-kootenay-winter-870_pca-RMacDonald.jpg?modified=20210224175553"
          alt="kootenay national park"
        />
      </div>
      {areas.length !== 0 ? (
        areas.map((area) => <AreaCard key={area.id} area={area} />)
      ) : (
        <p>Loading</p>
      )}
    </article>
  );
}
