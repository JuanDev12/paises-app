import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises!: Country[];

  constructor(private paisService: PaisService) {}

  getClase(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string): void {
    if (region !== this.regionActiva) {
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarPaisesByRegion(region).subscribe((paises) => {
        this.paises = paises;
      });
    }
  }
}
