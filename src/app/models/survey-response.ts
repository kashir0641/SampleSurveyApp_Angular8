import { Survey } from './survey';

export class SurveyResponse {
  status: number;
  message: string;
  data: Survey[];
}
