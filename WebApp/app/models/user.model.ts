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
}