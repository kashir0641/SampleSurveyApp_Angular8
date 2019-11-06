import { Component, OnInit } from '@angular/core';

import { process, State } from '@progress/kendo-data-query';
import {GridDataResult, DataStateChangeEvent} from '@progress/kendo-angular-grid';

import { SurveyService } from '../../services/survey.service';

import { Survey } from '../../models/survey';

import { STATIC_SURVEY_DATA } from './../../../assets/static-survey-data';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  public state: State = {
    skip: 0,
    take: 10,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'Language', operator: 'contains', value: '' }]
    }
  };

  survydata: Survey[] = [];

  public gridData: GridDataResult = process(STATIC_SURVEY_DATA, this.state);

  constructor(private dataService: SurveyService) {
  }

  public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.gridData = process(this.survydata, this.state);
  }

  ngOnInit( ): void {
    this.dataService.getSurvey().subscribe((res) => {
      this.survydata = res.data;
      this.gridData = process(this.survydata, this.state);
    });
  }
}
