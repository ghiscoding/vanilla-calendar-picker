import * as T from '@src/types';
export default class DefaultOptionsCalendar {
    isInit: boolean;
    input: boolean;
    type: T.TypesCalendar;
    months: number;
    jumpMonths: number;
    toggleSelected: T.ToggleSelected;
    jumpToSelectedDate: boolean;
    date: T.IDates;
    settings: T.ISettings;
    locale: T.ILocale;
    sanitizer: (dirtyHtml: string) => string;
    actions: T.IActions;
    popups: T.IPopups;
    CSSClasses: T.CSSClasses;
    DOMTemplates: T.IDOMTemplates;
    HTMLElement: HTMLElement;
    HTMLOriginalElement: HTMLElement;
    HTMLInputElement?: HTMLInputElement;
    rangeMin: T.FormatDateString;
    rangeMax: T.FormatDateString;
    rangeDisabled: T.FormatDateString[];
    rangeEnabled: T.FormatDateString[];
    selectedDates: T.FormatDateString[];
    selectedHolidays: T.FormatDateString[];
    selectedMonth: number;
    selectedYear: number;
    selectedHours: string;
    selectedMinutes: string;
    selectedKeeping: string;
    selectedTime: string;
    currentType: T.TypesCalendar;
    correctMonths: number;
    viewYear: number;
    dateMin: Date;
    dateMax: Date;
}
//# sourceMappingURL=default.d.ts.map