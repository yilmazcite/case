import classes from "./MovieItem.module.scss";
import { Movie } from "../../movies";
import { differenceInDays, fromUnixTime } from "date-fns";
import Button, { ButtonColor } from "../UI/Button";
import { MovieListType } from "../../types/MovieListType";

interface MovieItemProps {
  movie: Movie;
  type: MovieListType;
  clickHandler: (movie: Movie) => void;
}

const MovieItem = ({ movie, type, clickHandler }: MovieItemProps) => {

  const onClickHandler = () => {
    clickHandler(movie);
  };

const movieReleased = `Release date: ${differenceInDays(new Date(), fromUnixTime(movie.release_date))} days ago.`

  return (
    <li className={classes.MovieItem}>
      <section>
        <p className={classes.Title}>{movie.title}</p>
        <span className={classes.ReleaseDate}>
          {movieReleased}
        </span>
      </section>
      <Button
        onClick={onClickHandler}
        color={
          type === MovieListType.Left ? ButtonColor.Green : ButtonColor.Red
        }
      >
        {type === MovieListType.Left ? "Add" : "Remove"}
      </Button>
    </li>
  );
};

export default MovieItem;
