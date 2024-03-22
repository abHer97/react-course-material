import { sharedDependencies } from '../../shared/presentation/shared-dependencies';
import { PersonService } from '../adapters/person-service';
import { PersonApiDataSource } from '../data-source/person-api-data-source';
import { IPersonService } from '../domain/entities/person-service';

interface IDependencies {
  service?: IPersonService;
}

const dependencies: IDependencies = {};

function createService() {
  const httpClient = sharedDependencies.httpClient;
  const dataSource = new PersonApiDataSource(httpClient);
  const service = new PersonService(dataSource);

  return service;
}

export const personDependencies = {
  get service(): IPersonService {
    if (!dependencies.service) {
      dependencies.service = createService();
    }

    return dependencies.service;
  },
};
