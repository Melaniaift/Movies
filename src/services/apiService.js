const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTdjZDBlZTk3MDU3MTQyMDM0ZWFlNjUzOWYyOWU2MCIsIm5iZiI6MTcyODQ2ODIxOS4zMDc1ODcsInN1YiI6IjY2ZGVmNjQxMGI3NTY0NTBlYjQ5YmJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vTVFJC8Zx-lwG8aKRWLeG9jIUshV8RKiua2GI_uY4KI';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY
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

