import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs'
import { IHighlight } from './highlight';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(private httpClient: HttpClient) { }

  getHighlights(): Observable<IHighlight[]> {
    const params = new HttpParams({ fromString: "token=" + environment.HIGHLIGHT_TOKEN });
    return this.httpClient.get<{ response: IHighlight[] }>(environment.HIGHLIGHT_URL, { params: params }).pipe(
      map(res => res.response)
    )
  }
}
