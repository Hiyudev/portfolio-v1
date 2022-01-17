import { Fragment, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'next-i18next';

import CloseIcon from '@icons/Close';
import LogoIcon from '@icons/Logo';
import MenuIcon from '@icons/Menu';
import MoonIcon from '@icons/Moon';
import SunIcon from '@icons/Sun';
import LanguageSwitcher from '@ui/LanguageSwitcher';

import s from './navbar.module.css';

function NavbarSection({ aboutRef, projectRef, contactRef, serviceRef }) {
  const { t } = useTranslation('navbar');
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  const List = () => (
    <Fragment>
      <button
        className={s.link}
        onClick={() =>
          aboutRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      >
        {t('about')}
      </button>
      <button
        className={s.link}
        onClick={() =>
          projectRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      >
        {t('projects')}
      </button>
      <button
        className={s.link}
        onClick={() =>
          serviceRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      >
        {t('services')}
      </button>
      <button
        className={s.link}
        onClick={() =>
          contactRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      >
        {t('contact')}
      </button>

      <LanguageSwitcher />

      <button onClick={switchTheme}>
        {isMounted && theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </button>
    </Fragment>
  );

  return (
    <nav className={s.navbar}>
      <div className={s.logo}>
        <LogoIcon />
      </div>

      <div className={s.navlist}>
        <button onClick={() => setShow(true)} className="pr-2 sm:hidden">
          <MenuIcon />
        </button>
        <ul className={s.link_list}>
          <List />
        </ul>
      </div>

      <div className={`${show ? 'flex' : 'hidden'} ${s.sidelist}`}>
        <div className={s.sidelist_header}>
          <button onClick={() => setShow(false)} className={s.sidelist_button}>
            <CloseIcon />
          </button>
        </div>
        <ul className={s.sidelist_body}>
          <List />
        </ul>
      </div>
    </nav>
  );
}

export default NavbarSection;
