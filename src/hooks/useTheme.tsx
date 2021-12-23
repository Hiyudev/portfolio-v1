import { createContext, useContext } from 'react';
import themes from '../themes';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from './useLocalStorage';

interface ThemeContextInterface {
	theme: string;
	setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextInterface>(
	{} as ThemeContextInterface
);

export const ThemeWrapper: React.FC = ({ children }) => {
	const [theme, setTheme] = useLocalStorage('@theme', 'dark');

	const contextProps = {
		theme,
		setTheme,
	};

	return (
		<ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
			<ThemeContext.Provider value={contextProps}>
				{children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
};

export function useTheme() {
	return useContext(ThemeContext);
}
