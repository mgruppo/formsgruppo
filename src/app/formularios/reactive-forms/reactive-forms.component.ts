import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  //email
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      apellido: ['', [Validators.required]],
      email: this.emailControl,
      localizacion: this.formBuilder.group({
        ciudad: [''],
        direccion_1: [''],
        provincia: [''],
        zip: [''],
      }),
    });
  }

  //nombre
  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }
  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }
  //apellido
  get apellidoControl(): AbstractControl | null {
    return this.registerForm.get('apellido');
  }
  get apellidoControlIsInvalid(): boolean {
    return !!(this.apellidoControl?.invalid && this.apellidoControl.touched);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      alert('El formulario es valido');
    } else {
      alert('El formulario no es valido');
    }
  }
}
