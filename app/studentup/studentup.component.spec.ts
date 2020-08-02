import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentupComponent } from './studentup.component';

describe('StudentupComponent', () => {
  let component: StudentupComponent;
  let fixture: ComponentFixture<StudentupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
