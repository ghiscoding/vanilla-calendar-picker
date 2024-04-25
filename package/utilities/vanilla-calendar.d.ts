import { default as DefaultOptionsCalendar } from './scripts/default';
import { IOptions, IReset, IVanillaCalendar } from './types';

export declare class VanillaCalendar extends DefaultOptionsCalendar implements IVanillaCalendar {
    constructor(selector: HTMLElement | string, options?: Partial<IOptions>);
    init: () => () => void;
    update: (reset?: IReset) => void;
    destroy: () => void;
    show: () => void;
    hide: () => void;
}
//# sourceMappingURL=vanilla-calendar.d.ts.map