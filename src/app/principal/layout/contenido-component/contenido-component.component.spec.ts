import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoComponentComponent } from './contenido-component.component';

describe('ContenidoComponentComponent', () => {
  let component: ContenidoComponentComponent;
  let fixture: ComponentFixture<ContenidoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
