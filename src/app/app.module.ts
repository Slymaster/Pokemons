import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTypeColorPipe } from './pokemon/pokemon-type-color.pipe';
import { ListPokemonComponent } from './pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonService } from "./pokemon/pokemon.service";

import { PokemonFormComponent } from "./pokemon/pokemon-form.component";
import { FormsModule } from "@angular/forms";
import { EditPokemonComponent } from "./pokemon/edit-pokemon.component";
import { HttpClientModule } from "@angular/common/http";
import {InMemoryDataService} from "./in-memory-data.service";
import {DeletePokemonComponent} from "./pokemon/delete-pokemon.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    DeletePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokemonService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
