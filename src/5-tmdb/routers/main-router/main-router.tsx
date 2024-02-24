import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from '../../home/home-page';

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}
