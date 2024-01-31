const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumenraries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchAdvintureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
