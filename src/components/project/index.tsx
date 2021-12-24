import Image from 'next/image';
import GithubIcon from '../../assets/icons/Github';
import {
	ProjectWrapper,
	ProjectCard,
	ProjectPreview,
	ProjectFooter,
} from './styles';

interface IProject {
	title: string;
	thumbnail: string;
	description: string;
	tags: string[];
	link: string;
	reverse?: boolean;
}

function Project({
	title,
	thumbnail,
	description,
	tags,
	link,
	reverse,
}: IProject) {
	return (
		<ProjectWrapper reverse={reverse}>
			<ProjectPreview>
				<Image
					layout="responsive"
					width={'600'}
					height={'350'}
					src={thumbnail}
					alt="Project preview"
				/>
			</ProjectPreview>

			<ProjectCard>
				<h2>{title}</h2>

				<p>{description}</p>

				<ul>
					{tags.map((v, i) => (
						<li key={i}>{v}</li>
					))}
				</ul>

				<ProjectFooter>
					<a target="_blank" href={link}>
						<GithubIcon />
					</a>
				</ProjectFooter>
			</ProjectCard>
		</ProjectWrapper>
	);
}

export default Project;
