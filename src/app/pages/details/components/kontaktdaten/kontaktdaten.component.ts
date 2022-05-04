import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kontaktdaten',
  templateUrl: './kontaktdaten.component.html',
  styleUrls: ['./kontaktdaten.component.scss']
})
export class KontaktdatenComponent implements OnInit {

  public form:FormGroup;
  private userId:any=null;

  @Output() nextTab = new EventEmitter<string>();

  constructor(public fb:FormBuilder,private router: Router,public service: MainService,private toastr: ToastrService) { 
      this.form = fb.group({
        'firma': ['', Validators.compose([Validators.required])],
        'anrede': ['', Validators.compose([Validators.required])],
        'vorname': ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]+')])],
        'nachname': ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]+')])],
        'strase': ['', Validators.compose([Validators.required])],
        'plz': ['', Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        'ort': ['', Validators.compose([Validators.required])],
        'region': ['', Validators.compose([Validators.required])],
        'land': ['', Validators.compose([Validators.required])],
        'telefon': ['', Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        'mobil': ['', Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        'fax': ['', Validators.compose([Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])],
        'email': ['', Validators.compose([Validators.required,Validators.email])],
        'website': ['', Validators.compose([Validators.required])]

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
    if(this.userId==null){
      this.form.value.userId = localStorage.getItem('userId')
      this.service.PostApis( 'kontaktdaten/insert', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
      }
    )
    } else{
      this.form.value.userId = localStorage.getItem('userId')
      this.service.PostApis( 'kontaktdaten/update', this.form.value).subscribe(
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
    this.nextTab.emit("Bankverbindung")
  }

  showSuccess(data:string) {
    this.toastr.success(data,undefined,{
      closeButton:true,
      positionClass:'toast-top-right',
      timeOut: 2000,
    });
  }

  fetchData(id){
    this.service.GetApis('kontaktdaten/getById/'+id).subscribe(
      (response) => {
        this.form.patchValue(response["data"])
      }
    )
  }

  exit(){
    this.router.navigate(['/admin']);
  }
}
