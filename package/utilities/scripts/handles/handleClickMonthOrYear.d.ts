import { VanillaCalendar } from '../../vanilla-calendar';

type HandleType = 'month' | 'year';
type HandleCSSClasses = {
    header: string;
    item: string;
    column: string;
};
declare const handleClickMonthOrYear: (self: VanillaCalendar, event: MouseEvent, type: HandleType, CSSClasses: HandleCSSClasses) => void;
export default handleClickMonthOrYear;
//# sourceMappingURL=handleClickMonthOrYear.d.ts.map