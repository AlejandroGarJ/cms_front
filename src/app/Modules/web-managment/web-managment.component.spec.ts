import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebManagmentComponent } from './web-managment.component';

describe('WebManagmentComponent', () => {
  let component: WebManagmentComponent;
  let fixture: ComponentFixture<WebManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
