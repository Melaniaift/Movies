import { useEffect, useState } from "react";
import { fetchNowPlayingMovies, fetchUpcomingMovies, fetchTopRatedMovies, fetchPopularMovies, fetchSearch, fetchDetails } from "./apiService"
import { Requests } from "./Requests";

export const useFetch = (type, query) => {
    const [data, setData] = useState([])
    useEffect(() => {

        async function fetchMovies() {
            let response = [];
            switch (type) {
                case Requests.NOW_PLAYING: {
                    response = await fetchNowPlayingMovies();
                    break;
                }
                case Requests.POPULAR: {
                    response = await fetchPopularMovies();
                    break;
                }
                case Requests.TOP_RATED: {
                    response = await fetchTopRatedMovies();
                    break;
                }
                case Requests.UPCOMING: {
                    response = await fetchUpcomingMovies();
                    break;
                }
                case Requests.SEARCH: {
                    response = await fetchSearch(query);
                    break;
                }
                case Requests.DETAILS: {
                    response = await fetchDetails(query);
                    break;
                }
                default: {
                    response = [];
                }
            }
            setData(response)

        }
        fetchMovies();

    }, [type,query]);

    return { data }
}
