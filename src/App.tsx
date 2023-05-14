//import { useState } from "react";
import classes from "./App.module.css";
import { Movie } from "./movies"; //movies
import MovieList from "./components/MovieList/MovieList";
import Input from "./components/UI/Input";
import { MovieListType } from "./types/MovieListType";

import { useAppDispatch, useAppSelector } from './hooks';
import { addMovie, removeMovie, searchMovie } from "./redux/reducer/reducers";

const App = () => {
  //const [leftMovieList, setLeftMovieList] = useState<Movie[]>(movies);
  //const [rightMovieList, setRightMovieList] = useState<Movie[]>([]);
  //const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();
  const search = useAppSelector(state => state.movies.search);
  const { rightMovieList, leftMovieList } = useAppSelector(state => state.movies);

  const onAddClick = (movie: Movie) => {
    dispatch(addMovie({movie}));
      /*
      setRightMovieList((prevList) => [...prevList, movie]);
      setLeftMovieList((prevList) =>
        prevList.filter((item) => item.id !== movie.id)
      );
      */
  };

  const onRemoveClick = (movie: Movie) => {
    dispatch(removeMovie({movie}));
      /*
      setLeftMovieList((prevList) => [...prevList, movie]);
      setRightMovieList((prevList) =>
        prevList.filter((item) => item.id !== movie.id)
      );
      */
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchMovie({search: e.target.value}));
    //setSearch({search: e.target.value});
  };

  return (
    <main className={classes.App}>
      <Input
        placeholder="Type to search..."
        value={search}
        onChange={onChangeHandler}
      />

      <section className={classes.MovieLists}>
        {leftMovieList.length ? (
          <MovieList
            list={leftMovieList}
            search={search}
            type={MovieListType.Left}
            clickHandler={onAddClick}
          />
        ) : null}
        
        {rightMovieList.length > 0 ? (
          <MovieList
            list={rightMovieList}
            search={search}
            type={MovieListType.Right}
            clickHandler={onRemoveClick}
          />
        ) : null}
      </section>
    </main>
  );
};

export default App;
