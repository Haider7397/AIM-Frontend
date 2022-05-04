import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
    styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {
    public form:FormGroup;

    constructor(public fb:FormBuilder,private router: Router,public service: MainService,private toastr: ToastrService) { 

        this.form = fb.group({
            'firstName': ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]+')])],
            'lastName': ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]+')])],
            'email': ['', Validators.compose([Validators.required,Validators.email])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(50)])]
        });
    }

    ngOnInit() {
    }

    get formcontrols() {
        return this.form.controls
    }

    register() {

        this.service.PostApis( 'auth/create', this.form.value).subscribe(
            (response) => {
              this.showSuccess(response["token"])
              this.router.navigate(['/auth/login']);
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

}
