import { DateValidators } from './../core/validator/dateValidators';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {  NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { DetailsComponent } from './details/details.component';
import { BankverbindungComponent } from './details/components/bankverbindung/bankverbindung.component';
import { KontaktdatenComponent } from './details/components/kontaktdaten/kontaktdaten.component';
import { SonstigesComponent } from './details/components/sonstiges/sonstiges.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuotesComponent } from './quotes/quotes.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
	declarations: [	
  	DetailsComponent, KontaktdatenComponent, BankverbindungComponent, SonstigesComponent, QuotesComponent, InvoicesComponent, JobsComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		RouterModule,
		NgxEchartsModule,
		NgxGalleryModule,
        ReactiveFormsModule
	],
	exports: [],
	providers:[DateValidators]
})
export class PagesModule { }
