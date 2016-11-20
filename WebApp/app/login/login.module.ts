import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'login' },
            { path: '**', redirectTo: 'login' }
        ])
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }