import Layout from './components/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const AddMoviePage = lazy(() => import('./pages/AddMoviePage/AddMoviePage.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage.jsx'))
const EditMoviePage = lazy(() => import('./pages/EditMoviePage/EditMoviePage.jsx'));
// const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(
  () => import('./pages/NotFoundPage/NotFoundPage.jsx')
);



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add-movie" element={<AddMoviePage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />} />
        <Route path="movies/edit/:id" element={<EditMoviePage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
      </Route>
    </Routes>
  );
}