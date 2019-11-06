import { TestBed, getTestBed } from '@angular/core/testing';
import { SurveyService } from './survey.service';
import {
  HttpClientTestingModule, HttpTestingController,
} from '@angular/common/http/testing';

describe('SurveyService', () => {
  let injector: TestBed;
  let service: SurveyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      SurveyService
    ]});

    injector = getTestBed();
    service = injector.get(SurveyService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const surveyService: SurveyService = TestBed.get(SurveyService);
    expect(surveyService).toBeTruthy();
  });

  it('should return an Observable<SurveyResponse>', () => {
    const dummyResp = {
      status: 200,
      data: [
        {
          "YourName": "John",
          "Email": "john@test.com",
          "Language": "Javascript",
          "Version": "5"
        },
        {
          "YourName": "Daniel",
          "Email": "daniel@test.com",
          "Language": "Angular",
          "Version": "8"
        }
      ],
      message: ''
    };

    service.getSurvey().subscribe(res => {
      expect(res.data.length).toBe(2);
      expect(res).toEqual(dummyResp);
    });

    const req = httpMock.expectOne('/api/getSurvey');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResp);
  });
});
