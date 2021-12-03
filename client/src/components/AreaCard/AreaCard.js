import { Card } from "react-bootstrap";
import "./AreaCard.scss";

export default function AreaCard({ area }) {
  return (
    <article>
      <Card className="area-card">
        <Card.Body className="area-card__body">
          <h4 className="area-card__area-name">{area.name}</h4>
          <p className="area-card__area-desc">{area.description}</p>
          <div className="area-card__wrapper">
            <div className="area-card__iframe-wrap">
              <iframe
                className="area-card__iframe"
                frameBorder="0"
                src={area.map_url}
              ></iframe>
            </div>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
}
