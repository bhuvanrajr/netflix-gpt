import { AUTH_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieListSlice";

 const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMovieList = async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", AUTH_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json));
    }
  getMovieList();
}
export default useNowPlayingMovies;
