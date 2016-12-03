import { TokenViewModel } from './token.model';

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
}