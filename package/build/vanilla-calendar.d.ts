import { default as DefaultOptionsCalendar } from './scripts/default';
import * as T from '@src/types';
export declare class VanillaCalendar extends DefaultOptionsCalendar implements T.IVanillaCalendar {
    constructor(selector: HTMLElement | string, options?: Partial<T.IOptions>);
    init: () => () => void;
    update: (reset?: T.IReset) => void;
    destroy: () => void;
    show: () => void;
    hide: () => void;
}
//# sourceMappingURL=vanilla-calendar.d.ts.map