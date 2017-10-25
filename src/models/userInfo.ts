import { Score } from "./score";

export class UserInfo {
    public cities: string[];
    public score: Score;
    public affinities: string[];
    public name: string;
    public img: string;

    constructor(jsonObj: any) {
        this.cities = jsonObj.cities;
        this.score = new Score(jsonObj.score);
        this.affinities = jsonObj.affinities;
        this.name = jsonObj.name;
        this.img = jsonObj.img;
    }

    public getName(): string {
        return this.name;
    }

    public getCities(): string[] {
        return this.cities;
    }

    public getScore(): Score {
        return this.score;
    }

    public getAffinities(): string[] {
        return this.affinities;
    }

    public getImg(): string {
        return this.img;
    }

    public setCities(cities: string[]): UserInfo {
        this.cities = cities;
        return this;
    }
}