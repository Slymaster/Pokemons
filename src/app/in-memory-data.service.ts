import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONS } from "./pokemon/mock-pokemons";

export class InMemoryDataService implements InMemoryDbService {

  baseUrl = 'http://127.0.0.1:5000/';

  createDb() {
    return {
      //POKEMONS = baseUrl+'getPokemonsListe';
    };
  }

}
