import LogoFullIcon from 'src/assets/icons/Logofull';
import { FooterWrapper } from './styles';

function Footer() {
	return (
		<FooterWrapper>
			Created & designed by
			<a href="/">
				<LogoFullIcon />
			</a>
		</FooterWrapper>
	);
}

export default Footer;
