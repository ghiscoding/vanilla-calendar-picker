import { IOptions, IReset, IPartialSettings, IVanillaCalendar } from '@src/types';
import DefaultOptionsCalendar from '@scripts/default';
import init from '@scripts/init';
import update from '@scripts/update';
import destroy from '@scripts/destroy';
import show from '@scripts/show';
import hide from '@scripts/hide';
import { changeSetting } from '@scripts/changeSetting';
import messages from '@scripts/helpers/getMessages';

export class VanillaCalendar extends DefaultOptionsCalendar implements IVanillaCalendar {
	constructor(selector: HTMLElement | string, options?: Partial<IOptions>) {
		super();

		this.HTMLElement = (typeof selector === 'string' ? document.querySelector(selector) : selector) as HTMLElement;

		if (!this.HTMLElement) throw new Error(messages.notFoundSelector(selector));

		if (!options) return;

		const replaceProperties = <T extends object>(original: T, replacement: T) => {
			(Object.keys(replacement) as Array<keyof T>).forEach((key) => {
				if (typeof original[key] === 'object' && typeof replacement[key] === 'object' && !(replacement[key] instanceof Date)) {
					replaceProperties(original[key] as object, replacement[key] as object);
				} else {
					original[key] = replacement[key];
				}
			});
		};
		replaceProperties(this, options);
	}

	init = () => init(this);

	update = (reset?: IReset) => update(this, reset);

	destroy = () => destroy(this);

	show = () => show(this);

	hide = () => hide(this);

	changeSetting = <T extends keyof IPartialSettings, K extends Partial<IPartialSettings[T]>>(option: T, value: K) => changeSetting(this, option, value);
}
