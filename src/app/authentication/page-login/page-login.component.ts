import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-page-login',
	templateUrl: './page-login.component.html',
	styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

	public form:FormGroup;

	constructor(public fb:FormBuilder,private router: Router,public service: MainService,private toastr: ToastrService) {

		this.form = fb.group({
            'email': ['', Validators.compose([Validators.required,Validators.email])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(50)])]
        });

	 }

	 get formcontrols() {
        return this.form.controls
    }


	ngOnInit() {
	}

	login() {

        this.service.PostApis( 'auth/login', this.form.value).subscribe(
            (response) => {
				localStorage.setItem('token',response['token'])
				localStorage.setItem('userId',response['data'].id)
				localStorage.setItem('role',response['data'].role)
				localStorage.setItem('firstName',response['data'].firstName)
				localStorage.setItem('lastName',response['data'].lastName)
            	this.router.navigate(['/admin/dashboard/index']);
            },
			(err) => {
				this.showError(err.error.error)
			}
        )
    }

	showError(data:string) {
        this.toastr.error(data,undefined,{
          closeButton:true,
          positionClass:'toast-top-right',
          timeOut: 2000,
        });
    }
}
