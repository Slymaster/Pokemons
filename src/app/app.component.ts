import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { POKEMONS } from './pokemon/mock-pokemons';
/*
import Swal from 'sweetalert2';
import {all} from "codelyzer/util/function";
*/

@Component({
  selector: 'pokemon-app',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}

/*private title = 'Pokemons';
protected pokemons: Pokemon[];
private value = '';
private age = 19;
private showInfos: boolean;
private pic: string;
private hp: number;
private cp: number;
private types: Array<string>;
private name: string;*/

/*  showModal(){
    Swal({
      title: 'Success',
      text: 'Nice',
      type: 'error'
    })
  }*/


/*onClick(pokemon: Pokemon) {}*/
  /*
  this.name = pokemon.name;
  this.pic = pokemon.picture;
  this.hp = pokemon.hp;
  this.cp = pokemon.cp;
  this.types = pokemon.types;
  */
  /*let myDialog:any = <any>document.getElementById("myDialog");
  myDialog.showModal();*/


/*
ngOnInit(): void {

  this.pokemons = POKEMONS;
}
}
*/

/*
  selectPokemon(pokemon:Pokemon) {
    alert("cliqué sur"+pokemon.name);
  }
 */

/*  onKey(event: any) {
    console.log("ok");
    this.value = 'Bonjour ' + event.target.value;
  }*/



/**
 * Permet d'obtenir la couleur d'un type de pokemon
 * @param pokemon le pokemon correspondant
 */
/*getColor(type:Array<string>) {
  switch(type) {
    case "Plante":
      return "green";
    case "Feu":
      return "red";
    case "Eau":
      return "blue";
    case "Insecte":
      return "lime";
    case "Normal":
      return "cyan darken-4";
    case "Electrik":
      return "yellow";
    case "Poison":
      return "indigo"
    case "Vol":
      return "cyan lighten-5"
    case "Fée":
      return "blue accent-1"
  }

}*/


