import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDirectivesComponent } from './template-directives.component';

describe('TemplateDirectivesComponent', () => {
  let component: TemplateDirectivesComponent;
  let fixture: ComponentFixture<TemplateDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
