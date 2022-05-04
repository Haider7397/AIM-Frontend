import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';
import { DateValidators } from 'src/app/core/validator/dateValidators';

@Component({
  selector: 'app-sonstiges',
  templateUrl: './sonstiges.component.html',
  styleUrls: ['./sonstiges.component.scss']
})
export class SonstigesComponent implements OnInit {

  public form:FormGroup;
  private userId:any=null;
  public data:any=null

  constructor(public fb:FormBuilder,private router: Router,public service: MainService,private toastr: ToastrService,public dateValidator: DateValidators) { 
    this.form = fb.group({
      'ustId': ['', Validators.compose([Validators.required])],
      'steuernummer': ['', Validators.compose([Validators.required, Validators.pattern(/^-?(0|[0-9]\d*)?$/)])],
      'debitorennummer': ['', Validators.compose([Validators.required])],
      'sepa': ['', Validators.compose([Validators.required])],
      'datum': ['', Validators.compose([Validators.required,this.dateValidator.dateSmallerThanToday])]
    });
  }

  get formcontrols() {
    return this.form.controls
  }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userId')
    this.fetchData(this.userId)
  }

  dataSave(){
    if(this.data==null){
      this.form.value.userId = localStorage.getItem('userId')
      this.service.PostApis( 'sonstige/insert', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
      }
    )
    } else{
      this.form.value.userId = localStorage.getItem('userId')
      this.service.PostApis( 'sonstige/update', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
        }
      )
    }
  }

  save(){
    console.log(this.formcontrols)
    this.dataSave()
    this.router.navigate(['/admin']);
  }

  saveAndNext(){
    this.dataSave()
    this.router.navigate(['/admin']);
  }

  showSuccess(data:string) {
    this.toastr.success(data,undefined,{
      closeButton:true,
      positionClass:'toast-top-right',
      timeOut: 2000,
    });
  }

  fetchData(id){
    this.service.GetApis('sonstige/getById/'+id).subscribe(
      (response) => {
        this.data=response["data"]
        this.form.patchValue(this.data)
      }
    )
  }

  exit(){
    this.router.navigate(['/admin']);
  }

}
