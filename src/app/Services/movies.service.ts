import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  GetMovies():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=65e65b12&s=war');
  }
}
