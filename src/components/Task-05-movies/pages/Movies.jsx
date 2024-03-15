import { useSearchParams } from "react-router-dom";
import css from "../../App.module.css"
import { MovieInput } from "../components/MovieInput/MovieInput";
import { SearchResults } from "../components/SearchResults/SearchResults";

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const movieName = searchParams.get("query") ?? "";

  const updateQuery = query => {
    const nextParams = query !== "" ? {query} : {};
    setSearchParams(nextParams)
  }


    return (
      <main className={css.main}>
        <h1>Movies page</h1>
        <MovieInput  value={movieName} changeHandler={updateQuery}/>
        <SearchResults />

        
      </main>
    );
  };

  export default Movies;
