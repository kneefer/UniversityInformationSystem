export class UserViewModel {

    constructor(
        public id: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public userName: string = '',
        public email: string = '',
        public description: string = '') { }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public static deserialize(json: any): UserViewModel {
        const toReturn = new UserViewModel(
            json.Id,
            json.FirstName,
            json.LastName,
            json.UserName,
            json.Email,
            json.Description);

        return toReturn;
    }
}