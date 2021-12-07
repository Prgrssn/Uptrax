import "./AreaCard.scss";
import { v4 as uuidV4 } from "uuid";

export default function AreaCard({ area }) {
  return (
    <article>
      <div className="area-card">
        <div className="area-card__body">
          <h4 className="area-card__area-name">{area.name}</h4>
          <p className="area-card__area-desc">{area.description}</p>
          <div className="area-card__wrapper">
            <div className="area-card__iframe-wrap">
              <iframe
                title={uuidV4()}
                className="area-card__iframe"
                frameBorder="0"
                src={area.map_url}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
