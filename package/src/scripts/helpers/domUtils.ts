export type InferDOMType<T> = T extends CSSStyleDeclaration ? Partial<CSSStyleDeclaration> : T extends infer R ? R : any;

/**
 * Create a DOM Element with any optional attributes or properties.
 * It will only accept valid DOM element properties that `createElement` would accept.
 * For example: `createDomElement('div', { className: 'my-css-class' })`,
 * for style or dataset you need to use nested object `{ style: { display: 'none' }}
 * The last argument is to optionally append the created element to a parent container element.
 * @param {String} tagName - html tag
 * @param {Object} options - element properties
 * @param {[HTMLElement]} appendToParent - parent element to append to
 */
export function createDomElement<T extends keyof HTMLElementTagNameMap, K extends keyof HTMLElementTagNameMap[T]>(
	tagName: T,
	elementOptions?: { [P in K]: InferDOMType<HTMLElementTagNameMap[T][P]> },
	appendToParent?: HTMLElement,
): HTMLElementTagNameMap[T] {
	const elm = document.createElement<T>(tagName);

	if (elementOptions) {
		Object.keys(elementOptions).forEach((elmOptionKey) => {
			const elmValue = elementOptions[elmOptionKey as keyof typeof elementOptions];
			if (typeof elmValue === 'object') {
				Object.assign(elm[elmOptionKey as K] as object, elmValue);
			} else {
				elm[elmOptionKey as K] = (elementOptions as any)[elmOptionKey as keyof typeof elementOptions];
			}
		});
	}
	if (appendToParent?.appendChild) {
		appendToParent.appendChild(elm);
	}
	return elm;
}
