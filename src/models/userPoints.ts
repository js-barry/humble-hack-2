export class UserPoints {
    public rank: number;
    public total: number;

    constructor(jsonObj: any) {
        this.rank = jsonObj.rank;
        this.total = jsonObj.total;
    }

    public getRank(): number {
        return this.rank;
    }

    public getTotal(): number {
        return this.total;
    }
}