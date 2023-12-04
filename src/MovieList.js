import MovieCard from "./Moviecard";
import Navbar from './Navbar.js'

//component is a object of react
function MovieList(props)  {
 
    // const{title, plot, price, rating, stars, fav, cart} = this.state;
    const { movies,addStars,minStars,favBtn,cartBtn } = props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            minStars={minStars}
            favBtn={favBtn}
            cartBtn={cartBtn}
            key={movie.id}
          />
        ))}
      </>
    );
  }

export default MovieList;
