import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit(): void {}

  public buscar(): void {
    const value = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';
  }
}
