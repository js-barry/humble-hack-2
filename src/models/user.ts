import { UserInfo } from './userInfo';

export class User {
    private id: string;
    private info: UserInfo;

    constructor(jsonObj: any) {
        this.id = jsonObj.id;
        this.info = new UserInfo(jsonObj.info);
    }

    public getId(): string {
        return this.id;
    }

    public getInfo(): UserInfo {
        return this.info;
    }
}