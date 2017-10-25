export class Score {
    private points: number;
    private affinities: Map<string, number>;
    private cities: Map<number, number>;

    constructor(jsonObj: any) {
        this.points = jsonObj.points;
        this.affinities = jsonObj.affinities;
        this.cities = jsonObj.cities;
    }

    public getPoints(): number {
        return this.points;
    }

    public getAffinities(): Map<string, number> {
        return this.affinities;
    }

    public getCities(): Map<number, number> {
        return this.cities;
    }
}