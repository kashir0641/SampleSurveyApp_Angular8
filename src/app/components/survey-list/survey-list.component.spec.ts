import { async, ComponentFixture, TestBed} from '@angular/core/testing';

import { SurveyListComponent } from './survey-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { SurveyService } from '../../services/survey.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('SurveyListComponent', () => {
  let component: SurveyListComponent;
  let fixture: ComponentFixture<SurveyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GridModule, HttpClientTestingModule],
      declarations: [ SurveyListComponent ],
      providers: [SurveyService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
