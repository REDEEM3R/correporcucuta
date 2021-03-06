import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




// <div class="paralax-background home">
//     <img src="../../../assets/images/sport-running-correporcucuta.com.png">

// </div>

// <div style="opacity:0;position: fixed;">
//     <ul>
//         <li>Carreara 2020</li>
//         <li>Corre Por Cucuta</li>
//         <li>Corre 21K</li>
//         <li>Corre 10K</li>
//         <li>Corre 5K</li>
//         <li>Podio y Premios</li>
//         <li>Reglamento de la Carrera</li>
//         <li>Corre Por Cucuta - Patrocinadores</li>
//         <li>Corre Por Cucuta - Aliados</li>
//     </ul>
// </div>



// <div class="home-container">


//     <div>
//         <h2 class="upper-subtitle">JUNIO 28 - 2020</h2>
//         <h1 class="main-title">
//             MEDIA MARATÓN CÚCUTA
//         </h1>
//         <h2 class="lighter-subtitle">COLOMBIA</h2>
//         <!-- <h1 class="secondary-title">
//             INSCRIPCIONES ABIERTAS A PARTIR DEL 10 DE MARZO
//         </h1> -->
//     </div>
//     <div class="casi-listos">
//         <svg class="Rectangle_5_">
//             <linearGradient id="Rectangle_5_" spreadMethod="pad" x1="0.5" x2="0.5" y1="0" y2="1">
//                 <stop offset="0" stop-color="#ff0051" stop-opacity="1"></stop>
//                 <stop offset="1" stop-color="#029ff2" stop-opacity="1"></stop>
//             </linearGradient>
//             <rect fill="url(#Rectangle_5_)" id="Rectangle_5_" rx="0" ry="0" x="0" y="0" width="5" height="255">
//             </rect>
//         </svg>
//         <h1>YA CASI ESTAMOS LISTOS PARA QUE CORRAS 21K</h1>

//             <div class="button">
//                 <a href="acerca-de-la-carrera">
//                     <div class="inner-button">
//                         <h1>
//                             VER MÁS
//                         </h1>
//                     </div>
//                 </a>
//             </div>
//     </div>

//     <div (click)="navigate('acerca-de-la-carrera/21-kilometros')" class="distances-container">
//         <div class="distance-ticket">
//             <div class="left-dots"></div>
//             <div class="main-content">
//                 <div class="first">CORRE POR CUCUTA</div>
//                 <div class="second">21K</div>
//             </div>
//             <div class="details-button">
//                 DETALLES
//             </div>
//         </div>
//         <div (click)="navigate('acerca-de-la-carrera/10-kilometros')" class="distance-ticket">
//             <div class="left-dots"></div>
//             <div class="main-content">
//                 <div class="first">CORRE POR CUCUTA</div>
//                 <div class="second">10K</div>
//             </div>
//             <div class="details-button">
//                 DETALLES
//             </div>
//         </div>
//         <div (click)="navigate('acerca-de-la-carrera/5-kilometros')" class="distance-ticket">
//             <div class="left-dots"></div>
//             <div class="main-content">
//                 <div class="first">CORRE POR CUCUTA</div>
//                 <div class="second">5K</div>
//             </div>
//             <div class="details-button">
//                 DETALLES
//             </div>
//         </div>
//     </div>

// </div>


// <div (click)="getRunners()" style="position: fixed;bottom: 0;background: white;padding: 2rem;font-weight: 800;cursor: pointer;">
//     VER INSCRITOS
// </div>
// <div class="footer">

// </div>
