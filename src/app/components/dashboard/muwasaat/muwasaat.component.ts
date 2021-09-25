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
  public mohallah = [
        {label: "Ezzy Mohallah"},
        {label: "Ibrahim Mohallah"},
        {label: "Essa Mohallah"},
        {label: "Taheri Mohallah"},
        {label: "Mohammadi Mohallah"},
        {label: "Saifee Mohallah"},
        {label: "Rawalpindi"},
        {label: "HyderabadSindh"},
        {label: "Lahore"},
        {label: "Hyderabad Badri"},
        {label: "Jamali Mohallah"},
        {label: "AMB"},
        {label: "Qutbi Mohallah"},
        {label: "Multan"},
        {label: "Hyderabad"},
        {label: "Al Mohallah Mohammadiyah"},
        {label: "Burhani Bagh"},
        {label: "Adam Mohallah"},
        {label: "Saleh Mohallah"},
        {label: "Fakhri Mohallah"},
        {label: "Burhani Mohallah"},
        {label: "Yusufi Mohallah"},
  ]
  public selectgroupby: string;
  searchData;

  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private businessService: BusinessService
  ) { }

  muwasaatInsertForm: FormGroup
  muwasaatSearchForm: FormGroup
  

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
    this.muwasaatSearchForm = new FormGroup({
      trRef: new FormControl(null),
      name: new FormControl(null),
      its: new FormControl(null),
      mauze: new FormControl(null),
      caseYear: new FormControl(null),
      caseType: new FormControl(null),
      enayatApproval: new FormControl(null),
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

  onSearch(){
    let filtered = Object.entries(this.muwasaatSearchForm.value).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})
    console.log(filtered)
    this.businessService.Onsearch(filtered).subscribe(response => {
      this.searchData = response;
    })
  }

  

}
