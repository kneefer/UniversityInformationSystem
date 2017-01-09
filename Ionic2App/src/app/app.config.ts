export class AppConfig {
    public static get ACCOUNT_API_ENDPOINT() : string { return 'http://uisbackend.azurewebsites.net/api/Account/'; }
    public static get ADMIN_API_ENDPOINT() : string { return 'http://uisbackend.azurewebsites.net/api/Admin/'; }
    public static get USER_API_ENDPOINT() : string { return 'http://uisbackend.azurewebsites.net/api/User/'; }
    public static get TOKEN_ENDPOINT() : string { return 'http://uisbackend.azurewebsites.net/Token'; }
};