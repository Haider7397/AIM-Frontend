import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from 'src/app/services/sidebar.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  public form:FormGroup;
  public sidebarVisible: boolean = true;
  public roleID:string=""
  public id:number=null
  public jobs:any=[]

  constructor(private sidebarService: SidebarService,private toastr: ToastrService, private cdr: ChangeDetectorRef,private modalService: NgbModal,public fb:FormBuilder,public service: MainService) {

    this.form = fb.group({
      'team': ['', Validators.compose([Validators.required])],
      'salary': ['', Validators.compose([Validators.required])],
      'title': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],
    });
  }

  get formcontrols() {
    return this.form.controls
  }

  ngOnInit() {
    this.roleID = localStorage.getItem("role")
    this.getAllJobs()
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  openModal(content, size) {
		this.modalService.open(content, { size: size });
	}


  dataSave(){
    if(this.id==null){
      this.service.PostApis( 'job/insert', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
          this.form.reset()
          this.modalService.dismissAll()
          this.getAllJobs()
      }
    )
    } else{
      this.form.value.id = this.id
      this.service.PostApis( 'job/update', this.form.value).subscribe(
        (response) => {
          this.showSuccess(response["message"])
          this.form.reset()
          this.modalService.dismissAll()
          this.id=null
          this.getAllJobs()
        }
      )
    }
  }

  changeId(id){
    this.id=id
    this.getJob(id)
  }

  getAllJobs(){
    this.service.GetApis( 'job/all').subscribe(
      (response) => {
        this.jobs=response["data"]
      }
    )
  }

  getJob(id){
    this.service.GetApis( 'job/getById/'+id).subscribe(
      (response) => {
        this.form.patchValue(response["data"])
      }
    )
  }

  delete(id){
    let object={
      id:id
    }
    this.service.PostApis( 'job/delete',object).subscribe(
      (response) => {
        this.showSuccess(response["message"])
        this.getAllJobs()
      }
    )
  }

  showSuccess(data:string) {
    this.toastr.success(data,undefined,{
      closeButton:true,
      positionClass:'toast-top-right',
      timeOut: 2000,
    });
  }

  closeModal(){
    this.modalService.dismissAll()
    this.form.reset()
    this.id=null
  }

}
