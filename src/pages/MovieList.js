import { useState } from "react";
import { Card } from "../components/index";
import { useFetch } from "../services/useFetch";
import { Requests } from "../services/Requests";

export const MovieList = () => {
    const {data:movies} = useFetch(Requests.NOW_PLAYING)

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies ? movies.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    )) : ''}

                </div>
            </section>
        </main>
    )
}