import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Pokemon} from './pokemon';
import {PokemonService} from "./pokemon.service";

@Component({
  selector: 'delete-pokemon',
  template: `
    <style>
        button {
            margin: 15px;
        }
    </style>
    <h2 class="header center"><i>Êtes-vous sûr de vouloir supprimer {{ pokemon.name }} ?</i></h2>
      <p class="center">
          <img *ngIf="pokemon" [src]="pokemon.picture"/>
      </p>
      <form *ngIf="pokemon" (ngSubmit)="onSubmit()" #pokemonForm="ngForm">
          <div class="row">
              <div class="col s8 offset-s2">
                  <div class="card-panel">
                      <!-- Submit button -->
                      <div class="section center">

                          <button class="waves-effect waves-light btn-large green">
                              OUI
                          </button>

                      <a href="/" class="waves-effect waves-light btn-large red">
                          NON
                      </a>
                      </div>

                  </div>
              </div>
          </div>
      </form>


  `,
})
export class DeletePokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);
  }


  onSubmit() {
    console.log("Submit form !");
    let link = ['/'];
    this.router.navigate(link);
  }
}
