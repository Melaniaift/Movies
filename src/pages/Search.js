import { Card } from "../components/index";
import { useFetch } from "../services/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ api }) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q")
    const { data: movies } = useFetch(api, queryTerm)

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