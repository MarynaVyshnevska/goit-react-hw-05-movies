import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from '../pages/Home/Home';


const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./MoviesList/Cast/Cast'));
const Review = lazy(() => import('./MoviesList/Review/Review'));
const NotFound = lazy(() => import('./NotFound/NotFound'));


export const App = () => {
  return (
    <BrowserRouter basename='goit-react-hw-05-movies'>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Review />} />
            </Route>
            <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
