import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcioComponent } from './inscripcio.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('InscripcioComponent', () => {
  let component: InscripcioComponent;
  let fixture: ComponentFixture<InscripcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcioComponent ],
      imports: [ ReactiveFormsModule ] 
    
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should have a h1 called Inscripcio de proves d'atletisme", () => {
        //h1
        const h1 = fixture.nativeElement.querySelector('h1');
        expect(h1.textContent).toEqual("Inscripcio de proves d'atletisme");

  });

  it('should validate all the inputs in the first fieldset with its conditions', () => {

    //form
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();

    //fieldset1
    const fieldset1 = fixture.nativeElement.querySelector('fieldset');
    expect(fieldset1).toBeTruthy();

    //h3
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toEqual("Dades identificatives");

    //DNI
    const dni = fixture.nativeElement.querySelector('#dni');
    expect(dni).toBeTruthy();

    //Codi de federat
    const codi = fixture.nativeElement.querySelector('#codi');
    expect(codi).toBeTruthy();

    //Nom i cognoms
    const nom = fixture.nativeElement.querySelector('#nom');
    expect(nom).toBeTruthy();

    //Telefon
    const telefon = fixture.nativeElement.querySelector('#telefon');
    expect(telefon).toBeTruthy();

    //Email
    const email = fixture.nativeElement.querySelector('#email');
    expect(email).toBeTruthy();
    
  });

  it('should validate all the inputs in the second fieldset with its conditions', () => {

    //fielset2
    const fieldset2 = fixture.nativeElement.querySelectorAll('fieldset')[1];
    expect(fieldset2).toBeTruthy();

    //h3
    const h3 = fieldset2.querySelector('h3');
    expect(h3.textContent).toEqual("Inscripcio");

    //p 
    const p = fieldset2.querySelector('p');
    expect(p.textContent).toEqual("Un atleta no es pot inscriure a mes de 1100 metres:");

    //num checkbox
    const num = fieldset2.querySelectorAll('input[type="checkbox"]').length;
    expect(num).toEqual(5);

    //labels de checkbox
    const labels = fieldset2.querySelectorAll('label');
    expect(labels[0].textContent).toEqual("100 m llisos");
    expect(labels[1].textContent).toEqual("200 m llisos");
    expect(labels[2].textContent).toEqual("400 m llisos");
    expect(labels[3].textContent).toEqual("800 m llisos");
    expect(labels[4].textContent).toEqual("1000 m llisos");
  });

  it('should have a submit button labelled Inscripció', () => {
    const submit = fixture.nativeElement.querySelector('button');
    expect(submit.textContent).toEqual("Inscripció");
  });

  it('should autowrite the correct DNI letter in the input', () => {
    const dni = component.registrationForm.get('dni');
    if (dni) {
      dni.setValue('12345678');
      expect(dni.value).toEqual('12345678Z');
    }
    
    
  });

  it('should prevent selection of distances greater than 1100 meters', () => {
    const distances = component.registrationForm.get('distances');
    if (distances) {
      distances.get('100m')?.setValue(true);
      distances.get('400m')?.setValue(true);
      distances.get('800m')?.setValue(true);
      
      expect(distances.hasError('invalidDistance')).toBeTruthy();
    }
  });
    

  
});
