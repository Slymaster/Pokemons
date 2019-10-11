import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { InMemoryDataService } from "../in-memory-data.service";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PokemonService
  //implements InMemoryDataService
  {
    constructor(private inMemoryDataService: InMemoryDataService, private httpClient: HttpClient) {

    }

    apiURL = 'http://localhost:5000';


    // retourne tous les pokémons
  getPokemons() {
    return this.httpClient.get<Pokemon[]>(`${this.apiURL}/getPokemonsListe`);
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number) {
    return this.httpClient.get<Pokemon>(`${this.apiURL}/getPokemon/${id}`);




/*    let pokemons = this.getPokemons();

    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }*/
  }

  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insect', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol']
  }

  deletePokemon(id: number) //Observable<void> {
  {
    let pokemons = this.getPokemons();
    console.log("mon id est "+id);
    pokemons.splice(pokemons.indexOf(this.getPokemon(id)),1);
      //return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
      //  .pipe(catchError());
    }
  }
