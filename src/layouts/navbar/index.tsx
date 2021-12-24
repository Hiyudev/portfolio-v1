import { useTheme } from '../../hooks/useTheme';
import { NavWrapper, ToggleButton } from './styles';

function Navbar() {
	const { theme, setTheme } = useTheme();
	const handleTheme = (b: boolean) => {
		const theme = b ? 'dark' : 'light';
		setTheme(theme);
	};

	return (
		<NavWrapper>
			<ToggleButton
				onChange={(e) => handleTheme(e.target.checked)}
				checked={theme === 'dark'}
				type="checkbox"
			/>
		</NavWrapper>
	);
}

export default Navbar;
