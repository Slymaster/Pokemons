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

  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

  goEdit(pokemon): void {
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

  goDelete(pokemon): void {
    let link = ['/pokemon/delete', pokemon.id];
    this.router.navigate(link);
  }

}
