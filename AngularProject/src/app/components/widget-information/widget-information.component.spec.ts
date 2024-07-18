import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetInformationComponent } from './widget-information.component';

describe('WidgetInformationComponent', () => {
  let component: WidgetInformationComponent;
  let fixture: ComponentFixture<WidgetInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
