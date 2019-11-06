import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyComponent } from './survey.component';

import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ButtonsModule,
        InputsModule,
        DropDownsModule,
        HttpClientTestingModule
      ],
      declarations: [ SurveyComponent ],
      providers: [{provide: FormBuilder, useValue: formBuilder}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;

    // pass data in the form dynamically
    component.employeeForm = formBuilder.group({
      YourName: ['John'],
      Email: ['john@test.com'],
      Language: [['Angular', 'Javascript']],
      Version: [['1', '2', '3']]
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
