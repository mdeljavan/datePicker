import { gregorian_to_jalali, jalali_to_gregorian } from './changeDate';
class JalaliDate {
    datej;
    dateg;
    constructor() {
        this.dateg = new Date();
        this.datej = gregorian_to_jalali(this.dateg.getFullYear(), this.dateg.getMonth(), this.dateg.getDate());
    };
    getFullYear = () => {
        return this.datej[0];
    };
    getMonth() {
        return this.datej[1];
    }
    getDate() {
        return this.datej[2];
    }
    getDay() {
        return new Date(this.dateg[0], this.dateg[1], this.dateg[2]).getDay();
    }
}

export default JalaliDate;