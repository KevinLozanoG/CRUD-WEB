import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  myAppUrl = 'https://localhost:44386/';
  myApiUrl = 'api/Persona/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getListPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.myAppUrl + this.myApiUrl);
  }

  deletePersona(id: number): Observable<Persona>{
    return this.http.delete<Persona>(this.myAppUrl+ this.myApiUrl + id);
  }

  guardarPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.myAppUrl + this.myApiUrl, persona, this.httpOptions);
  }

  cargarPersona(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.myAppUrl + this.myApiUrl + id);
  }

  actualizarPersona(id: number, persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(this.myAppUrl + this.myApiUrl+  id , persona, this.httpOptions);
  }
}
