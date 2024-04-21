import { FormatDateString } from '@src/types';

const getDateString = (date: Date, asUtc = false) => {
	if (asUtc) {
		return date.toISOString().substring(0, 10) as FormatDateString;
	}

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}` as FormatDateString;
};

export default getDateString;
