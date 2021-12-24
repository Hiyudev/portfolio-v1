import Image from 'next/image';
import LinkIcon from 'src/assets/icons/Link';
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
	website: string;
	github: string;
	reverse?: boolean;
	isClient: boolean;
}

function Project({
	title,
	thumbnail,
	description,
	tags,
	website,
	github,
	isClient,
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
				<div>
					<h2>{title}</h2>
					{isClient && <small>Client project</small>}
				</div>

				<p>{description}</p>

				<ul>
					{tags.map((v, i) => (
						<li key={i}>{v}</li>
					))}
				</ul>

				<ProjectFooter>
					{github && (
						<a target="_blank" href={github}>
							<GithubIcon />
						</a>
					)}
					{website && (
						<a target="_blank" href={website}>
							<LinkIcon />
						</a>
					)}
				</ProjectFooter>
			</ProjectCard>
		</ProjectWrapper>
	);
}

export default Project;
