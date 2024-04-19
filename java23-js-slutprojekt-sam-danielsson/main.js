import { getPopularRatedMovies } from "./js/getPopularRatedMovies.js";



// const words = " Hello Sam Im 23 ";
// words.trim();
// console.log(words.trim().replaceAll(" ", "%20"));




// Access Token Object For Auhtentication in TMDB API 

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDY5NDM4ZTAxYmJlYTllODMzM2Y2MTgyMzM2OTVlYyIsInN1YiI6IjY2MWZhOTkwN2FlY2M2MDE3YzZjZjc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TkoJUWZUIp2iMACrhVOU_KEFJUolg1-88wOse2LPobA'
  }
};

getPopularRatedMovies(url, options);

const select = document.querySelector("select")
  .value;
console.log(select);