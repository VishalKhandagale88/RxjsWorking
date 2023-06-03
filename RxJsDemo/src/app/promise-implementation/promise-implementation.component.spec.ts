import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseImplementationComponent } from './promise-implementation.component';

describe('PromiseImplementationComponent', () => {
  let component: PromiseImplementationComponent;
  let fixture: ComponentFixture<PromiseImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseImplementationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
