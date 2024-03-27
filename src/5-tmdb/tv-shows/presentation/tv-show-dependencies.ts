import { sharedDependencies } from '../../shared/presentation/shared-dependencies';
import { TvShowApiDataSource } from '../adapters/data-sources/tv-show-api-data-source';
import { TvShowService } from '../adapters/services/tv-show-service';
import { ITvShowService } from '../domain/entities/tv-show-service';

interface IDependencies {
  service?: ITvShowService;
}

const dependencies: IDependencies = {};

function createService() {
  const dataSource = new TvShowApiDataSource(sharedDependencies.httpClient);
  const service = new TvShowService(dataSource);

  return service;
}

export const tvShowDependencies = {
  get service(): ITvShowService {
    if (!dependencies.service) {
      dependencies.service = createService();
    }

    return dependencies.service;
  },
};
