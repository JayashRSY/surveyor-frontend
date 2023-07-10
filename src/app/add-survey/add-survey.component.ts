import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  claimForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private _dataService: DataService) {

    this.createClaimForm();

  }

  ngOnInit(): void {
  }
  createClaimForm() {
    this.claimForm = this.formBuilder.group({
      claimId: ['', Validators.required],
      policyNo: ['', Validators.required],
      labourCharges: ['', Validators.required],
      partsCost: ['', Validators.required],
      policyClass: ['', Validators.required],
      depreciationCost: ['', Validators.required],
      totalAmount: ['', Validators.required],
      vehicleAge: ['', Validators.required],
      estimateLoss: ['', Validators.required],
      withdrawn: [false, Validators.required],
      closed: [false, Validators.required],
      claimApprovedAmount: [null]
    });
  }
  submitForm() {
    console.log(this.claimForm.value);
    this._dataService.addSurvey(this.claimForm.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
