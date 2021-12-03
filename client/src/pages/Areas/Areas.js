import axios from "axios";
import { useEffect, useState } from "react";
import AreaCard from "../../components/AreaCard/AreaCard";

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

  console.log(areas);

  return (
    <article className="area-section">
      <h3 className="area-section__title">Areas</h3>
      {areas.length !== 0 ? (
        areas.map((area) => <AreaCard key={area.id} area={area} />)
      ) : (
        <p>Loading</p>
      )}
    </article>
  );
}
