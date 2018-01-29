export class TabletViewModel {

    constructor(
        public id: string = '',
        public name: string = '',
        public description: string = '') { }

    public getFullName(): string {
        return `${this.name}`;
    }

    public static deserialize(json: any): TabletViewModel {
        const toReturn = new TabletViewModel(
            json.Id,
            json.Name,
            json.Description);

        return toReturn;
    }

    public static clone(token: TabletViewModel): TabletViewModel {
        const toReturn = new TabletViewModel(
            token.id,
            token.name,
            token.description);

        return toReturn;
    }
}