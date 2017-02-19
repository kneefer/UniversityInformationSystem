export class TokenViewModel {

    constructor(
        public name: string = '',
        public defaultValue: string = '',
        public value: string = '') { }

    public getFullName(): string {
        return `${this.name}`;
    }

    public static deserialize(json: any): TokenViewModel {
        const toReturn = new TokenViewModel(
            json.Name,
            json.DefaultValue ? json.DefaultValue : '',
            json.Value ? json.Value : '');

        return toReturn;
    };

    public static clone(token: TokenViewModel): TokenViewModel {
        const toReturn = new TokenViewModel(
            token.name,
            token.defaultValue,
            token.value);

        return toReturn;
    }
}