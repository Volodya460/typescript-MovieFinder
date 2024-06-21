import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Response, getByIdMovie } from "../Api/api";
import { MovieCard } from "../components/MovieCard";

import { useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { LinkDiv } from "./MovieDitels.styled";

function MovieDitels() {
  const [state, setState] = useState<Response | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    if (id) {
      getByIdMovie(id.toString())
        .then((movie) => {
          setState(movie);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <>
        <LinkDiv>
          <Link to={location?.state?.from.pathname ?? "/"}>Back</Link>
          <h2>Sorry(( We dont have anu information .</h2>
        </LinkDiv>
      </>
    );
  }

  if (state) {
    return (
      <>
        {" "}
        <LinkDiv>
          <Link to={location?.state?.from.pathname ?? "/"}>Back</Link>
        </LinkDiv>
        <MovieCard state={state} />
      </>
    );
  }
}

export default MovieDitels;
