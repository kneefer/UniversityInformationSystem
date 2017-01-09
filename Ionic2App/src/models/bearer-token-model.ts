export class BearerToken {

    constructor(
        public access_token: string,
        public token_type: string,
        public expires_in: number,
        public userName: string,
    ) { }
    
    public static deserialize(json: any): BearerToken {
        const toReturn = new BearerToken(
            json.access_token,
            json.token_type,
            json.expires_in,
            json.userName);

        return toReturn;
    }
}