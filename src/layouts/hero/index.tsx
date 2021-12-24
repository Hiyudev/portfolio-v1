import LogoIcon from '../../assets/icons/Logo';
import { Tagged, StyledText } from '../../components/tagtext';
import { HeroWrapper } from './styles';

function HeroPage() {
	return (
		<HeroWrapper>
			<LogoIcon />

			<div>
				<h2>
					<StyledText>Hi i'm</StyledText>
				</h2>
				<h1>
					<Tagged>YUKI</Tagged>
				</h1>
				<p>Passionate full-stack developer</p>
			</div>
		</HeroWrapper>
	);
}

export default HeroPage;
