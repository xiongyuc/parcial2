import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacientes } from './pacientes';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {
private apiUrl:string = environment.baseUrl;

constructor(private http: HttpClient) { }

getPacientes(): Observable<Pacientes[]> {
  return this.http.get<Pacientes[]>(this.apiUrl);

}

getPacientesMenores(): Observable<Pacientes[]> {
  return this.http.get<Pacientes[]>(this.apiUrl).pipe(
    map(pacientes => pacientes.filter(paciente => paciente.edad < 2))
  );

}
}