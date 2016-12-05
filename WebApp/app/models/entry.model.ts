import { TokenViewModel } from './token.model'
import { TemplateViewModel } from './template.model'

export class EntryViewModel {

    constructor(
        public id: string = '',
        public date: Date = new Date(),
        public htmlContent: string = '',
        public tokens: TokenViewModel[] = new Array<TokenViewModel>()) { }

    public getFullName(): string {
        return `${this.date.toDateString()}`;
    }

    public static generateFromTemplate(template: TemplateViewModel): EntryViewModel {
        return new EntryViewModel(
            '',
            new Date(),
            template.htmlContent,
            template.tokens.map(token => new TokenViewModel(
                '',
                token.name,
                token.defaultValue,
                token.defaultValue
            )),
        );
    }
}