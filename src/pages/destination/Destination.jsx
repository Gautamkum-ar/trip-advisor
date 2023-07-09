import { useState } from "react";
import "../destination/Destination.css";
import { Link, useParams } from "react-router-dom";
import { data } from "../../database/Database";

export const Destination = () => {
  const { countryId } = useParams();

  const findcountry = data.continents.countries.find(
    (country) => country.id.toString() === countryId.toString()
  );
  return (
    <div className="destination__conatainer">
      <h1>This is destination page</h1>
      <div className="continents__main">
        {findcountry.destinations.map((continent) => {
          const { id, image, name } = continent;
          return (
            <Link
              to={`/destinations/${id}`}
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
