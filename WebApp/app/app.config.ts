import { OpaqueToken } from '@angular/core';
import { Headers } from '@angular/http';

// ReSharper disable once InconsistentNaming
export let APP_CONFIG = new OpaqueToken('app.config');
export let WINDOW_PROVIDER = new OpaqueToken('Window');

export interface IAppConfig {
    adminApiEndpoint: string;
    userApiEndpoint: string;
	tokenEndpoint: string;
	localStorageToken: string;
}

// ReSharper disable once InconsistentNaming
export const AppConfig: IAppConfig = {
    adminApiEndpoint: 'http://localhost:39843/api/Admin/',
    userApiEndpoint: 'http://localhost:39843/api/User/',
	tokenEndpoint: 'http://localhost:39843/Token',
	localStorageToken: 'id_token'
};