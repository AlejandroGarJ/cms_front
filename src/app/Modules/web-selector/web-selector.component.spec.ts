import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSelectorComponent } from './web-selector.component';

describe('WebSelectorComponent', () => {
  let component: WebSelectorComponent;
  let fixture: ComponentFixture<WebSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
