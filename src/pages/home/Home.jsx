import { Link, useNavigate } from "react-router-dom";
import { data } from "../../database/Database";
import "../home/Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home__container">
      <h1>Welcome to the Trip Advisor</h1>
      <h2>Top Continents for your next holidays</h2>
      <div className="continents__main">
        {data.continents.map((continent) => {
          const { id, image, name } = continent;
          return (
            <Link to={`/countries/${id}`} className="continent__card" key={id}>
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
