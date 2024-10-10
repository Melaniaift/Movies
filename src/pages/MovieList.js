import { Card } from "../components/index";
import { useFetch } from "../services/useFetch";

export const MovieList = ({api}) => {
    const { data: movies } = useFetch(api)

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