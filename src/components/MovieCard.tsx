import { NavLink, Outlet } from "react-router-dom";
import { Response } from "../Api/api";
import { FC } from "react";
import { CardDiv, CastReviewsDiv } from "./MovieCard.styled";
interface MovieCardProps {
  state: Response;
}
export const MovieCard: FC<MovieCardProps> = ({ state }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500/";
  const baseImg =
    "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg";
  return (
    <CardDiv>
      <img
        src={state.poster_path ? baseURL + state.poster_path : baseImg}
        alt=""
        height="450px"
      />
      <h2>{state.title}</h2>

      <p>User Score: {Number(state.vote_average).toFixed(1)}</p>
      <p>{state.overview}</p>
      <h3>Genres:</h3>
      <ul>
        {state.genres?.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>

      <CastReviewsDiv>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </CastReviewsDiv>
      <Outlet />
    </CardDiv>
  );
};
