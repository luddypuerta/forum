
import * as moment from 'moment';


export function getElapsedTime(date: number): string {
    let dateinitial = moment.utc(date * 1000);
    dateinitial.locale("es");
    return dateinitial.fromNow();
}

export function getCurrentDateInNumber(): number {
    const nowDate = moment().utc();
    nowDate.locale("es");
    return nowDate.unix();
}