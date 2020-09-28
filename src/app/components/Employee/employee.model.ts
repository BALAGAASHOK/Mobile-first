export interface IEmployee {
    id?: number;
    name?: String;
    dob?: String;
    role?: String;
    salary?: String;
    address?: String;
    experience?: String;
}
export class Employee implements IEmployee {
    constructor(
        public id?: number,
        public name?: string,
        public dob?: string,
        public role?: string,
        public salary?: string,
        public address?: string,
        public experience?: string
    ) {
        this.role = "";
    }
}