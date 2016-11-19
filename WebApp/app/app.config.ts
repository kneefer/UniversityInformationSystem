import { OpaqueToken } from '@angular/core';
import { Headers } from '@angular/http';

import { contentHeaders } from './common/headers';

// ReSharper disable once InconsistentNaming
export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
    tokenEndpoint: string;
    headers: Headers;
}

// ReSharper disable once InconsistentNaming
export const AppConfig: IAppConfig = {
    apiEndpoint: 'http://localhost:39843/api/',
    tokenEndpoint: 'http://localhost:39843/Token',
    headers: contentHeaders
};