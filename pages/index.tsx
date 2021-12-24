import styled from 'styled-components';
import { getAbout, getProjects } from '../src/lib/notion';
import HeroPage from '../src/layouts/hero';
import Navbar from '../src/layouts/navbar';
import IProject from '../src/shared/NotionAPI';
import device from '../src/styles/device';
import icons from '../src/assets/icons';

import Project from '@components/project';
import List from '@components/list';
import Section from '@components/section';
import IconLabel from '@components/iconlabel';
import Footer from 'src/layouts/footer';

const Home = styled.main`
	padding-left: 8rem;
	padding-right: 8rem;

	@media ${device.max.laptop} {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media ${device.max.tablet} {
		padding-left: 2rem;
		padding-right: 2rem;
	}

	@media ${device.max.mobile} {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
`;

interface IHomePage {
	projects: IProject[];
	about: string;
}

export default function HomePage({ projects, about }: IHomePage) {
	return (
		<Home>
			<Navbar />

			<HeroPage />

			<Section tagname="about">{about}</Section>

			<Section tagname="tech">
				<List>
					<IconLabel icon={<icons.HtmlIcon />} label="HTML5" />
					<IconLabel icon={<icons.CssIcon />} label="CSS3" />
					<IconLabel icon={<icons.JavascriptIcon />} label="Javascript" />
					<IconLabel icon={<icons.TypescriptIcon />} label="Typescript" />
					<IconLabel icon={<icons.ReactIcon />} label="React.JS" />
					<IconLabel icon={<icons.NextIcon />} label="Next.JS" />
					<IconLabel icon={<icons.PythonIcon />} label="Python" />
					<IconLabel icon={<icons.FirebaseIcon />} label="Firebase" />
				</List>
			</Section>

			<Section tagname="projects">
				{projects.map((v, i) => (
					<Project
						key={i}
						reverse={i % 2 == 0}
						title={v.title}
						thumbnail={v.thumbnail}
						description={v.description}
						tags={v.tags}
						link={v.link}
					/>
				))}
			</Section>

			<Footer />
		</Home>
	);
}

export async function getStaticProps() {
	const projects = await getProjects();
	const about = await getAbout();

	return {
		props: {
			projects,
			about,
		},
	};
}
