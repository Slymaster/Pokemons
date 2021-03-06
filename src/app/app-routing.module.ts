import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPokemonComponent} from './pokemon/list-pokemon.component';
import {DetailPokemonComponent} from './pokemon/detail-pokemon.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {EditPokemonComponent} from "./pokemon/edit-pokemon.component";
import {DeletePokemonComponent} from "./pokemon/delete-pokemon.component";

// routes
const appRoutes: Routes = [
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemon/edit/:id', component: EditPokemonComponent},
  {path: 'pokemon/delete/:id', component: DeletePokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
