import { Card } from "../components/index";
import { useFetch } from "../services/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ api }) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q")
    const { data: movies } = useFetch(api, queryTerm)

    useTitle(`Search result for ${queryTerm}`);

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700 dark:text-white">
                    {movies.length ? `Results for ${queryTerm}` : `No result for ${queryTerm}`}
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies ? movies.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    )
                    ) : ''}
                </div>
            </section>
        </main>
    )
}