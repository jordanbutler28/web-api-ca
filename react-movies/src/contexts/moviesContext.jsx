import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatchs, setWatchlist] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    //checks if movie id is not already in the array of favourites
    if (!favorites.includes(movie.id)){
      //...favourites is a spread operator. it makes a copy of the existing favourites array and adds additional movie id to new array
      newFavorites = [...favorites, movie.id];
    }
    else{
      //just copies existing array
      newFavorites = [...favorites];
    }
    //updates the array and re-renders component
    setFavorites(newFavorites)
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id //filter movies array to remove ID that matches clicked movie id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToWatchlist = (movie) => {
    let newWatchlist = [];
    if (!mustWatchs.includes(movie.id)){
      newWatchlist = [...mustWatchs, movie.id];
    }
    else{
      newWatchlist = [...mustWatchs];
    }
    setWatchlist(newWatchlist)
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist( mustWatchs.filter(
      (mId) => mId !== movie.id
    ) )
  };


   return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
        removeFromWatchlist,
        mustWatchs
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
