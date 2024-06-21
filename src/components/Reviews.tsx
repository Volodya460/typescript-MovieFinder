import { useEffect, useState } from "react";
import { ReviewsResponseItem, getReviewsMovie } from "../Api/api";
import { useParams } from "react-router-dom";
import { UlReviews } from "./Reviews.styled";

function Reviews() {
  const [state, setState] = useState<ReviewsResponseItem[] | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    getReviewsMovie(id)
      .then((movie) => {
        setState(movie);
      })
      .catch((er) => console.log(er.message));
  }, [id]);

  if (state) {
    return (
      <>
        {" "}
        {state.length !== 0 ? (
          <UlReviews>
            {state.map((el) => {
              return (
                <li key={el.id}>
                  <h3>Author: {el.author}</h3>
                  <p>{el.content}</p>
                </li>
              );
            })}
          </UlReviews>
        ) : (
          <p>There are no reviews</p>
        )}
      </>
    );
  }
}

export default Reviews;
