import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { LoginService } from '../login.service';

@Component({
	templateUrl: 'logout.component.html'
})
export class LogoutComponent implements OnInit {

    constructor(
        private loginService: LoginService,
		private router: Router) { }

	public ngOnInit(): void {
	    this.loginService.logout();
		this.router.navigate(['login']);
	}
}