import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  getMatchList(): Observable<Match[]>{
    return this.http.get<any>(" https://cors-anywhere.herokuapp.com/" + environment.FOOTBALL_DATA_URL + '/matches', {headers: this.tokenService.getHeaders()}).pipe(
      map(res => res.matches)
    )
  }
  
}
