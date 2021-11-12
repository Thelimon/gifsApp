import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  public buscar(): void {
    const value = this.txtBuscar.nativeElement.value;

    if( value.trim().length === 0){
      return ;
    }
    
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value = '';
  }
}
