const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks =232`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&genre_ids=35`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&genre_ids=878`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&genre_ids=18`,
  fetchRomantiMovies: `/discover/movie?api_key=${API_KEY}&genre_ids=53`,
  fetchDocumenraries: `/discover/movie?api_key=${API_KEY}&genre_ids=10402`,
  fetchTvShows: `/tv/popular?api_key=${API_KEY}language=en-US&page=1`,
};
