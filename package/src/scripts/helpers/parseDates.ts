import { FormatDateString } from '@src/types';
import getDateString from '@scripts/helpers/getDateString';
import getDate from '@scripts/helpers/getDate';

const parseDates = (dates: Array<number | string | Date>): FormatDateString[] => dates.reduce((accumulator: FormatDateString[], date) => {
	if (date instanceof Date || typeof date === 'number') {
		const d = date instanceof Date ? date : new Date(date);
		accumulator.push(d.toISOString().substring(0, 10) as FormatDateString);
	} else if (date.match(/^(\d{4}-\d{2}-\d{2})$/g)) {
		accumulator.push(date as FormatDateString);
	} else {
		date.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g, (_, startDateStr, endDateStr) => {
			const startDate = getDate(startDateStr);
			const endDate = getDate(endDateStr);
			const currentDate = new Date(startDate.getTime());

			for (currentDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
				accumulator.push(getDateString(currentDate));
			}
			return _;
		});
	}
	return accumulator;
}, []);

export default parseDates;
