// import * as internal from "stream";

export class Fighter {
    id?: string;
    country: string;
    fullName: string;
    picture: string;
    record: string;
    age: string;
    weightclass: string;

    constructor() {
        this.country = '';
        this.fullName = '';
        this.picture = '';
        this.record = '';
        this.age = '';
        this.weightclass = '';
    }
}