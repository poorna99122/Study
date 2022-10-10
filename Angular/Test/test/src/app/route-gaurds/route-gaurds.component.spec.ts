import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGaurdsComponent } from './route-gaurds.component';

describe('RouteGaurdsComponent', () => {
  let component: RouteGaurdsComponent;
  let fixture: ComponentFixture<RouteGaurdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGaurdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGaurdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
