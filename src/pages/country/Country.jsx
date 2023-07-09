import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../../database/Database";
import "../country/Country.css";

export const Country = () => {
  const navigate = useNavigate();

  const { continentId } = useParams();

  const findContinent = data.continents.find(
    (conti) => conti.id.toString() === continentId
  );

  return (
    <div className="country__container">
      <h1>Top countries in {findContinent.name} for your next holiday</h1>
      <div className="continents__main">
        {findContinent.countries.map((continent) => {
          const { id, image, name } = continent;
          return (
            <Link
              to={`/destionations/${id}`}
              className="continent__card"
              key={id}
            >
              <section className="continent__image">
                <img src={image} alt={name} />
              </section>
              <section className="location">
                <p>{name}</p>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
