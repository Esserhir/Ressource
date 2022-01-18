import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersArchivesComponent } from './employers-archives.component';

describe('EmployersArchivesComponent', () => {
  let component: EmployersArchivesComponent;
  let fixture: ComponentFixture<EmployersArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersArchivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
