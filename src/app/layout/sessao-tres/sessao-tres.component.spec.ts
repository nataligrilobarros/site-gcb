import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoTresComponent } from './sessao-tres.component';

describe('SessaoTresComponent', () => {
  let component: SessaoTresComponent;
  let fixture: ComponentFixture<SessaoTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
