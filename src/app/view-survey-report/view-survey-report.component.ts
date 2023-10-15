import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { AddSurveyComponent } from '../add-survey/add-survey.component';
@Component({
  selector: 'app-view-survey-report',
  templateUrl: './view-survey-report.component.html',
  styleUrls: ['./view-survey-report.component.css']
})
export class ViewSurveyReportComponent implements OnInit {
  inputClaimId = ''
  isEditMode = true
  claimData: null | {} = null
  @ViewChild(AddSurveyComponent) addSurveyComponent: AddSurveyComponent;
  constructor(private _datService: DataService) { }

  ngOnInit(): void {
  }

  getSurvey() {
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
      withdrawn: true,
      closed: false,
      claimApprovedAmount: 200
    }
    // this._datService.getSurvey(this.inputClaimId).subscribe(
    //   response => {
    //     console.log(response);
    //     // this.showData = true;
    //   },
    //   error => {
    //     // this.showData = false;
    //     console.error('Error:', error);
    //   }
    // );
  }
  editDetails() {
    this.addSurveyComponent.claimForm = this.claimData
  }
}
