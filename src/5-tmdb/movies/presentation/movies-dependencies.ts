import { IMovieService } from '../domain/entities/movie-service';
import { MovieDataSource } from '../adapters/data/movie-data-source';
import { MovieService } from '../adapters/service/movie-service';
import { sharedDependencies } from '../../shared/presentation/shared-dependencies';

interface IDependencies {
  service?: IMovieService;
}

const dependencies: IDependencies = {};

function createService() {
  const dataSource = new MovieDataSource(sharedDependencies.httpClient);
  const service = new MovieService(dataSource);

  return service;
}

export const moviesDependencies = {
  get service(): IMovieService {
    if (!dependencies.service) {
      dependencies.service = createService();
    }

    return dependencies.service;
  },
};
