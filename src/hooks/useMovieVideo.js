import { useDispatch } from "react-redux";
import { AUTH_OPTIONS } from "../utils/Constants";
import { addTrailerKey } from '../utils/MovieListSlice'
const useMovieVideo = async (movieId) =>{
    var dispatch = useDispatch();
    var youtubeKey = '';
    var youtubeSource = "";
    const getMovieVideo = async ()=>{
        if(movieId > 0)
        {
            const api = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
            var data = await fetch(api,AUTH_OPTIONS);
            var result = await data.json();
            return result.results.filter(data => data.type === "Trailer")[0].key;
        }
        else
        {
            return "";
        }   
    }
    youtubeKey = await getMovieVideo();
    youtubeSource = `https://www.youtube.com/embed/${youtubeKey}?si=0PvYtgJ0jBgGpEsO&autoplay=1&mute=1`;
    
    dispatch(addTrailerKey(youtubeSource));
}

export default useMovieVideo;