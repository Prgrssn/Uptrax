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
      <h2 className="area-section__title">Areas</h2>
      {areas.length !== 0 ? (
        areas.map((area) => <AreaCard key={area.id} area={area} />)
      ) : (
        <p>Loading</p>
      )}
    </article>
  );
}
