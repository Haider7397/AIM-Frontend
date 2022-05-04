import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {  NgxEchartsModule } from 'ngx-echarts';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { MainService } from './services/main.service';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FullCalendarModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        PagesModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RichTextEditorAllModule,
        FullCalendarModule,
        NgMultiSelectDropDownModule.forRoot(),
        LeafletModule,
        NgxEchartsModule,
        SweetAlert2Module.forRoot()
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        MainService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
