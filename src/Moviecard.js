
//component is a object of react
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

 function MovieCard(props)  {
    const { movies, addStars, minStars, cartBtn, favBtn } = props;
    const { title, plot, poster, price, rating, stars, fav, cart,videoId } = movies || {};
    const playerRef = useRef(null);

    
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
            <YouTube
            videoId={poster}
            opts={{
              width: '640',
              height: '360',
              playerVars: {
                autoplay: 0,
              },
            }}
          />
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs.{price}</div>
              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    alt="decrease"
                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                    className="str-btn"
                    onClick={()=>{minStars(movies)}}
                  ></img>
                  <img
                    alt="stars"
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    className="stars"
                  ></img>
                  <img
                    alt="decrease"
                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                    className="str-btn"
                    onClick={()=>{addStars(movies)}}
                  ></img>
                  <span>{stars}</span>
                </div>
                
                  <button className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  favBtn(movies);
                }}
              >
                {fav ? "Un-favorite" : "Favorite"}
              </button>
                 
              <button
  className={cart ? "rcart-btn" : "cart-btn"}
  onClick={() => {
    console.log('Clicked', movies); // Add this line for debugging
    cartBtn(movies);
  }}
>
  {cart ? "Remove-Item" : "Add-Item"}
</button>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default MovieCard;
