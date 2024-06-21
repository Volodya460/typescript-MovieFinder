import { useEffect, useState } from "react";
import { Form } from "../components/Form";
import { Response, getByMovieName } from "../Api/api";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";
import { LinkFilmList } from "./Movies.styled";

function Movies() {
  const [value, setValue] = useState<string>("");
  const [state, setState] = useState<Response[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (!value) return;
    setLoading(true);
    getByMovieName(value)
      .then((req) => {
        if (!req) {
          return;
        }
        if (req.length === 0) {
          return alert(`Try something else`);
        }

        setState(req);
      })
      .catch((er) => console.log(er.message))
      .finally(() => setLoading(false));
  }, [value]);

  const handleFormSubmit = (value: string) => {
    setValue(value);
  };
  if (loading) {
    <Loader />;
  }

  if (state) {
    return (
      <>
        <Form handleFormSubmit={handleFormSubmit} />
        <LinkFilmList>
          {state?.map((el) => {
            return (
              <Link to={`${el.id}`} key={el.id} state={{ from: location }}>
                {el.title}
              </Link>
            );
          })}
        </LinkFilmList>
      </>
    );
  } else {
    return <Form handleFormSubmit={handleFormSubmit} />;
  }
}

export default Movies;
