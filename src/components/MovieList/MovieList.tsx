import classes from "./MovieList.module.scss";
import { Movie } from "../../movies";
import MovieItem from "../MovieItem/MovieItem";
import { MovieListType } from "../../types/MovieListType";

interface MovieListProps {
  list: Movie[];
  search: string;
  type: MovieListType;
  clickHandler: (movie: Movie) => void;
}

const MovieList = ({ list, search, type, clickHandler }: MovieListProps) => {
  return (
    <ul className={classes.MovieList}>
      {list
        .filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie) => (
          <MovieItem key={"movie" + type + movie.id} movie={movie} type={type} clickHandler={clickHandler} />
        ))}
    </ul>
  );
};

export default MovieList;
