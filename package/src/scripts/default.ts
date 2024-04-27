import classes from '@src/classes';
import DOMDefault from '@scripts/templates/DOMDefault';
import DOMMultiple from '@scripts/templates/DOMMultiple';
import DOMMonth from '@scripts/templates/DOMMonth';
import DOMYear from '@scripts/templates/DOMYear';
import type {
	CSSClasses,
	FormatDateString,
	IActions,
	IDates,
	IDOMTemplates,
	ILocale,
	IPopups,
	ISettings,
	ToggleSelected,
	TypesCalendar,
} from '../types';

export default class DefaultOptionsCalendar {
	isInit = false;
	input = false;
	type: TypesCalendar = 'default';
	months = 2;
	jumpMonths = 1;
	toggleSelected: ToggleSelected = true;
	jumpToSelectedDate = false;
	date: IDates = {
		min: '1970-01-01',
		max: '2470-12-31',
		today: new Date(),
	};
	settings: ISettings = {
		lang: 'en',
		iso8601: true,
		range: {
			min: this.date.min,
			max: this.date.max,
			disablePast: false,
			disableGaps: false,
			edgesOnly: false,
			disableAllDays: false,
			disableWeekday: undefined,
			disabled: undefined,
			enabled: undefined,
		},
		selection: {
			day: 'single',
			month: true,
			year: true,
			time: false,
			controlTime: 'all',
			stepHours: 1,
			stepMinutes: 1,
			cancelableDay: true,
		},
		selected: {
			dates: undefined,
			month: undefined,
			year: undefined,
			holidays: undefined,
			time: undefined,
		},
		visibility: {
			theme: 'system',
			themeDetect: 'html[data-theme]',
			monthShort: true,
			weekNumbers: false,
			weekend: true,
			today: true,
			disabled: false,
			daysOutside: true,
			positionToInput: 'left',
		},
	};
	locale: ILocale = {
		months: [],
		weekday: [],
	};
	sanitizer = (dirtyHtml: string) => dirtyHtml;
	actions: IActions = {
		clickDay: null,
		clickWeekNumber: null,
		clickMonth: null,
		clickYear: null,
		clickArrow: null,
		changeTime: null,
		changeToInput: null,
		getDays: null,
		getMonths: null,
		getYears: null,
		initCalendar: null,
		updateCalendar: null,
		destroyCalendar: null,
		showCalendar: null,
		hideCalendar: null,
	};
	popups: IPopups = {};
	CSSClasses: CSSClasses = { ...classes };
	DOMTemplates: IDOMTemplates = {
		default: DOMDefault(this.CSSClasses),
		multiple: DOMMultiple(this.CSSClasses),
		month: DOMMonth(this.CSSClasses),
		year: DOMYear(this.CSSClasses),
	};
	HTMLElement!: HTMLElement;
	HTMLOriginalElement!: HTMLElement;
	HTMLInputElement?: HTMLInputElement;
	rangeMin!: FormatDateString;
	rangeMax!: FormatDateString;
	rangeDisabled!: FormatDateString[];
	rangeEnabled!: FormatDateString[];
	selectedDates!: FormatDateString[];
	selectedHolidays!: FormatDateString[];
	selectedMonth!: number;
	selectedYear!: number;
	selectedHours!: string;
	selectedMinutes!: string;
	selectedKeeping!: string;
	selectedTime!: string;
	currentType!: TypesCalendar;
	correctMonths!: number;
	viewYear!: number;
	dateMin!: Date;
	dateMax!: Date;
}
