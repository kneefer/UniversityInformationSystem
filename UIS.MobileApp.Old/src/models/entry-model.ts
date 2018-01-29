import { TokenViewModel } from './token-model'
import { TemplateViewModel } from './template-model'

export class EntryViewModel {

    constructor(
        public id: string = '',
        public date: Date = new Date(),
        public htmlContent: string = '',
        public tokens: TokenViewModel[] = new Array<TokenViewModel>()) { }

    public getFullName(): string {
        return `${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}`;
    }

    public static generateFromTemplate(template: TemplateViewModel): EntryViewModel {
        return new EntryViewModel(
            '',
            new Date(),
            template.htmlContent,
            template.tokens.map(token => new TokenViewModel(
                token.name,
                token.defaultValue,
                token.value ? token.value : token.defaultValue
            )),
        );
    }

    public static deserialize(json: any): EntryViewModel {
        const toReturn = new EntryViewModel(
            json.Id,
            new Date(json.Date),
            json.HtmlContent,
            json.Tokens.map(TokenViewModel.deserialize));

        return toReturn;
    }

    public static clone(token: EntryViewModel): EntryViewModel {
        const toReturn = new EntryViewModel(
            token.id,
            new Date(token.date),
            token.htmlContent,
            token.tokens.map(TokenViewModel.clone));

        return toReturn;
    }
}