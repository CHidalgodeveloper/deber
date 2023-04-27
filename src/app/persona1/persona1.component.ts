import { Component } from '@angular/core';

@Component({
  selector: 'app-persona1',
  templateUrl: './persona1.component.html',
  styleUrls: ['./persona1.component.css']
})
export class Persona1Component {

  data: any=[
  {
    nombre: "juan",
    profesion: "medico",
    edad: 30,
    genero: "m"
  },
  {
    nombre:"ana",
    profesion: "enfermera",
    edad: 25
  }
]

}
