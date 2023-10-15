import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  claimForm: FormGroup;
  @Input() editClaimData: any;

  constructor(private formBuilder: FormBuilder,
    private _dataService: DataService) {
    this.createClaimForm();
  }

  ngOnInit(): void {
    if (this.editClaimData) {
      console.log('====================================');
      console.log(this.editClaimData);
      console.log('====================================');
      this.claimForm.patchValue(this.editClaimData);
    }
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
    if (!this.editClaimData) {
      this._dataService.addSurvey(this.claimForm.value).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
    else {
      this._dataService.updateSurvey(this.claimForm.value).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }
}
