import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginService } from './login.service';

import { IsAuthGuard } from '../core/isAuth.guard';
import { IsNotAuthGuard } from '../core/isNotAuth.guard';

@NgModule({
	declarations: [
		LoginComponent,
		LogoutComponent
	],
	imports: [
		SharedModule,
		RouterModule.forChild([{
            path: '',
			children: [
				{ path: 'logout', component: LogoutComponent, canActivate: [IsAuthGuard] },
				{ path: 'login', component: LoginComponent, canActivate: [IsNotAuthGuard] },
				{ path: '', redirectTo: 'login' },
				{ path: '**', redirectTo: 'login' }
			]
        }])
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }