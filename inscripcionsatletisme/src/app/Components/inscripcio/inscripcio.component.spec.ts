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
  
});
