import {Component, OnInit} from '@angular/core';
import {Pokemon} from './pokemon';
import {Router} from '@angular/router';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;

  constructor(private router: Router, private pokemonService: PokemonService) {  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('Vous avez selectionné ' + pokemon.name);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
