import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import css from "./TrendingMovies.module.css"


export const TrendingMovies = () => {

    const API_KEY = "0adfc883720d7cdfb3459be3bc3ae0bc"

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {

        const fetchTrendingMovies = async () => {
            try {

                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
                if(!response.ok){
                    throw new Error("Error in response from network!")
                }

                const data = await response.json()
                console.log (data)
                setTrendingMovies(data.results)

            } catch(error){
                console.log(error)
                alert("Error! Something went wrong.")
            }
        }

        fetchTrendingMovies()

    },[])

    return(
        <div>
            {trendingMovies && 
            trendingMovies.map(movie => (
                <li key={movie.id} className={css.listItem}>
                    <NavLink to={`movies/${movie.id}`} state={{from: "/"}} className={css.listLink}>{movie.title}</NavLink>
                </li>
            ))
            }
        </div>

    )
}