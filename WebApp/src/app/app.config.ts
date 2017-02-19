import { OpaqueToken, Injectable } from '@angular/core';
import { Headers } from '@angular/http';

// ReSharper disable once InconsistentNaming
export let APP_CONFIG = new OpaqueToken('app.config');

@Injectable()
export class WindowWrapper extends Window { }

export interface IAppConfig {
    accountApiEndpoint: string;
    adminApiEndpoint: string;
    userApiEndpoint: string;
	tokenEndpoint: string;
	localStorageTokenName: string;
	localStorageIsAdminName: string;
}

// ReSharper disable once InconsistentNaming
export const AppConfig: IAppConfig = {
	accountApiEndpoint: 'http://uisbackend.azurewebsites.net/api/Account/',
	adminApiEndpoint:   'http://uisbackend.azurewebsites.net/api/Admin/',
	userApiEndpoint:    'http://uisbackend.azurewebsites.net/api/User/',
	tokenEndpoint:      'http://uisbackend.azurewebsites.net/Token',
	localStorageTokenName: 'bearer-token',
	localStorageIsAdminName: 'isAdmin'
};

// ReSharper disable once InconsistentNaming
export const LocalAppConfig: IAppConfig = {
    accountApiEndpoint: 'http://localhost:39843/api/Account/',
    adminApiEndpoint:   'http://localhost:39843/api/Admin/',
    userApiEndpoint:    'http://localhost:39843/api/User/',
    tokenEndpoint:      'http://localhost:39843/Token',
    localStorageTokenName: 'bearer-token',
    localStorageIsAdminName: 'isAdmin'
};