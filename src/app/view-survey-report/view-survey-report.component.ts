import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-view-survey-report',
  templateUrl: './view-survey-report.component.html',
  styleUrls: ['./view-survey-report.component.css']
})
export class ViewSurveyReportComponent implements OnInit {
  inputClaimId = ''
  showData = false
  claimData = {}
  constructor(private _datService: DataService) { }

  ngOnInit(): void {
  }

  getSurvey() {
    console.log(this.inputClaimId);
    this._datService.getSurvey(this.inputClaimId).subscribe(
      response => {
        console.log(response);
        // this.claimData = response.data;
        this.claimData = {
          claimId: "ci456",
          accidentDetails: "Road accident  ",
          policyNo: "P5",
          labourCharges: 5000,
          partsCost: 7000,
          policyClass: 1500,
          depreciationCost: 10000,
          totalAmount: 10500,
          vehicleAge: 6,
          estimateLoss: 11000,
          withdrawn: false,
          closed: false,
          claimApprovedAmount: 200
        }
        this.showData = true;
      },
      error => {
        this.showData = false;
        console.error('Error:', error);
      }
    );
  }

}
