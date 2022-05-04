// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

// export const routes: Routes = [
//     { path: '', redirectTo:'admin', pathMatch: 'full'},
//     { path: 'admin', loadChildren: () => import('app/admin/admin.module').then(m => m.AdminModule) },
//     { path: 'authentication', loadChildren: () => import('app/authentication/authentication.module').then(m => m.AuthenticationModule) }
// ];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../app/core/guards/auth.guard'


const routes: Routes = [
    { path: '', redirectTo:'admin', pathMatch: 'full'},
    { path: 'admin', canActivate:[AuthGuard], loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule) },
    { path: 'auth', loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
