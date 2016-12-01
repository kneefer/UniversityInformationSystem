export class TabletViewModel {

    constructor(
        public id: string = '',
        public name: string = '',
        public description: string = '') { }

    public getFullName(): string {
        return `${this.name}`;
    }
}