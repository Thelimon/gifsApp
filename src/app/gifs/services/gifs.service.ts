import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public resultados: Gif[] = [];
  private _historial: string[] = [];
  private apiKEY: string = 'RjOvkM9rpd1r1DBAX7HHuw86Itpu1Q1u';

  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  public buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=RjOvkM9rpd1r1DBAX7HHuw86Itpu1Q1u&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        this.resultados = resp.data;
      });
  }
}
