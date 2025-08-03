import "./TitleCards.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWZjNjE2OTI3MDE3N2FiYzFiMDEyMzZlOWY4NTdhMSIsIm5iZiI6MTczMDIyMzc5MS4zNjA3MzA2LCJzdWIiOiI2NzIxMWRjYzdkNGEwNjAxOWYwOWRhYjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-v0MgXmLH9wFeAGdi0_x-1oeV15gMgZa25OOHCaBXXk",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards" ref={cardsRef}>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list">
        {apiData.map((card, i) => {
          return (
            <Link className="card" to={`/player/${card.id}`} key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt="Movie Image"
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
