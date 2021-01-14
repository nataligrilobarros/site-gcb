import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoUmComponent } from './sessao-um.component';

describe('SessaoUmComponent', () => {
  let component: SessaoUmComponent;
  let fixture: ComponentFixture<SessaoUmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoUmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
