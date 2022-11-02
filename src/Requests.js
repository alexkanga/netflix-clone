// Typically we would store in {process.env.API_KEY}
const API_KEY = "ff7beba976b1c72979cd0e7daa9d2b83";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

// https://api.themoviedb.org/3/trending/all/week?api_key=ff7beba976b1c72979cd0e7daa9d2b83&language=en-US

export default requests;
