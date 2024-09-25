import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcio',
  templateUrl: './inscripcio.component.html',
  styleUrls: ['./inscripcio.component.scss']
})
export class InscripcioComponent {
  registrationForm: FormGroup;
  dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
  dniLetter: string = '';
  events: any;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], 
      name: ['', Validators.required],
      federatedCode: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]], 
      email: ['', [Validators.required, Validators.email]], 
      distances: this.fb.group({
        '100m': [false],
        '200m': [false],
        '400m': [false],
        '800m': [false],
        '1000m': [false]
      }, { validator: this.validateDistance })
    });

    this.registrationForm.get('dni')?.valueChanges.subscribe(value => {
      if (value.length === 8) {
        this.calculateDNILetter(value);
      } else {
        this.dniLetter = '';
      }
    });
  }

    calculateDNILetter(dni: string) {
    const dniNumber = parseInt(dni, 10);
    const letterIndex = dniNumber % 23;
    this.dniLetter = this.dniLetters[letterIndex];
  }

  validateDistance(group: FormGroup) {
    const totalDistance = Object.keys(group.value).reduce((sum, key) => {
      if (group.value[key]) {
        return sum + parseInt(key);
      }
      return sum;
    }, 0);
    
    return totalDistance <= 1100 ? null : { invalidDistance: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
