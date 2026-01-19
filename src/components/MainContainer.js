import { useSelector } from 'react-redux'
import useMovieVideo from '../hooks/useMovieVideo';
import TrailerCard from './TrailerCard';
import TitleCard from './TitleCard';
const MainContainer = () => {
   const trailerKey = useSelector(state => state.movieList.Trailer)
   const movieListData = useSelector(state => state.movieList.NowPlayingMovies);
   var movieId = 0;
   var movieData = null;

   if(movieListData != null)
   {
        movieId = movieListData.results[0].id;
        movieData = movieListData.results[0];
   }

   useMovieVideo(movieId);

if(trailerKey === "")
  return <></>
else
  return (
    <div>
      <TitleCard  movieData={movieData} />
      <TrailerCard ysource = {trailerKey} />
    </div>
  )
}

export default MainContainer
