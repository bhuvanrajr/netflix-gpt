import Header from './Header'
import Background from './Background'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {
useNowPlayingMovies(); 
  return (
    <div>
      <Header />
      <Background />
    </div>
  )
}

export default Browse;
