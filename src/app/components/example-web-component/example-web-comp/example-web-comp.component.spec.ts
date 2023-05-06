import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleWebCompComponent } from './example-web-comp.component';

describe('ExampleWebCompComponent', () => {
  let component: ExampleWebCompComponent;
  let fixture: ComponentFixture<ExampleWebCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleWebCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleWebCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
