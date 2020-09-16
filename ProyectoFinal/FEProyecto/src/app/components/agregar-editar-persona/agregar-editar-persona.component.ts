import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

 @Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  personas: FormGroup;
  idPersona = 0;
  accion = 'Agregar';
  loading = false;
  persona: Persona;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
              private personaService: PersonaService, private router: Router) { 
    this.personas = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      documento: ['', Validators.required],
      lugarResidencia: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (+this.route.snapshot.paramMap.get('id')> 0){
      this.idPersona = +this.route.snapshot.paramMap.get('id');
    }
  }
 
  ngOnInit(): void {
    this.esEditar();
  }

  guardarPersona(){
    if(this.accion === "Agregar"){
      const persona: Persona = {
        nombre: this.personas.get('nombre').value,
        apellido: this.personas.get('apellido').value,
        tipoDocumento: this.personas.get('tipoDocumento').value,
        documento: this.personas.get('documento').value,
        lugarResidencia: this.personas.get('lugarResidencia').value,
        fechaNacimiento: this.personas.get('fechaNacimiento').value,
        email: this.personas.get('email').value,
        telefono: this.personas.get('telefono').value,
        usuario: this.personas.get('usuario').value,
        password: this.personas.get('password').value,
      };
      this.personaService.guardarPersona(persona).subscribe(data =>{
        this.router.navigate(['/']);
      });
    } else {
      const persona: Persona = {
        id: this.persona.id,
        nombre: this.personas.get('nombre').value,
        apellido: this.personas.get('apellido').value,
        tipoDocumento: this.personas.get('tipoDocumento').value,
        documento: this.personas.get('documento').value,
        lugarResidencia: this.personas.get('lugarResidencia').value,
        fechaNacimiento: this.personas.get('fechaNacimiento').value,
        email: this.personas.get('email').value,
        telefono: this.personas.get('telefono').value,
        usuario: this.personas.get('usuario').value,
        password: this.personas.get('password').value,
      };
      this.personaService.actualizarPersona(this.idPersona, persona).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
    console.log(this.personas);
  }

  esEditar() {
    if (this.idPersona > 0) {
      this.accion ='Editar';
      this.personaService.cargarPersona(this.idPersona).subscribe(data =>{
        this.persona = data;
        this.personas.patchValue({
          nombre: data.nombre,
          apellido: data.apellido,
          tipoDocumento: data.tipoDocumento,
          documento: data.documento,
          lugarResidencia: data.lugarResidencia,
          fechaNacimiento: data.fechaNacimiento,
          email: data.email,
          telefono: data.telefono,
          usuario: data.usuario,
          password: data.password,
        });
      })
    }
  }

}
