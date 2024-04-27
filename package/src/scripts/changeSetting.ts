import { VanillaCalendar } from '@src/vanilla-calendar';
import { IPartialSettings } from '../types';

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: any, ...sources: any[]): any {
	const isObject = (item: any) => (item && typeof item === 'object' && !Array.isArray(item));

	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach((key: any) => {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		});
	}

	return mergeDeep(target, ...sources);
}

export function changeSetting<T extends keyof IPartialSettings, K extends Partial<IPartialSettings[T]>>(self: VanillaCalendar, option: T, value: K) {
	self.settings = mergeDeep(self.settings, { [option]: value });
}
