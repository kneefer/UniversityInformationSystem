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
            json.Id ? json.Id : json.id,
            json.FirstName,
            json.LastName,
            json.UserName,
            json.Email,
            json.Description);

        return toReturn;
    }

    public static clone(user: UserViewModel): UserViewModel {
        const toReturn = new UserViewModel(
            user.id,
            user.firstName,
            user.lastName,
            user.userName,
            user.email,
            user.description);

        return toReturn;
    }
}