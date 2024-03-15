import { MovieDetails } from "../components/MovieDetails/MovieDetails"
import css from "../../App.module.css"
// import { useParams } from "react-router-dom"

const MovieInfo = () => {

    // const {movieId} = useParams

    return(
        <main className={css.main}>
            <h1>Movie Info</h1>
            <MovieDetails />
        </main>
    )
}
export default MovieInfo