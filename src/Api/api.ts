import axios from "axios";

export interface Belongs {
  backdrop_path: boolean;
  id: number;
  name: string;
  poster_path: boolean;
}
interface GenresItem {
  d: number;
  name: string;
}
export interface Response {
  name?: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  belongs_to_collection: Belongs;
  budget?: number;
  genres?: GenresItem[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  origin_country?: [string];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: [];
  production_countries?: [];
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: [];
  status?: string;
  tagline?: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}
export interface ReviewsResponseItem {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface CastResponseItem {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/trending/all/day",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzkxZDllYjY1N2Q3Y2U2OTA3M2M4MDAwNDE1MGU0MCIsInN1YiI6IjY0MjMwZjY1NTM0NjYxMDExMzA4ODY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._cCJjrj0s8dyxW-RkJ54maY58WJCVieK14EAenpYBQU",
  },
};

export async function getTrending(): Promise<Response[] | null> {
  const response = await axios(options);

  return response.data.results;
}

export async function getByIdMovie(
  id: string | undefined
): Promise<Response | null> {
  const response = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}`,
  });

  return response.data;
}

export async function getReviewsMovie(
  id: string | undefined
): Promise<ReviewsResponseItem[] | null> {
  const response = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
  });

  return response.data.results;
}

export async function getCastMovie(
  id: string | undefined
): Promise<CastResponseItem[]> {
  const response = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
  });
  return response.data.cast;
}

export async function getByMovieName(
  value: string
): Promise<Response[] | null> {
  const response = await axios({
    ...options,
    params: { query: value, language: "en-US" },
    url: `https://api.themoviedb.org/3/search/movie`,
  });
  return response.data.results;
}
