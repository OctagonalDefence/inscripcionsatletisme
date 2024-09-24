import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcioComponent } from './inscripcio.component';

describe('InscripcioComponent', () => {
  let component: InscripcioComponent;
  let fixture: ComponentFixture<InscripcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcioComponent ]
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

    //checkbox
    const checkbox = fieldset2.querySelector('#checkbox');
    expect(checkbox).toBeTruthy();

   
    //num options
    const options = fieldset2.querySelectorAll('input[type="checkbox"]');
    expect(options.length).toEqual(5);

    //opcions de checkbox
    const option1 = options[0];
    expect(option1).toBeTruthy();
    expect(option1.value).toEqual("100 m llisos");

    const option2 = options[1];
    expect(option2).toBeTruthy();
    expect(option2.value).toEqual("200 m llisos");

    const option3 = options[2];
    expect(option3).toBeTruthy();
    expect(option3.value).toEqual("400 m llisos");

    const option4 = options[3];
    expect(option4).toBeTruthy();
    expect(option4.value).toEqual("800 m llisos");

    const option5 = options[4];
    expect(option5).toBeTruthy();
    expect(option5.value).toEqual("1000 m llisos");

  });
  
});
