import { Tag, TagBody, TagsEnd, TagsStart } from './styles';

interface ISection {
	tagname: string;
	children: React.ReactNode;
}
function Section({ tagname, children }: ISection) {
	return (
		<Tag>
			<TagsStart>{tagname}</TagsStart>
			<TagBody>{children}</TagBody>
			<TagsEnd>{tagname}</TagsEnd>
		</Tag>
	);
}

export default Section;
