// import { Routes, RouterModule } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
// import { IndexComponent } from './index/index.component';
// import { InboxComponent } from '../applications/inbox/inbox.component';
// import { ComposeComponent } from '../applications/compose/compose.component';
// import { ContactGridComponent } from '../applications/contact-grid/contact-grid.component';
// import { FileDocumentsComponent } from '../file-manager/file-documents/file-documents.component';
// import { FileMediaComponent } from '../file-manager/file-media/file-media.component';
// import { FileImagesComponent } from '../file-manager/file-images/file-images.component';
// import { TypographyComponent } from '../ui-elements/typography/typography.component';
// import { UiTabsComponent } from '../ui-elements/ui-tabs/ui-tabs.component';
// import { UiButtonsComponent } from '../ui-elements/ui-buttons/ui-buttons.component';
// import { UiBootstrapComponent } from '../ui-elements/ui-bootstrap/ui-bootstrap.component';
// import { UiIconsComponent } from '../ui-elements/ui-icons/ui-icons.component';
// import { UiColorsComponent } from '../ui-elements/ui-colors/ui-colors.component';
// import { UiListGroupComponent } from '../ui-elements/ui-list-group/ui-list-group.component';
// import { UiMediaObjectComponent } from '../ui-elements/ui-media-object/ui-media-object.component';
// import { UiModalsComponent } from '../ui-elements/ui-modals/ui-modals.component';
// import { UiProgressbarsComponent } from '../ui-elements/ui-progressbars/ui-progressbars.component';
// import { UiNotificationsComponent } from '../ui-elements/ui-notifications/ui-notifications.component';
// import { AppChatComponent } from '../applications/app-chat/app-chat.component';
// import { TableNormalComponent } from '../tables/table-normal/table-normal.component';
// import { PageBlankComponent } from '../pages/page-blank/page-blank.component';
// import { PageProfileComponent } from '../pages/page-profile/page-profile.component';
// import { PageProfileV2Component } from '../pages/page-profile-v2/page-profile-v2.component';
// import { PageGalleryComponent } from '../pages/page-gallery/page-gallery.component';
// import { PageTimelineComponent } from '../pages/page-timeline/page-timeline.component';
// import { PagePricingComponent } from '../pages/page-pricing/page-pricing.component';
// import { PageInvoicesComponent } from '../pages/page-invoices/page-invoices.component';
// import { PageInvoicesV2Component } from '../pages/page-invoices-v2/page-invoices-v2.component';
// import { PageSearchResultsComponent } from '../pages/page-search-results/page-search-results.component';
// import { PageHelperClassComponent } from '../pages/page-helper-class/page-helper-class.component';
// import { PageTeamsBoardComponent } from '../pages/page-teams-board/page-teams-board.component';
// import { PageProjectsListComponent } from '../pages/page-projects-list/page-projects-list.component';
// import { PageTestimonialsComponent } from '../pages/page-testimonials/page-testimonials.component';
// import { PageFaqComponent } from '../pages/page-faq/page-faq.component';
// import { AppCalendarComponent } from '../applications/app-calendar/app-calendar.component';
// import { ChartEchartComponent } from '../charts/chart-echart/chart-echart.component';
// import { FormsValidationComponent } from '../form/forms-validation/forms-validation.component';
// import { BlogListComponent } from '../blogs/blog-list/blog-list.component';
// import { BlogDetailsComponent } from '../blogs/blog-details/blog-details.component';
// import { FormsBasicComponent } from '../form/forms-basic/forms-basic.component';
// import { WidgetsEcommerceComponent } from '../widgets/widgets-ecommerce/widgets-ecommerce.component';
// import { WidgetsBlogComponent } from '../widgets/widgets-blog/widgets-blog.component';
// import { WidgetsWeatherComponent } from '../widgets/widgets-weather/widgets-weather.component';
// import { WidgetsDataComponent } from '../widgets/widgets-data/widgets-data.component';
// import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
// import { BlogPostComponent } from '../blogs/blog-post/blog-post.component';
// import { PageLeafletComponent } from '../maps/page-leaflet/page-leaflet.component';

// const routes: Routes = [   
//     {
//         path: '',
//         component: AdminComponent,
//         children: [
//             { path: '', redirectTo:'dashboard'},
//             {
//                 path: 'dashboard',
//                 children: [
//                     { path: '', redirectTo: 'index', pathMatch: 'full' },
//                     { path: 'index', component: IndexComponent, data: { title: ':: Lucid Angular :: Dashboard :: Analytical ::' } },
//                     { path: 'iot', component: IotDashboardComponent, data: { title: ':: Lucid Angular :: Dashboard :: IoT ::' } },
//                 ]
//             },
//             { 
//                 path: 'app',
//                 children: [
//                     {
//                         path: 'app-inbox',
//                         children: [
//                             { path: '', pathMatch: 'full', component: InboxComponent, data: { title: ':: Lucid Angular :: App :: Inbox ::' }  },
//                             { path: 'compose', component: ComposeComponent, data: { title: ':: Lucid Angular :: App :: Compose ::' } }
//                         ]
//                     },
//                     { path: 'app-chat', component: AppChatComponent, data: { title: ':: Lucid Angular :: App :: Chat ::' } },
//                     { path: 'app-contact-grid', component: ContactGridComponent, data: { title: ':: Lucid Angular :: App :: Contacts ::' } },
//                     { path: 'app-calendar', component: AppCalendarComponent, data: { title: ':: Lucid Angular :: App :: Calendar ::' } },
                    
//                 ]
//             },
//             {
//                 path: 'ui-elements',
//                 children: [
//                     { path: '', redirectTo: 'typography', pathMatch: 'full' },
//                     { path: 'typography', component: TypographyComponent, data: { title: ':: Lucid Angular :: UI Elements :: Typography ::' } },
//                     { path: 'ui-tabs', component: UiTabsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Tabs ::' } },
//                     { path: 'ui-buttons', component: UiButtonsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Buttons ::' } },
//                     { path: 'ui-bootstrap', component: UiBootstrapComponent, data: { title: ':: Lucid Angular :: UI Elements :: Bootstrap ::' } },
//                     { path: 'ui-icons', component: UiIconsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Icons ::' } },
//                     { path: 'ui-colors', component: UiColorsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Colors ::' } },
//                     { path: 'ui-list-group', component: UiListGroupComponent, data: { title: ':: Lucid Angular :: UI Elements :: Lists ::' } },
//                     { path: 'ui-media-object', component: UiMediaObjectComponent, data: { title: ':: Lucid Angular :: UI Elements :: Media ::' } },
//                     { path: 'ui-modal', component: UiModalsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Modal ::' } },
//                     { path: 'ui-progressbars', component: UiProgressbarsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Prograssbars ::' } },
//                     { path: 'ui-notifications', component: UiNotificationsComponent, data: { title: ':: Lucid Angular :: UI Elements :: Notifications ::' } },
//                 ]
//             },
//             {
//                 path: 'file-manager',
//                 children: [
//                     { path: '', redirectTo: 'file-documents', pathMatch: 'full' },
//                     { path: 'file-documents', component: FileDocumentsComponent, data: { title: ':: Lucid Angular :: File Manager :: Documents ::' } },
//                     { path: 'file-media', component: FileMediaComponent, data: { title: ':: Lucid Angular :: File Manager :: Media ::' } },
//                     { path: 'file-images', component: FileImagesComponent, data: { title: ':: Lucid Angular :: File Manager :: Images ::' } }
//                 ]
//             },
//             {
//                 path: 'tables',
//                 children: [
//                     { path: '', redirectTo: 'table-normal', pathMatch: 'full' },
//                     { path: 'table-normal', component: TableNormalComponent, data: { title: ':: Lucid Angular :: Tables :: Normal Tables ::' }  },
//                 ]
//             },
//             {
//                 path: 'pages',
//                 children: [
//                     { path: '', redirectTo: 'page-blank', pathMatch: 'full' },
//                     { path: 'page-blank', component: PageBlankComponent, data: { title: ':: Lucid Angular :: Pages :: Blank ::' }  },
//                     { path: 'page-profile', component: PageProfileComponent, data: { title: ':: Lucid Angular :: Pages :: Profile ::' } },
//                     { path: 'page-profile2', component: PageProfileV2Component, data: { title: ':: Lucid Angular :: Pages :: Profile - V2 ::' } },
//                     { path: 'page-gallery', component: PageGalleryComponent, data: { title: ':: Lucid Angular :: Pages :: Gallery ::' } },
//                     { path: 'page-timeline', component: PageTimelineComponent, data: { title: ':: Lucid Angular :: Pages :: Timeline ::' } },
//                     { path: 'page-pricing', component: PagePricingComponent, data: { title: ':: Lucid Angular :: Pages :: Pricing ::' } },
//                     { path: 'page-invoices', component: PageInvoicesComponent, data: { title: ':: Lucid Angular :: Pages :: Invoices ::' } },
//                     { path: 'page-invoices2', component: PageInvoicesV2Component, data: { title: ':: Lucid Angular :: Pages :: Invoices - V2 ::' } },
//                     { path: 'page-search-results', component: PageSearchResultsComponent, data: { title: ':: Lucid Angular :: Pages :: Search Results ::' } },
//                     { path: 'page-helper-class', component: PageHelperClassComponent, data: { title: ':: Lucid Angular :: Pages :: Classes ::' } },
//                     { path: 'page-teams-board', component: PageTeamsBoardComponent, data: { title: ':: Lucid Angular :: Pages :: Team ::' } },
//                     { path: 'page-projects-list', component: PageProjectsListComponent, data: { title: ':: Lucid Angular :: Pages :: Projects ::' } },
//                     { path: 'page-maintenance', component: PageProjectsListComponent, data: { title: ':: Lucid Angular :: Pages :: Maintenance ::' } },
//                     { path: 'page-testimonials', component: PageTestimonialsComponent, data: { title: ':: Lucid Angular :: Pages :: Testimonials ::' } },
//                     { path: 'page-faq', component: PageFaqComponent, data: { title: ':: Lucid Angular :: Pages :: Faq ::' } },
                    
//                 ]
//             },
//             {
//                 path: 'charts',
//                 children: [
//                     { path: '', redirectTo: 'chart-echarts', pathMatch: 'full' },
//                     { path: 'chart-echarts', component: ChartEchartComponent, data: { title: ':: Lucid Angular :: Charts :: E-Charts ::' } },
//                 ]
//             },
//             {
//                 path: 'forms',
//                 children: [
//                     { path: '', redirectTo: 'forms-validation', pathMatch: 'full' },
//                     { path: 'forms-validation', component: FormsValidationComponent, data: { title: ':: Lucid Angular :: Form Validations :: Forms ::' } },
//                     { path: 'forms-basic', component: FormsBasicComponent, data: { title: ':: Lucid Angular :: Form Basic :: Forms ::' } }
//                 ]
//             },
//             {
//                 path: 'blogs',
//                 children: [
//                     { path: '', redirectTo: 'blog-post', pathMatch: 'full' },
//                     { path: 'blog-post', component: BlogPostComponent, data: { title: ':: Lucid Angular :: Blog Post :: Blog ::' } },
//                     { path: 'blog-list', component: BlogListComponent, data: { title: ':: Lucid Angular :: Blog List :: Blog ::' } },
//                     { path: 'blog-details', component: BlogDetailsComponent, data: { title: ':: Lucid Angular :: Blog Details :: Blog ::' } }
//                 ]
//             },
//             {
//                 path: 'widgets',
//                 children: [
//                     { path: '', redirectTo: 'widgets-data', pathMatch: 'full' },
//                     { path: 'widgets-data', component: WidgetsDataComponent, data: { title: ':: Lucid Angular :: Widgets Data :: Widgets ::' } },
//                     { path: 'widgets-weather', component: WidgetsWeatherComponent, data: { title: ':: Lucid Angular :: Widgets Weather :: Widgets ::' } },
//                     { path: 'widgets-blog', component: WidgetsBlogComponent, data: { title: ':: Lucid Angular :: Widgets Blog :: Widgets ::' } },
//                     { path: 'widgets-ecommerce', component: WidgetsEcommerceComponent, data: { title: ':: Lucid Angular :: Widgets eCommerce :: Widgets ::' } }
//                 ]
//             },
//             {
//                 path: 'maps',
//                 children: [
//                     { path: '', redirectTo: 'leaflet', pathMatch: 'full' },
//                     { path: 'leaflet', component: PageLeafletComponent, data: { title: ':: Lucid Angular :: Maps :: Leaflet ::' } },
//                 ]
//             }
//         ]
//     },
    
// ];

// export const routing = RouterModule.forChild(routes);



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from '../pages/details/details.component';
import { QuotesComponent } from '../pages/quotes/quotes.component';
import { InvoicesComponent } from '../pages/invoices/invoices.component';
import { JobsComponent } from '../pages/jobs/jobs.component';



const routes: Routes = [   
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo:'dashboard'},
            {
                path: 'dashboard',
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: IndexComponent, data: { title: 'AIM' } },
                ]
            },
            {
                path: 'details',
                children: [
                    { path: '', redirectTo: 'details', pathMatch: 'full' },
                    { path: 'details', component:DetailsComponent, data: { title: 'AIM' }  },
                    
                ]
            },
            {
                path: 'quotes',
                children: [
                    { path: '', redirectTo: 'quotes'},
                    { path: 'quotes', component:QuotesComponent, data: { title: 'AIM' }  },
                    
                ]
            },
            {
                path: 'invoices',
                children: [
                    { path: '', redirectTo: 'invoices'},
                    { path: 'invoices', component:InvoicesComponent, data: { title: 'AIM' }  },
                    
                ]
            },
            {
                path: 'jobs',
                children: [
                    { path: '', redirectTo: 'jobs'},
                    { path: 'jobs', component:JobsComponent, data: { title: 'AIM' }  },
                    
                ]
            }
            
        ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
