import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		main: {
			default: string;
			dark: string;
		};
		colors: {
			gray: string;
			text: string;
			primary: string;
			primaryContrast: string;
		};
	}
}
