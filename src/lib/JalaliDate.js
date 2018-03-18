import { gregorian_to_jalali, jalali_to_gregorian } from './changeDate';
class JalaliDate {
    todayj;
    constructor() {
        const todayg = new Date();
        todayj = gregorian_to_jalali(todayg.getFullYear(), todayg.getMonth(), todayg.getDate());
    };
    constructor(year, month, day) {
        const todayg = new Date();
        todayj = gregorian_to_jalali(todayg.getFullYear(), todayg.getMonth(), todayg.getDate());
    };
    getFullYear = () => {
        return this.todayj[0];
    };
    getMonth() {
        return this.todayj[1];
    }
    getDate() {
        return this.todayj[2];
    }
    getDay() {

    }
}

export default JalaliDate;