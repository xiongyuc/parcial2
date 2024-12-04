import { Component, OnInit } from '@angular/core';
import { Pacientes } from '../pacientes';
import { PacientesService } from '../pacientes.service';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  pacientes: Array<Pacientes> = [];
  constructor(private PacientesService: PacientesService) { }

  getPacientes(): void {
    this.PacientesService.getPacientes().subscribe((PacientesService) => {
      this.pacientes = this.pacientes;
    });
  }

  ngOnInit() {
    this.getPacientes();
  }

}
