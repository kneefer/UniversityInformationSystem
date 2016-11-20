import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginService } from './login.service';

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
				{ path: 'logout', component: LogoutComponent },
				{ path: 'login', component: LoginComponent },
				{ path: '', redirectTo: 'login' },
				{ path: '**', redirectTo: 'login' }
			]

		//	
        }])
    ],
    providers: [
        LoginService
    ]
})
export class LoginModule { }