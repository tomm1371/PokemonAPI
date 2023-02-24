import {Injectable } from "@angular/core";
import{HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {PokemonAPI} from "./api";


@Injectable({
    providedIn: 'root'
  })
  export class MyServiceService {
    private header = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }
  
  
    getPokemon(): Observable<PokemonAPI> {
        const max = 151;
        const min = 1;
        const id = Math.floor(Math.random() * (max - min + 1)) + min;       
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        this.header.append('Content-Type', 'application/json')
        return this.http.get<PokemonAPI>(url, {headers:this.header}).pipe(
        tap(data => console.log('all;', JSON.stringify(data))), 
        catchError(this.handleError)
        );
    
  
  
    }
    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError('Something went wrong. Please try again later.');
      }
       
        
      
      
    }
  