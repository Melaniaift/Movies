
const API_BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_API_KEY
  }
};

// Fetch playing movies
export async function fetchNowPlayingMovies(page = 1) {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/now_playing?language=en-US&page=${page}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchPopularMovies(page = 1) {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/popular?language=en-US&page=${page}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchTopRatedMovies(page = 1) {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/top_rated?language=en-US&page=${page}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchUpcomingMovies(page = 1) {
  try {
    const response = await fetch(`${API_BASE_URL}/movie/upcoming?language=en-US&page=${page}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchSearch(query, page = 1) {
  try {
    const response = await fetch(`${API_BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, options)
    if (!response.ok) {
      throw new Error('Failed to fetch now playing movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw error;
  }
}