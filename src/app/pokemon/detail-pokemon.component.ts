import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Pokemon} from './pokemon';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  providers: [PokemonService]
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();

    let id = +this.route.snapshot.paramMap.get('id');
    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == id) {
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
