
//const Key = process.env.REACT_APP_IMDB_API_KEY
const requests = 
{
    requestPopular:'https://api.themoviedb.org/3/movie/popular?api_key=7f1fa52ee32258531e1cbf5c1dc4e840&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=7f1fa52ee32258531e1cbf5c1dc4e840&language=en-US&page=1',
    requestLatest:'https://api.themoviedb.org/3/movie/latest?api_key=7f1fa52ee32258531e1cbf5c1dc4e840&language=en-US',
    requestNowPlaying:'https://api.themoviedb.org/3/movie/now_playing?api_key=7f1fa52ee32258531e1cbf5c1dc4e840&language=en-US&page=1',
    requestUpcoming:'https://api.themoviedb.org/3/movie/upcoming?api_key=7f1fa52ee32258531e1cbf5c1dc4e840&language=en-US&page=1',
}
export default requests;