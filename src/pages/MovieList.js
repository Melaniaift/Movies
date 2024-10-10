import { Card } from "../components/index";
import { useFetch } from "../services/useFetch";
import { useEffect } from "react";

export const MovieList = ({ api, title }) => {
    const { data: movies } = useFetch(api)

    useEffect(() => {
        document.title = title;
    })
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies ? movies.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    )) : ''}

                </div>
            </section>
        </main>
    )
}