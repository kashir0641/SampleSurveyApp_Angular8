import { SurveyListComponent } from './components/survey-list/survey-list.component';
import { SurveyComponent } from './components/survey/survey.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'survey', component: SurveyComponent},
  {path: 'grid',  component: SurveyListComponent},
  {path: '', redirectTo: 'survey', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
