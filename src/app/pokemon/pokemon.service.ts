import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { InMemoryDataService } from "../in-memory-data.service";

@Injectable()
export class PokemonService
  //implements InMemoryDataService
  {
    constructor(private inMemoryDataService: InMemoryDataService) {

    }

  // retourne tous les pokémons
  getPokemons() {
    return this.inMemoryDataService.createDb().POKEMONS;
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol']
  }
}
