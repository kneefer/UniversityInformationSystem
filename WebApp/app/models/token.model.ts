export class TokenViewModel {

    constructor(
        public id: string = '',
        public name: string = '',
        public defaultValue: string = '',
        public value: string = '') { }

    public getFullName(): string {
        return `${this.name}`;
    }
}