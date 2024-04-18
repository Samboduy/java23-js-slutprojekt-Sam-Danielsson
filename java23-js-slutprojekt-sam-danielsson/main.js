console.log("Hello World");

// const words = " Hello Sam Im 23 ";
// words.trim();
// console.log(words.trim().replaceAll(" ", "%20"));



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDY5NDM4ZTAxYmJlYTllODMzM2Y2MTgyMzM2OTVlYyIsInN1YiI6IjY2MWZhOTkwN2FlY2M2MDE3YzZjZjc1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TkoJUWZUIp2iMACrhVOU_KEFJUolg1-88wOse2LPobA'
  }
};

fetch('https://api.themoviedb.org/3/search/movie?query=Deep%20Rising&include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));