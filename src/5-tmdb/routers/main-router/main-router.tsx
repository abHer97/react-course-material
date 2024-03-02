import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from '../../home/home-page';
import { MovieDetails } from '../../movies/view/components/movie-details/movie-details';

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
