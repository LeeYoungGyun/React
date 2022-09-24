import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMoives(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((ABC) => (
            <Movie
              key={ABC.id}
              coverImg={ABC.medium_cover_image}
              title={ABC.title}
              summary={ABC.summary}
              genres={ABC.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
