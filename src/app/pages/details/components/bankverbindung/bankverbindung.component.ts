import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bankverbindung',
  templateUrl: './bankverbindung.component.html',
  styleUrls: ['./bankverbindung.component.scss']
})
export class BankverbindungComponent implements OnInit {

  public form:FormGroup;
  private userId:any=null;
  public data:any=null
  @Output() nextTab = new EventEmitter<string>();

  constructor(public fb:FormBuilder,private router: Router,public service: MainService,private toastr: ToastrService) { 
    this.form = fb.group({
      'kontoinhaber': ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]+')])],
      'bankname': ['', Validators.compose([Validators.required])],
      'iban': ['', Validators.compose([Validators.required])],
      'swift': ['', Validators.compose([Validators.required])],
      'kontonummer': ['', Validators.compose([Validators.required])],
      'blz': ['', Validators.compose([Validators.required])],
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
      this.service.PostApis( 'bankverbindung/insert', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
      }
    )
    } else{
      this.form.value.userId = localStorage.getItem('userId')
      this.service.PostApis( 'bankverbindung/update', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
        }
      )
    }
  }

  save(){
    this.dataSave()
    this.router.navigate(['/admin']);
  }

  saveAndNext(){
    this.dataSave()
    this.nextTab.emit("Sonstiges")
  }

  showSuccess(data:string) {
    this.toastr.success(data,undefined,{
      closeButton:true,
      positionClass:'toast-top-right',
      timeOut: 2000,
    });
  }

  fetchData(id){
    this.service.GetApis('bankverbindung/getById/'+id).subscribe(
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
