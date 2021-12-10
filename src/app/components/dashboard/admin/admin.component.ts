import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BusinessService } from 'src/app/shared/services/business.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private businessService: BusinessService,

  ) { }
  muwasaatInsertForm: FormGroup;
  muwasaatDeleteForm: FormGroup;
  allTRRef


  ngOnInit(): void {
    this.muwasaatInsertForm = new FormGroup({
      sn: new FormControl(''),
      trRef: new FormControl(''),
      counsellor: new FormArray([]),
      muminDetails: new FormGroup({
        prefix: new FormControl(''),
        name: new FormControl(''),
        its: new FormControl(''),
        mauze: new FormControl(''),
        mobileNo: new FormControl('')
      }),
      caseDetails: new FormGroup({
        caseYear: new FormControl(''),
        caseType: new FormControl(''),
        enayatApproval: new FormControl(false),
        caseStatus: new FormControl(''),
        businessName: new FormControl(''),
        keyNote: new FormControl('')
      })
    })
    this.muwasaatDeleteForm = new FormGroup({
      trRef: new FormControl(''),
    })

    this.onGetTRRef()
    this.addCounseller()

  }
  
  onAddRecord(){
    this.businessService.addRecord(this.muwasaatInsertForm.value).subscribe(response => {
      this.toaster.success("Data has been saved")
      this.muwasaatInsertForm.reset()
      this.onGetTRRef()
      // this.addCounseller()
    }, err => {
      this.toaster.error("There has been an error")
    })
  }

  trackByFn(index, item) {
    return index;  
  }

  addCounseller(){
    const rubric = this.muwasaatInsertForm.controls.counsellor as FormArray;
    rubric.push(this.fb.group({
      prefix: '',
      counsellorName: '',
      its: '',
      mobileNo: '',
      grade: ''
    }))
  }

  minusCounseller(){
    const rubric = this.muwasaatInsertForm.controls.counsellor as FormArray;
    rubric.removeAt(rubric.length - 1)
  }

  onGetTRRef(){
    this.businessService.getTRRef().subscribe(response => {
      this.allTRRef = response
    })
  }

  onDeleteRecord(){
    this.businessService.deleteTRRef(this.muwasaatDeleteForm.value).subscribe(response => {
      this.toaster.success("Data has been deleted")
      this.muwasaatDeleteForm.reset()
      this.onGetTRRef()
    }, err => {
      this.toaster.error("There has been an error")
    })
  }

}
