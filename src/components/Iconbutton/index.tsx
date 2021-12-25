import { ButtonWrapper } from './styles';

interface IIconButton {
	icon: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function IconButton({ icon, onClick }: IIconButton) {
	return <ButtonWrapper onClick={onClick}>{icon}</ButtonWrapper>;
}

export default IconButton;
