export class UserPoints {
    public personal: number;
    public total: number;

    constructor(jsonObj: any) {
        this.personal = jsonObj.personal;
        this.total = jsonObj.total;
    }

    public getPersonal(): number {
        return this.personal;
    }

    public getTotal(): number {
        return this.total;
    }
}