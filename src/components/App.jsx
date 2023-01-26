import Home from "pages/Home/Home";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import MovieCast from "./MoviesList/MovieCast/MovieCast";


export const App = () => {
  return (
    <BrowserRouter basename='goit-react-hw-05-movies'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
