import { useEffect } from 'react';

import { Page } from '../components/page/page';

export function HomePage() {
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/550?api_key=8c066805d5877f724169c67bbe553dd1')
      .then((resp) => resp.json())
      .then((data) => {
        console.log({ data });
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return <Page documentTitle='Inicio'>Inicio</Page>;
}
