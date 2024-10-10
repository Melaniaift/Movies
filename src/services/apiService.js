const API_BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_API_KEY
  }
};

async function fetchMoviesData(endpoint, page = 1) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}&page=${page}`, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export function fetchNowPlayingMovies(page = 1) {
  return fetchMoviesData('/movie/now_playing?language=en-US', page);
}

export function fetchPopularMovies(page = 1) {
  return fetchMoviesData('/movie/popular?language=en-US', page);
}

export function fetchTopRatedMovies(page = 1) {
  return fetchMoviesData('/movie/top_rated?language=en-US', page);
}

export function fetchUpcomingMovies(page = 1) {
  return fetchMoviesData('/movie/upcoming?language=en-US', page);
}

export function fetchSearch(query, page = 1) {
  return fetchMoviesData(`/search/movie?query=${query}&include_adult=false&language=en-US`, page);
}

export async function fetchDetails(query) {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/${query}?language=en-US`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}