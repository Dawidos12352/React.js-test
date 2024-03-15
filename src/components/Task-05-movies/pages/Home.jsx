import { TrendingMovies } from "../components/TrendingMovies/TrendingMovies";
import css from "../../App.module.css"

const Home = () => {
    return (
      <main className={css.main}>
        <h1>Trending today</h1>
        <TrendingMovies />
      </main>
    );
  };
  export default Home;