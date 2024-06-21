import { FC, useEffect, useState } from "react";
import { Response, getTrending } from "../Api/api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeSection } from "./Home.styled";
import { Loader } from "../components/Loader";

function HomePage() {
  const [stateList, setStateList] = useState<Response[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getTrending()
      .then((res) => setStateList(res))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  const createList: FC<Response[]> = (state) => {
    return state.map((movie) => (
      <li key={movie.id}>
        <Link
          to={`movies/${movie.id}`}
          key={movie.id}
          state={{ from: location }}
        >
          {movie.name}
        </Link>
      </li>
    ));
  };
  if (loading) {
    return <Loader />;
  }
  if (stateList) {
    return (
      <HomeSection>
        <h2>Trending movies</h2>
        <ul>{createList(stateList)}</ul>
      </HomeSection>
    );
  }
}

export default HomePage;
