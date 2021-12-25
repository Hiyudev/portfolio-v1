import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

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
import { Contact, ContactInfo, ContactList } from '@components/contact';
import TwitterIcon from 'src/assets/icons/Twitter';
import DiscordIcon from 'src/assets/icons/Discord';
import MailIcon from 'src/assets/icons/Mail';
import IconButton from '@components/Iconbutton';
import ClipboardIcon from 'src/assets/icons/Clipboard';
import { useTheme } from 'src/hooks/useTheme';
import GithubIcon from 'src/assets/icons/Github';

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
	const { theme } = useTheme();
	const notify = () =>
		toast.success('Copied on clipboard !', {
			theme: theme === 'dark' ? 'dark' : 'light',
		});

	return (
		<Home>
			<ToastContainer
				position="bottom-center"
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>

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
						website={v.website}
						github={v.github}
						isClient={v.client}
					/>
				))}
			</Section>

			<Section tagname="contact-me">
				<ContactList>
					<Contact color="#1DA1F2">
						<TwitterIcon />
						<div>
							<h2>Twitter</h2>

							<ContactInfo>
								<small>@Yuki2dev</small>
								<IconButton
									icon={<ClipboardIcon />}
									onClick={() => {
										notify();
										navigator.clipboard.writeText('@Yuki2dev');
									}}
								/>
							</ContactInfo>
						</div>
					</Contact>
					<Contact color="#5865F2">
						<DiscordIcon />
						<div>
							<h2>Discord</h2>
							<ContactInfo>
								<small>Yuki2dev#6914</small>
								<IconButton
									icon={<ClipboardIcon />}
									onClick={() => {
										notify();
										navigator.clipboard.writeText('Yuki2dev#6914');
									}}
								/>
							</ContactInfo>
						</div>
					</Contact>
					<Contact color="#8B89CC">
						<MailIcon />
						<div>
							<h2>E-Mail</h2>
							<ContactInfo>
								<small>yuki2dev@protonmail.com</small>
								<IconButton
									icon={<ClipboardIcon />}
									onClick={() => {
										notify();
										navigator.clipboard.writeText('yuki2dev@protonmail.com');
									}}
								/>
							</ContactInfo>
						</div>
					</Contact>
					<Contact color="#797979">
						<GithubIcon />
						<div>
							<h2>Github</h2>
							<ContactInfo>
								<small>KeysHD</small>
								<IconButton
									icon={<ClipboardIcon />}
									onClick={() => {
										notify();
										navigator.clipboard.writeText('KeysHD');
									}}
								/>
							</ContactInfo>
						</div>
					</Contact>
				</ContactList>
			</Section>

			<Footer />
		</Home>
	);
}

export async function getServerSideProps() {
	const projects = await getProjects();
	const about = await getAbout();

	return {
		props: {
			projects,
			about,
		},
	};
}
