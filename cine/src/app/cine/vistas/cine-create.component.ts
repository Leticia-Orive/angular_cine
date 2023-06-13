import { Component } from '@angular/core';
import { Cine } from '../cine.model';
import { CineService } from '../cine.service';

@Component({
  selector: 'app-cine-create',
  templateUrl: './cine-create.component.html',
  styleUrls: ['./cine-create.component.css'],
})
export class CineCreateComponent {
  cine: Cine = {
    id: 0,
    nombre: '',
    cif: '',
    direccion: '',
    email: '',
    provincia: '',
    codigoPostal: 0,
    telefono: 0,
  };
  constructor(private cineService: CineService) {}

  crearCine() {
    this.cineService.crearCine(this.cine).subscribe(() => {});
  }
}
