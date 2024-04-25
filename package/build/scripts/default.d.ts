import { CSSClasses, FormatDateString, IActions, IDates, IDOMTemplates, ILocale, IPopups, ISettings, ToggleSelected, TypesCalendar } from '../types';

export default class DefaultOptionsCalendar {
    isInit: boolean;
    input: boolean;
    type: TypesCalendar;
    months: number;
    jumpMonths: number;
    toggleSelected: ToggleSelected;
    jumpToSelectedDate: boolean;
    date: IDates;
    settings: ISettings;
    locale: ILocale;
    sanitizer: (dirtyHtml: string) => string;
    actions: IActions;
    popups: IPopups;
    CSSClasses: CSSClasses;
    DOMTemplates: IDOMTemplates;
    HTMLElement: HTMLElement;
    HTMLOriginalElement: HTMLElement;
    HTMLInputElement?: HTMLInputElement;
    rangeMin: FormatDateString;
    rangeMax: FormatDateString;
    rangeDisabled: FormatDateString[];
    rangeEnabled: FormatDateString[];
    selectedDates: FormatDateString[];
    selectedHolidays: FormatDateString[];
    selectedMonth: number;
    selectedYear: number;
    selectedHours: string;
    selectedMinutes: string;
    selectedKeeping: string;
    selectedTime: string;
    currentType: TypesCalendar;
    correctMonths: number;
    viewYear: number;
    dateMin: Date;
    dateMax: Date;
}
//# sourceMappingURL=default.d.ts.map