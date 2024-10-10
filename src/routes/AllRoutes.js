import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import { Requests } from "../services/Requests";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MovieList api={Requests.NOW_PLAYING} />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/movies/popular" element={<MovieList api={Requests.POPULAR} />} />
                <Route path="/movies/top" element={<MovieList api={Requests.TOP_RATED} />} />
                <Route path="/movies/upcoming" element={<MovieList api={Requests.UPCOMING} />} />
                <Route path="search" element={<Search api={Requests.SEARCH} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}