import {Injectable } from "@angular/core";
import{HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {PokemonAPI} from "./api";


@Injectable()