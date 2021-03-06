import { TokenViewModel } from './token-model';

export class TemplateViewModel {

    constructor(
        public id: string = '',
        public name: string = '',
        public description: string = '',
        public htmlContent: string = '',
        public tokens: TokenViewModel[] = new Array<TokenViewModel>()) { }

    public getFullName(): string {
        return `${this.name}`;
    }

    public static deserialize(json: any): TemplateViewModel {
        const toReturn = new TemplateViewModel(
            json.Id,
            json.Name,
            json.Description,
            json.HtmlContent,
            json.Tokens.map(TokenViewModel.deserialize));

        return toReturn;
    };

    public static clone(token: TemplateViewModel): TemplateViewModel {
        const toReturn = new TemplateViewModel(
            token.id,
            token.name,
            token.description,
            token.htmlContent,
            token.tokens.map(TokenViewModel.clone));

        return toReturn;
    }
}