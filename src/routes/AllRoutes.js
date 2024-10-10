import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import { Requests } from "../services/Requests";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="/" element={<MovieList api={Requests.NOW_PLAYING} title="Home" />} />
                <Route path="/movie/:id" element={<MovieDetail api={Requests.DETAILS} />} />
                <Route path="/movies/popular" element={<MovieList api={Requests.POPULAR} title="Popular" />} />
                <Route path="/movies/top" element={<MovieList api={Requests.TOP_RATED} title="Top Rated" />} />
                <Route path="/movies/upcoming" element={<MovieList api={Requests.UPCOMING} title="Upcoming" />} />
                <Route path="search" element={<Search api={Requests.SEARCH} />} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>

        </div>
    )
}