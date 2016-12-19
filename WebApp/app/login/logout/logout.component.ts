import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

declare var module: { id: string; }

@Component({
	moduleId: module.id,
	templateUrl: 'logout.html'
})
export class LogoutComponent implements OnInit {

	constructor(
		private router: Router) { }

	public ngOnInit(): void {
        if (localStorage.getItem('bearer-token')) {
            localStorage.removeItem('bearer-token');
			console.log('Logged out');
		}

		this.router.navigate(['login']);
	}
}