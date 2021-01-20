import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OperationsComponent } from './component/operations/operations.component';
import { RecordComponent } from './component/record/record.component';
import { RegisterComponent } from './component/register/register.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'record', component: RecordComponent },
    { path: 'operations', component: OperationsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', pathMatch:'full', component: HomeComponent },
    { path: '**', pathMatch:'full', component: HomeComponent },
];

export const ROUTING = RouterModule.forRoot(ROUTES, { useHash:true });