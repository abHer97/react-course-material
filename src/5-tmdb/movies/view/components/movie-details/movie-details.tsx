import { useParams } from 'react-router-dom';

import { Page } from '../../../../components/page/page';

export function MovieDetails() {
  const params = useParams();
  console.log({ params });

  return <Page documentTitle='Detalles de pelicula'></Page>;
}
