import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { IHighlight } from '../highlight';


@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(private httpClient: HttpClient) { }

  getHighlights(): Observable<IHighlight[]> {
   return this.httpClient.get<{response: IHighlight[]}>('./assets/response.json').pipe(
    map(res => res.response)
   )
  }
}
