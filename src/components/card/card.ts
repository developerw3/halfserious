// Converts snake_case or underscore-separated strings into a more readable, title-case format.
export function attributeToWords(attribute: string) {
	return attribute
		.split('_')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}
