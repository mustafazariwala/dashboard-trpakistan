import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BusinessService } from 'src/app/shared/services/business.service';

@Component({
  selector: 'app-muwasaat',
  templateUrl: './muwasaat.component.html',
  styleUrls: ['./muwasaat.component.scss']
})
export class MuwasaatComponent implements OnInit {
  public data:any = [];
  public selectgroupby: string;


  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private businessService: BusinessService
  ) { }

  muwasaatInsertForm: FormGroup

  ngOnInit(): void {
    this.businessService.findRecord().subscribe((response:any) => {
      this.data = response
    })
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
    this.addCounseller()

  }

  onAddRecord(){
    this.businessService.addRecord(this.muwasaatInsertForm.value).subscribe(response => {
      this.toaster.success("Data has been saved")
      this.muwasaatInsertForm.reset()
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

}
