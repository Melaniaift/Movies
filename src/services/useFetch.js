import { useEffect, useState } from "react";
import { fetchNowPlayingMovies } from "./apiService"
import { Requests } from "./Requests";
export const useFetch = (type) => {

    const [data, setData] = useState([])
    useEffect(() => {
        if (type === Requests.NOW_PLAYING) {
            async function fetchMovies() {
                const response = await fetchNowPlayingMovies();
                setData(response);
            }
            fetchMovies();
        }
    }, [type]);

    return { data }
}
