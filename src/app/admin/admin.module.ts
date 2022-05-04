import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
//import { routing } from './admin.routing';
import { AdminRoutingModule } from './admin.routing';
import { NgxEchartsModule } from 'ngx-echarts';
//import * as echarts from 'echarts';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FullCalendarModule } from 'ng-fullcalendar';

import { AdminComponent } from './admin/admin.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
	declarations: [
		AdminComponent,
		IndexComponent,
	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		LayoutModule,
		RichTextEditorAllModule,
		NgbModule,
		//FullCalendarModule,
		NgxEchartsModule.forRoot({
			echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
		}),
	]
})
export class AdminModule { }
