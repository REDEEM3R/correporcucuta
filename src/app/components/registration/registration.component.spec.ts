import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



// <div class="main-container">
//   <div class="form-container">
//     <h1 style="height: 2rem;">INSCRIBETE</h1>
//     <img class="charity-cause" src="../../../assets/images/fundacion-cancer-de-ninos.png">
//     <div class="corner-form">
//         <div class="find-me" *ngIf="finishedRegistration === false && pendingRegistration.status === undefined && pendingRegistration.data === undefined">
//             <label for="socialsecurity name">Ingresa tu documento de identidad para comenzar el registro</label>
//             <input name="socialsecurity" type="text"  [(ngModel)]="document2search"  placeholder="Documento de identidad" >
//             <div (click)="getUnfinishedTransaction(document2search)">COMENZAR</div>
//             <br><br>
//             <h2 style="font-size: 0.8rem;">  Da click en el siguiente enlace para conocer el <a href="../../../assets/REGLAMENTO CORRE POR CÚCUTA.pdf" target="blank"><span style="text-decoration: underline;color: white;">Reglamento de la carrera</span></a></h2>
//         </div>
//         <div class="find-me" *ngIf="finishedRegistration === false && pendingRegistration.status === true && pendingRegistration.data !== undefined">
//             <div class="fourth" style="width: 10%;cursor: pointer;display: block;position: absolute;right: 2rem;bottom: 0;height: 10vh;">
//                 Si aun no has pagado, da click en el siguiente link.
//                 <!-- <div *ngIf="pendingRegistration.data.distance === 5" style="margin: 1.2rem;"><a href="https://biz.payulatam.com/L0cd688D7B2ADC7" target="blank" style="bottom: 0;left: 0;margin: 0 auto;margin: 2rem;"><img style="margin: 0 auto;" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></div>
//                 <div *ngIf="pendingRegistration.data.distance === 10" style="margin: 1.2rem;"><a href="https://biz.payulatam.com/L0cd688B16F3267" target="blank" style="bottom: 0;left: 0;margin: 0 auto;margin: 2rem;"><img style="margin: 0 auto;" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></div>
//                 <div *ngIf="pendingRegistration.data.distance === 21" style="margin: 1.2rem;"><a href="https://biz.payulatam.com/L0cd688769F0699" target="blank" style="bottom: 0;left: 0;margin: 0 auto;margin: 2rem;"><img style="margin: 0 auto;" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></div> -->
//                 <div *ngIf="pendingRegistration.data.registrationType === 0" style="margin: 1.2rem;"><a href="https://biz.payulatam.com/L0cd688D7B2ADC7" target="blank" style="bottom: 0;left: 0;margin: 0 auto;margin: 2rem;"><img style="margin: 0 auto;" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></div>
//                 <div *ngIf="pendingRegistration.data.registrationType === 1" style="margin: 1.2rem;"><a href="https://biz.payulatam.com/L0cd688B16F3267" target="blank" style="bottom: 0;left: 0;margin: 0 auto;margin: 2rem;"><img style="margin: 0 auto;" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></div>
//                 <div *ngIf="pendingRegistration.data.registrationType === 2" style="margin: 1.2rem;"><a href="https://biz.payulatam.com/L0cd688769F0699" target="blank" style="bottom: 0;left: 0;margin: 0 auto;margin: 2rem;"><img style="margin: 0 auto;" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></div>
//             </div>
//             <h1 style="font-size: 1rem;text-align: center;"> Hola, <span style="font-size: 1.2rem;color: white;">{{pendingRegistration.data.name}}</span><br><br> <span *ngIf="pendingRegistration.data.gender === 'M'" style="color: white;">Estas registrado  para la carrera {{pendingRegistration.data.distance}}K</span><span style="color: white;" *ngIf="pendingRegistration.data.gender === 'F'">Estas registrada para la carrera {{pendingRegistration.data.distance}}K</span><br><br>Seras notificado via email cuando el pago haya sido procesado. <br><br> <span style="text-decoration: underline;color: white;font-size: 0.8rem;">El proceso de verificacion del pago toma de 24h a 36h.</span>
//            </h1>
//         </div>
//         <div *ngIf="finishedRegistration === false && pendingRegistration.status === false && pendingRegistration.data === undefined">
//             <h1 style="font-size: 1.2rem;height: 1.4rem;color: white;width: max-content;margin: 0 auto;">Datos Personales</h1>
//             <div class="first" style="width: 30%;position: relative;">
//                 <div class="column is-5">
//                     <label for="email" style="margin-right: 1rem;">Distancia</label>
//                     <div>
//                         <div (click)="updateSelectedDistance(21)" class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.distance === 21}">21K</div>
//                         <div (click)="updateSelectedDistance(10)"  class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.distance === 10}">10K</div>
//                         <div (click)="updateSelectedDistance(5)"  class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.distance === 5}">5K</div>
//                     </div>
//                 </div>
//                 <div class="column is-5">
//                     <label for="email" style="margin-right: 1rem;">Talla</label>
//                     <div>
//                         <div (click)="updateSelectedSize('S')" class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.size === 'S'}">S</div>
//                         <div (click)="updateSelectedSize('M')"  class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.size === 'M'}">M</div>
//                         <div (click)="updateSelectedSize('L')"  class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.size === 'L'}">L</div>
//                         <div (click)="updateSelectedSize('XL')"  class="button-distance small" [ngClass]="{'selected': newSignup && newSignup.size === 'XL'}">XL</div>
//                     </div>

//                 </div>
//                 <div class="column is-5" style="height: max-content;">
//                     <label for="email" style="margin-right: 1rem;">Edad y Categoria</label>
//                     <div style="width: 100%;" *ngIf="newSignup && newSignup.distance === 5">
//                         <div (click)="updateSelectedAge(0)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 0}">RECREATIVA - SIN LIMITE DE EDAD</div>
//                     </div>
//                     <div style="width: 100%;"  *ngIf="newSignup && newSignup.distance === 10">
//                         <div (click)="updateSelectedAge(1)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 1}">JUVENIL - 18 A 19 AÑOS</div>
//                         <div (click)="updateSelectedAge(2)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 2}">ABIERTA - 20 A 39 AÑOS</div>
//                         <div (click)="updateSelectedAge(3)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 3}">VETERANOS - 40 A 49 AÑOS</div>
//                         <div (click)="updateSelectedAge(4)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 4}">PLUS - 50 AÑOS O MÁS</div>
//                     </div>
//                     <div  style="width: 100%;" *ngIf="newSignup && newSignup.distance === 21">
//                         <div (click)="updateSelectedAge(5)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 5}">ABIERTA - 20 A 39 AÑOS</div>
//                         <div (click)="updateSelectedAge(6)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 6}">VETERANOS - 40 A 49 AÑOS</div>
//                         <div (click)="updateSelectedAge(7)" class="button-distance" [ngClass]="{'selected': newSignup && newSignup.age === 7}">PLUS - 50 AÑOS O MÁS</div>
//                     </div>


//                 </div>

//                 <div class="column is-5">
//                     <label for="email" style="margin-right: 1rem;">Tipo de Sangre</label>
//                     <div  style="width: 100%;">
//                         <div (click)="updateSelectedBloodType('A+')" class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'A+'}">A+</div>
//                         <div (click)="updateSelectedBloodType('A-')"  class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'A-'}">A-</div>
//                         <div (click)="updateSelectedBloodType('B+')" class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'B+'}">B+</div>
//                         <div (click)="updateSelectedBloodType('B-')"  class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'B-'}">B-</div>
//                         <div (click)="updateSelectedBloodType('O+')" class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'O+'}">O+</div>
//                         <div (click)="updateSelectedBloodType('O-')"  class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'O-'}">O-</div>
//                         <div (click)="updateSelectedBloodType('AB+')" class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'AB+'}">AB+</div>
//                         <div (click)="updateSelectedBloodType('AB-')"  class="button-distance small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.bloodType === 'AB-'}">AB-</div>
//                     </div>
//                 </div>
//                 <div class="column is-5" style="width: max-content;">
//                     <label for="email" style="margin-right: 1rem;">Genero</label>
//                     <div>
//                         <div (click)="updateSelectedGender('M')" class="button-distance  small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.gender === 'M'}">M</div>
//                         <div (click)="updateSelectedGender('F')"  class="button-distance  small" style="padding: 0.2rem;" [ngClass]="{'selected': newSignup && newSignup.gender === 'F'}">F</div>
//                     </div>
//                 </div>

//             </div>

//             <div class="second" style="width: 30%;position: relative;">
//                 <div class="column is-5">
//                     <label for="identification" >Documento de Identidad</label>
//                     <input name="identification" type="number" placeholder="Numero de Cedula" [(ngModel)]="newSignup.identity_document" >
//                 </div>
//                 <div class="column is-5">
//                     <label for="socialsecurity name">EPS o Seguro</label>
//                     <input name="socialsecurity" type="text"  [(ngModel)]="newSignup.eps"  placeholder="Tu EPS o seguro" >
//                 </div>
//                 <div class="column is-5 name">
//                     <label for="fullname" >Nombre y Apellido</label>
//                     <input name="fullname" type="text"  [(ngModel)]="newSignup.name"  placeholder="Tu nombre y apellido" >
//                 </div>
//                 <div class="column is-5 name">
//                     <label for="email" >Correo</label>
//                     <input name="email" type="email" placeholder="tucorreo@mail.com" [(ngModel)]="newSignup.email" >
//                 </div>
//                 <div class="column is-5 name">
//                     <label for="instagram" >Instagram</label>
//                     <input name="instagram" type="instagram" placeholder="@miinstagram" [(ngModel)]="newSignup.instagram" >
//                 </div>
//                 <div class="column is-5">
//                     <label for="phonenumber" style="margin-right: 1rem;">Número Celular</label>
//                     <input name="phonenumber" type="number" placeholder="Numero de Teléfono" [(ngModel)]="newSignup.phone_number" >
//                 </div>

//             </div>
//             <div class="third" style="width: 10%;position: relative;">
//                 <h1 style="font-size: 1.2rem;height: 1.4rem;color: white;width: max-content;margin: 0 auto;">Contacto de Emergencia</h1>
//                 <div class="column is-5 name">
//                     <label for="emergency-name" >Nombre y apellido</label>
//                     <input name="emergency-name" type="text"  [(ngModel)]="newSignup.contact.name"  placeholder="Nombre y apellido de tu contacto" >
//                 </div>
//                 <div class="column is-5">
//                     <label for="emergency-phonenumber" style="margin-right: 1rem;">Número Celular</label>
//                     <input name="emergency-phonenumber" type="number" placeholder="Numero de Teléfono" [(ngModel)]="newSignup.contact.phone_number" >
//                 </div>
//                 <div class="column is-5 name">
//                     <label for="emergency-relation" >Relacion</label>
//                     <input name="emergency-relation" type="text"  [(ngModel)]="newSignup.contact.relation"  placeholder="Padre, madre, hermano, etc." >
//                 </div>
//             </div>
//             <div class="fourth" style="width: 10%;cursor: pointer;display: block;position: absolute;right: 2rem;bottom: 0;">
//                 <h2 style="font-size: 0.8rem;"> <input type="checkbox"> Acepto los terminos y condiciones consignados en el <a href="../../../assets/REGLAMENTO CORRE POR CÚCUTA.pdf" target="blank"><span style="text-decoration: underline;color: white;">Reglamento de la carrera</span></a></h2>
//                 <h1 *ngIf="newSignup && newSignup.distance === undefined" style="font-size: 1rem;padding: 0.25rem;width: 200px;color: white;background: rgba(255, 255, 255, 0.185);" [ngClass]="{'disabled':  newSignup.identity_document === undefined || newSignup.bloodType === undefined || newSignup.eps === undefined || newSignup.size === undefined ||  newSignup.age === undefined ||  newSignup.gender === undefined ||  newSignup.distance === undefined ||  newSignup.email === undefined ||  newSignup.name === undefined}">Completa el formulario</h1>
//                 <h1 *ngIf="newSignup && newSignup.distance === 21" style="font-size: 1rem;padding: 0.25rem;width: 200px;color: white;background: rgba(255, 255, 255, 0.185);" [ngClass]="{'disabled':  newSignup.identity_document === undefined || newSignup.bloodType === undefined || newSignup.eps === undefined || newSignup.size === undefined ||  newSignup.age === undefined ||  newSignup.gender === undefined ||  newSignup.distance === undefined ||  newSignup.email === undefined ||  newSignup.name === undefined}" (click)="readSignup(newSignup)"><a href="https://biz.payulatam.com/L0cd688769F0699" target="blank" style="position: absolute;bottom: 0;left: 0;"><img src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></h1>
//                 <h1 *ngIf="newSignup && newSignup.distance === 10" style="font-size: 1rem;padding: 0.25rem;width: 200px;color: white;background: rgba(255, 255, 255, 0.185);" [ngClass]="{'disabled':  newSignup.identity_document === undefined || newSignup.bloodType === undefined || newSignup.eps === undefined || newSignup.size === undefined ||  newSignup.age === undefined ||  newSignup.gender === undefined ||  newSignup.distance === undefined ||  newSignup.email === undefined ||  newSignup.name === undefined}" (click)="readSignup(newSignup)"><a href="https://biz.payulatam.com/L0cd688B16F3267" target="blank" style="position: absolute;bottom: 0;left: 0;"><img src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></h1>
//                 <h1 *ngIf="newSignup && newSignup.distance === 5" style="font-size: 1rem;padding: 0.25rem;width: 200px;color: white;background: rgba(255, 255, 255, 0.185);" [ngClass]="{'disabled':  newSignup.identity_document === undefined || newSignup.bloodType === undefined || newSignup.eps === undefined || newSignup.size === undefined ||  newSignup.age === undefined ||  newSignup.gender === undefined ||  newSignup.distance === undefined ||  newSignup.email === undefined ||  newSignup.name === undefined}" (click)="readSignup(newSignup)"><a href="https://biz.payulatam.com/L0cd688D7B2ADC7" target="blank" style="position: absolute;bottom: 0;left: 0;"><img src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png"></a></h1>
//             </div>
//         </div>
//         <div *ngIf="finishedRegistration === true">
//             <h1 style="padding:0.4rem">Gracias por Registrarte. </h1>
//             <h1 style="font-size: 1rem;color: white;padding: 0.4rem;">Finaliza el proceso de pago en el link de PayU. El proceso de verificacion del pago toma de 24h a 36h</h1>
//         </div>
//     </div>

// </div>

// </div>
