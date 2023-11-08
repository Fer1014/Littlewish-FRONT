import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioPuntuacionComponent } from './comentario-puntuacion.component';

describe('ComentarioPuntuacionComponent', () => {
  let component: ComentarioPuntuacionComponent;
  let fixture: ComponentFixture<ComentarioPuntuacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComentarioPuntuacionComponent]
    });
    fixture = TestBed.createComponent(ComentarioPuntuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
