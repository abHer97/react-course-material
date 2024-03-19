import { AccountApiDataSource } from '../adapters/data-sources/account-api-data-source';
import { AccountService } from '../adapters/services/account-service';
import { ENV_VARS } from '../../config/env-vars';
import { IAccountService } from '../domain/entities/account-service';
import { sharedDependencies } from '../../shared/presentation/shared-dependencies';

interface IDependencies {
  service?: IAccountService;
}

const dependencies: IDependencies = {};

function createService() {
  const httpClient = sharedDependencies.httpClient;
  const dataSource = new AccountApiDataSource(httpClient, ENV_VARS.accountId);

  return new AccountService(dataSource);
}

export const accountDependencies = {
  get service(): IAccountService {
    if (!dependencies.service) {
      dependencies.service = createService();
    }

    return dependencies.service;
  },
};
