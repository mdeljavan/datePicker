import { gregorian_to_jalali, jalali_to_gregorian } from './changeDate';
class JalaliDate {
    datej;
    dateg;
    constructor(year = null, month = null, day = null) {
        if (year && month && day) {
            const _dateg = jalali_to_gregorian(year, month-1, day);
            this.dateg = new Date(_dateg[0], _dateg[1]-1, _dateg[2]);
        }
        else if (year === null && month === null && day === null) {
            this.dateg = new Date();
            this.datej = gregorian_to_jalali(this.dateg.getFullYear(), this.dateg.getMonth() + 1, this.dateg.getDate());
        }

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
        return this.dateg.getDay();
    }
}

export default JalaliDate;