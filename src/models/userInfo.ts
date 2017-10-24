export class UserInfo {
    public cities: string[];
    public score: number;
    public affinities: string[];
    public name: string;

    constructor(jsonObj: any) {
        this.cities = jsonObj.cities;
        this.score = jsonObj.score.points;
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