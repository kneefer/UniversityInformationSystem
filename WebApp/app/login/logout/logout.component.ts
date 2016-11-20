import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
	moduleId: module.id,
	templateUrl: 'logout.html'
})
export class LogoutComponent implements OnInit {

	constructor(
		private router: Router) { }

	public ngOnInit(): void {
		if (localStorage.getItem('id_token')) {
			localStorage.removeItem('id_token');
			console.log('Logged out');
		}

		this.router.navigate(['login']);
	}
}