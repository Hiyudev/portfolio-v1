import { Tag, TagStyle } from './styles';

export const StyledText: React.FC = ({ children }) => {
	return <TagStyle>{children}</TagStyle>;
};

export const Tagged: React.FC = ({ children }) => {
	return <Tag>{children}</Tag>;
};
