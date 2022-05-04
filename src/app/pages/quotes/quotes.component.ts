import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from 'src/app/services/sidebar.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MainService } from 'src/app/services/main.service';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss'],
  providers: [DatePipe]
})
export class QuotesComponent implements OnInit {

  public form:FormGroup;

  public sidebarVisible: boolean = true;
  public fileName:string="Choose file"
  public files:any=null
  public fileSize:number
  public todayDate=new Date()
  public roleID:string=""
  public date:string=""
  public customers:any=[]
  public quotes:any=[]
  public progress:number=0

	constructor(private sidebarService: SidebarService,private toastr: ToastrService, public service: MainService,private cdr: ChangeDetectorRef,private modalService: NgbModal,public fb:FormBuilder,private datePipe: DatePipe) {
    this.form = fb.group({
      'quote': [[null], Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])],
      'size': ['', Validators.compose([Validators.required])],
      'customerId': ['', Validators.compose([Validators.required])],
      'type': ['quote', Validators.compose([Validators.required])],
      'date': ['', Validators.compose([Validators.required])],
    });
	}

	ngOnInit() {
    this.roleID = localStorage.getItem("role")
    this.getQuotes()
    if(this.roleID=="1"){
      this.getAllCustomers()
      this.getAllSignedQuotes()
    }
    this.date = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd');
	}

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

  openModal(content, size) {
		this.modalService.open(content, { size: size });
	}

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.files = file
    this.fileName=file.name
    this.fileSize=Math.round(file.size/1000)
    this.form.patchValue({
      quote: file,
      name:this.fileName,
      size:this.fileSize,
      date:this.date
    });
    if(this.roleID=="0"){
      this.form.patchValue({
        type:"squote",
        customerId:localStorage.getItem("userId")
      });   
    }
    this.form.get('quote').updateValueAndValidity()
  }

  deleteFile(){
    this.form.patchValue({
      quote: [null]
    });
    this.fileName="Choose file"
    this.files=null
  }

  getAllCustomers(){
    this.service.GetApis( 'auth/all').subscribe(
      (response) => {
        this.customers=response["data"]
    })
  }

  upload(){


    this.service.uploadFile( 'documents/upload',this.form.value).subscribe((event: HttpEvent<any>) => 
    {
       if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total)
        } else if (event instanceof HttpResponse) {
        setTimeout(() => {
          this.progress = 0;
          this.modalService.dismissAll()
          this.showSuccess("Dokument wurde hochgeladen")
        }, 2000);
      }
    })
  }

  showSuccess(data:string) {
    this.toastr.success(data,undefined,{
      closeButton:true,
      positionClass:'toast-top-right',
      timeOut: 2000,
    });
  }

  getQuotes(){
    let object={
      "type":"quote",
      "customerId":localStorage.getItem("userId")
    }
    this.service.PostApis( 'documents/get',object).subscribe((response) => 
    {
      this.quotes=response["data"]
    })
  }

  getSignedQuotes(event){
    let object={
      "type":"squote",
      "customerId":event.target.value
    }
    this.service.PostApis( 'documents/get',object).subscribe((response) => 
    {
      this.quotes=response["data"]
    })
  }

  getAllSignedQuotes(){
    let object={
      "type":"squote",
    }
    this.service.PostApis( 'documents/getSigned',object).subscribe((response) => 
    {
      this.quotes=response["data"]
    })
  }

  download(name:string){
    this.service.download( 'documents/download/'+name).subscribe(blob => saveAs(blob, name))
  }
}
