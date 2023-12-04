// import MovieCard from "./Moviecard";
import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./moviesData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


// import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
      searchTerm: '',
      filteredMovies: movies,
    };
  }
  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars >= 5) {
      return;
    }
    movies[mid].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    if (movies[mid].stars <= 0) {
      return;
    }
    movies[mid].stars -= 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie); // Find the index of the passed movie
    // Toggle the 'fav' property of the found movie
    movies[mid].fav = !movies[mid].fav;
    // Update the state with the modified movies array
    this.setState({
      movies, // Creating a new array reference to trigger re-render
    });
  };

  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].cart = !movies[mid].cart;
    console.log(movies[mid].cart);
    if (movies[mid].cart) {
      cartCount = cartCount + 1;
    } else {
      cartCount = cartCount - 1;
    }
    this.setState({
      movies,
      cartCount,
    });
    console.log(cartCount);
  };
  handleSearch = () => {
    const { searchTerm } = this.state;
    const newFilteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredMovies: newFilteredMovies });
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.handleSearch(); //Trigger search whenever the input changes
    });
  };
  

  


  render() {
    const { movies, cartCount,searchTerm, filteredMovies } = this.state;
    return (
      <>
      
        {/* <h1 className="m">Movie Lelo</h1>; */}
        <Navbar cartCount={cartCount} />
        <div className="Search">
          <input className="Search-box"
            type="text"
            placeholder="Search your favorite movie.."
            value={searchTerm}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        {searchTerm ? (
  <MovieList
    movies={filteredMovies}
    addStars={this.handleIncStar}
    minStars={this.handleDecStar}
    favBtn={this.handleToggleFav}
    cartBtn={this.handleToggleCart}
  />
) : (
  <MovieList
    movies={movies}
    addStars={this.handleIncStar}
    minStars={this.handleDecStar}
    favBtn={this.handleToggleFav}
    cartBtn={this.handleToggleCart}
  />
)}
   
     
{/* {searchTerm ? (
  <MovieList
    movies={filteredMovies}
    addStars={this.handleIncStar}
    minStars={this.handleDecStar}
    favBtn={this.handleToggleFav}
    cartBtn={this.handleToggleCart}
  />
) : null} */}
      </>
    );
  }
}

export default App;
