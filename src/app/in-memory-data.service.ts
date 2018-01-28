import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as data from '../company_data.json';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {data}
  }
}
