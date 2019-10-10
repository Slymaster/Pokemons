import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from "./pokemon/mock-pokemons";

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return {
      POKEMONS
    };
  }

}
