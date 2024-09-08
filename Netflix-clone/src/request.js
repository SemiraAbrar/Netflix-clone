// const API_key='5dab94cef017ef9dadbb6fdf81af0a5a';
 const API_key = process.env.REACT_APP_API_key;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
  fetchTopRatedMovies: `movie/top_rated?api_key=${API_key}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_key}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_key}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_key}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_key}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_key}&with_genres=99`,
};
export default requests;