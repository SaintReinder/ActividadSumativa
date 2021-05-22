import { Component, OnInit } from '@angular/core';
import {Notas} from '../../interfaces/notas';
import {ServicioNotasService} from '../../servicio-notas.service';

@Component({
  selector: 'app-vernotas',
  templateUrl: './vernotas.component.html',
  styleUrls: ['./vernotas.component.scss']
})

export class VernotasComponent implements OnInit {

  ListaNotas: Array<Notas>=[];
  constructor(private ServicioNotas:ServicioNotasService) { }

  ngOnInit(): void {
    this.ServicioNotas.Consultar().subscribe(datos=>{
      for(let i = 0; i < datos.length; i++){
        this.ListaNotas.push(datos[i]);

      }
      //console.log(datos);//

    })
  }
}