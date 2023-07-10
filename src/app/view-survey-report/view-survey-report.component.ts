import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-view-survey-report',
  templateUrl: './view-survey-report.component.html',
  styleUrls: ['./view-survey-report.component.css']
})
export class ViewSurveyReportComponent implements OnInit {
  inputClaimId = ''
  constructor(private _datService: DataService) { }

  ngOnInit(): void {
  }

  getSurvey() {
    console.log(this.inputClaimId);
    // this._datService.getSurvey(this.inputClaimId).subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.error('Error:', error);
    //   }
    // );
  }

}
