import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoCincoComponent } from './sessao-cinco.component';

describe('SessaoCincoComponent', () => {
  let component: SessaoCincoComponent;
  let fixture: ComponentFixture<SessaoCincoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoCincoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
