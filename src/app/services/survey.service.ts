import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Survey } from '../models/survey';
import { SurveyResponse } from '../models/survey-response';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private url = '/api/';

  constructor(private http: HttpClient) {}

  getSurvey(): Observable<SurveyResponse> {
      return this.http.get<SurveyResponse>(this.url + 'getSurvey');
  }

  addSurvey(survey: Survey) {
    return this.http.post(this.url + 'addSurvey', survey);
  }
}
