import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  public label1: string[] = ['Dulce', 'Salado', 'Amargo'];
  public data1 = [
    [350, 450, 100],
  ];
}
