const API_KEY = "f40bf975f2fc4069f0c23c0b62612d80";

const requests = {
	fetchTrends: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
	fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213`,
};

export default requests;
