import { SurveyService } from './../../services/survey.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private fb: FormBuilder, private dataService: SurveyService ) { }

  public listItems: Array<string> = ['JavaScript', 'Angular', 'Node'];
  public version: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  employeeForm: FormGroup;

  ngOnInit() {
    this.employeeForm = this.fb.group({
      YourName: ['John'],
      Email: ['a@a.com'],
      Language: [''],
      Version: ['']
    });
  }

  kindoform(): void {
    console.log(this.employeeForm.value);
    this.dataService.addSurvey(this.employeeForm.value)
    .subscribe(res => {
        alert('Survey Added Successfully!');
    });
  }
}
