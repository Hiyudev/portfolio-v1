import DiscordIcon from 'src/assets/icons/Discord';
import GithubIcon from 'src/assets/icons/Github';
import MailIcon from 'src/assets/icons/Mail';
import { useTheme } from '../../hooks/useTheme';
import { ContactList, NavWrapper, ToggleButton } from './styles';

function Navbar() {
	const { theme, setTheme } = useTheme();
	const handleTheme = (b: boolean) => {
		const theme = b ? 'dark' : 'light';
		setTheme(theme);
	};

	return (
		<NavWrapper>
			<ContactList>
				<a href="https://discord.gg/MvZvtbUJJc" target="_blank">
					<DiscordIcon />
				</a>
				<a href="https://github.com/KeysHD" target="_blank">
					<GithubIcon />
				</a>
				<a href="mailto:yuki2dev@protonmail.com">
					<MailIcon />
				</a>
			</ContactList>

			<ToggleButton
				onChange={(e) => handleTheme(e.target.checked)}
				checked={theme === 'dark'}
				type="checkbox"
			/>
		</NavWrapper>
	);
}

export default Navbar;
