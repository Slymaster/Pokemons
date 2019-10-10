import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
import { ListPokemonComponent } from './pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {PokemonService} from "./pokemon/pokemon.service";

import { PokemonFormComponent } from "./pokemon/pokemon-form.component";
import { FormsModule } from "@angular/forms";
import { EditPokemonComponent } from "./pokemon/edit-pokemon.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
