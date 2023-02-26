import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PokemonAPI } from "./api";
import { MyServiceService } from "./fetchdata.service";

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    providers: [MyServiceService]
})

export class FetchdataComponent implements OnDestroy, OnInit{

    pokemons: PokemonAPI = { 
        name: '',
        id: 0,
        weight: 0,
        height: 0,
        sprites: { front_default: '' },
        stats: [
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 }
        ]
      };

      wildPokemons: PokemonAPI = { 
        name: '',
        id: 0,
        weight: 0,
        height: 0,
        sprites: { front_default: '' },
        stats: [
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 },
          { base_stat: 0 }
        ]
      };
      
    error: string = ""
    sub: Subscription | undefined

    constructor(private Fetchdata: MyServiceService){}

    ngOnInit(): void {
        this.sub = this.Fetchdata.getPokemon().subscribe({
          next: x => this.pokemons = x, 
          error: err => this.error = err
        });
      }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
    updatePokemon() {
        this.sub = this.Fetchdata.getPokemon().subscribe({
          next: x => this.wildPokemons = x, 
          error: err => this.error = err
        });
    }
}
