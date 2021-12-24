import IconLabelWrapper from './styles';

interface IIconLabel {
	label: string;
	icon: React.ReactNode;
}

const IconLabel = ({ label, icon }: IIconLabel) => {
	return (
		<IconLabelWrapper>
			{icon}
			<span>{label}</span>
		</IconLabelWrapper>
	);
};

export default IconLabel;
