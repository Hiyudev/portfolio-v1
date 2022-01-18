import { Fragment, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import DiscordIcon from '@icons/Discord';
import GithubIcon from '@icons/Github';
import GlobeIcon from '@icons/Globe';
import PencilRulerIcon from '@icons/PencilRuler';
import PhotonMailIcon from '@icons/PhotonMail';
import RobotIcon from '@icons/Robot';
import TwitterIcon from '@icons/Twitter';
import WarningIcon from '@icons/Warning';
import HeroSection from '@layouts/Hero';
import LayoutSection from '@layouts/Layout';
import NavbarSection from '@layouts/Navbar';
import ProjectSection from '@layouts/Project';
import Section from '@layouts/Section';
import TechSection from '@layouts/Tech';
import { getProjects } from '@lib/notion';
import Card from '@ui/Card';
import Item, { FilledItem } from '@ui/Item';
import { TagText } from '@ui/Text';
import Slide from 'components/animations/Slide';

const HomePage = ({ projects }) => {
  const { t } = useTranslation('common');
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };
  return (
    <Fragment>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <LayoutSection>
        <NavbarSection
          aboutRef={aboutRef}
          projectRef={projectRef}
          serviceRef={serviceRef}
          contactRef={contactRef}
        />

        <HeroSection onClick={handleClick}>
          <div className="flex flex-col space-y-4 text-black dark:text-white">
            <h2 className="uppercase text-transparent text-stroke text-stroke-black dark:text-stroke-white">
              {t('heroTitle')}
            </h2>
            <h1 className="uppercase">
              <TagText>Yuki</TagText>
            </h1>
            <p>{t('heroDescription')}</p>
          </div>
        </HeroSection>

        <Section ref={projectRef}>
          <Slide direction="x">
            <h2 className="title">{t('projectTitle')}</h2>
          </Slide>

          <ProjectSection list={projects} />
        </Section>

        <Section ref={aboutRef}>
          <Slide direction="x">
            <h2 className="title">{t('aboutTitle')}</h2>
          </Slide>
          <Slide direction="x">
            <p>{t('aboutDescription')}</p>
          </Slide>
        </Section>

        <Slide direction="y">
          <TechSection />
        </Slide>

        <Section ref={serviceRef}>
          <Slide direction="x">
            <h2 className="title">{t('serviceTitle')}</h2>
          </Slide>

          <ul className="ml-0 flex flex-col space-y-4 sm:space-y-0 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Slide direction="y">
              <Item icon={<GlobeIcon />} title="Websites">
                <p>{t('websiteDescription')}</p>
                <ul>
                  <li>{t('websiteDesign')}</li>
                  <li>{t('websiteSEO')}</li>
                  <li>Meta tags</li>
                  <li>{t('serviceDescription')}</li>
                </ul>
              </Item>
            </Slide>
            <Slide direction="y">
              <Item icon={<RobotIcon />} title="Discord Bots">
                <p>{t('discordDescription')}</p>
                <ul>
                  <li>{t('discordCustom')}</li>
                  <li>{t('discordCommands')}</li>
                  <li>{t('discordReaction')}</li>
                  <li>{t('serviceDescription')}</li>
                </ul>
              </Item>
            </Slide>
            <Slide direction="y">
              <Item icon={<PencilRulerIcon />} title="Design">
                <ul>
                  <li>{t('designDescription')}</li>
                  <li>{t('designList')}</li>
                  <ul>
                    <li>Twitch.tv</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                  </ul>
                </ul>
              </Item>
            </Slide>
          </ul>
          <Slide direction="y">
            <FilledItem
              className="p-4 rounded-xl bg-purple-700 dark:bg-purple-500 text-white"
              icon={<WarningIcon />}
              title={t('alertTitle')}
            >
              <p>{t('alertDescription')}</p>
            </FilledItem>
          </Slide>
        </Section>

        <Section ref={contactRef}>
          <Slide>
            <h2 className="title">{t('contactTitle')}</h2>
          </Slide>

          <Slide reverse>
            <ul className="ml-0 flex flex-col space-y-8 sm:space-y-0 sm:gap-4 sm:grid sm:grid-cols-2">
              <Card
                title="E-Mail"
                description="yuki2dev@protonmail.com"
                icon={<PhotonMailIcon />}
              />
              <Card title="Github" description="KeysHD" icon={<GithubIcon />} />
              <Card
                title="Discord"
                description="Yuki2dev#6914"
                icon={<DiscordIcon />}
              />
              <Card
                title="Twitter"
                description="Yuki2dev"
                icon={<TwitterIcon />}
              />
            </ul>
          </Slide>
        </Section>
      </LayoutSection>
    </Fragment>
  );
};

export async function getServerSideProps({ locale }) {
  const projects = await getProjects();

  return {
    props: {
      projects,
      ...(await serverSideTranslations(locale, ['common', 'navbar'])),
    },
  };
}

export default HomePage;
