import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})
export class ListPersonaComponent implements OnInit {
  listPersonas : Persona[]; 
  loading = false;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.loading = true;
    this.personaService.getListPersona().subscribe(data => {
      this.loading = false;
      this.listPersonas = data;
    });
  }

  delete(id: number){
    this.loading = true;
    this.personaService.deletePersona(id).subscribe(data =>{
      this.cargarPersona()
      this.loading = false;
    })
  }

}
