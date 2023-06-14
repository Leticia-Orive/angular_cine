import { Component } from '@angular/core';
import { Cine } from './cine.model';
import { CineService } from './cine.service';
@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css'],
})
export class CineComponent {
  cine: Cine = {
    id: 1,
    nombre: 'Cine ABC',
    cif: '12345678',
    direccion: 'Calle Principal 123',
    email: 'cine@abc.com',
    provincia: 'Ciudad',
    codigoPostal: '12345',
    telefono: '987654321',
  };

  constructor(private cineService: CineService) {}
  guardarCine(): void {
    // Lógica para guardar el cine
    console.log('Cine guardado:', this.cine);
  }
  actualizarCine() {
    this.cineService.actualizarCine(this.cine).subscribe(() => {
      // Realizar acciones después de actualizar el cine
    });
  }
}
