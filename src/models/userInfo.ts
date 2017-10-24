export class UserInfo {
    private cities: string[];
    private score: number;
    private affinities: string[];
    private name: string;

    constructor(jsonObj: any) {
        this.cities = jsonObj.cities;
        this.score = jsonObj.score;
        this.affinities = jsonObj.affinities;
        this.name = jsonObj.name;
    }

    public getName(): string {
        return this.name;
    }

    public getCities(): string[] {
        return this.cities;
    }

    public getScore(): number {
        return this.score;
    }

    public getAffinities(): string[] {
        return this.affinities;
    }
}