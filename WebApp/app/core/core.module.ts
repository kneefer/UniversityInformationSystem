import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthGuard } from './auth.guard'
import { IsAdminGuard } from './isAdmin.guard'
import { IsUserGuard } from './isUser.guard'
import { PageTitleService } from './page-title.service'

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
        AuthGuard,
        IsAdminGuard,
        IsUserGuard,
        PageTitleService
	]
})
export class CoreModule {

	constructor(
		@Optional() @SkipSelf() parentModule: CoreModule) {

	    if (!parentModule)
	        return;

        throw new Error('CoreModule is already loaded. Import it in the AppModule only');
	}

	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
            providers: [
                AuthGuard,
                IsAdminGuard,
                IsUserGuard,
                PageTitleService
            ]
		};
	}
}