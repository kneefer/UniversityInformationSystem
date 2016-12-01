export class TokenViewModel {

    constructor(
        public id: string = '',
        public name: string = '') { }

    public getFullName(): string {
        return `${this.name}`;
    }
}