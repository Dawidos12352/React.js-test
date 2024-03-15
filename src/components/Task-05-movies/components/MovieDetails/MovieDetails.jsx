import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const MovieDetails = () => {

    const API_KEY = "0adfc883720d7cdfb3459be3bc3ae0bc"

    const [movie, setMovie] = useState("")
    const {movieId} = useParams()
    console.log("MOVIE ID:" ,movieId)

    useEffect(() => {

        const fetchMovieDetails = async () => {

            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
                if(!response.ok){
                    throw new Error("Error in response from network!")
                }
                const data = await response.json()
                console.log(data)
                setMovie(data)

            } catch(error){
                console.log(error)
                alert("Error! Something went wrong.")
            }
       
        }

        fetchMovieDetails()

        return () => {
            setMovie("")
        }
    }, [movieId])

    const date = movie.release_date ? movie.release_date.substring(0, 4) : '';
    const genres = movie.genres ? movie.genres.map(genre => genre.name).join(', ') : '';

    console.log("FILM:",movie)

    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster"/>
            <div>
                <h1>{movie.orginal_title} {date}</h1>
                <p>User score: {Math.trunc(movie.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <p>{genres}</p>
            </div>
        </div>
    )
}