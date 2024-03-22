import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { HomePage } from '../../home/home-page';
import { MovieDetails } from '../../movies/view/components/movie-details/movie-details';
import { PersonDetailsPage } from '../../person/view/person-details-page';

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/person/:id' element={<PersonDetailsPage />} />
      </Routes>
    </Router>
  );
}
