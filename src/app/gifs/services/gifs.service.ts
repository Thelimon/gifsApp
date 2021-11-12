import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  get historial(): any {
    return [...this._historial];
  }

  public buscarGifs(query: string) {
    this._historial.unshift(query);
  }
}
