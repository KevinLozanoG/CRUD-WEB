import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrls: ['./ver-persona.component.css']
})
export class VerPersonaComponent implements OnInit {
  loading = false;
  persona : Persona;
  idPersona: number;
  constructor(private personaService: PersonaService, private route: ActivatedRoute) { 
    this.idPersona = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarPersona(); 
  }

  cargarPersona(){
    this.loading = true;
    this.personaService.cargarPersona(this.idPersona).subscribe(data =>{
      this.loading = false;
      this.persona = data;
    })
  }

}
