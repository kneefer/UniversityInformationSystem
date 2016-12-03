import { TokenViewModel } from './token.model'

export class EntryViewModel {

    constructor(
        public id: string = '',
        public date: Date = new Date(),
        public htmlContent: string = '',
        public tokens: TokenViewModel[] = new Array<TokenViewModel>()) { }

    public getFullName(): string {
        return `${this.date.toDateString()}`;
    }
}