import GithubIcon from '@icons/Github';
import CssIcon from '@icons/techs/Css';
import FastAPIIcon from '@icons/techs/Fastapi';
import FirebaseIcon from '@icons/techs/Firebase';
import GitIcon from '@icons/techs/Git';
import HtmlIcon from '@icons/techs/Html';
import JSIcon from '@icons/techs/JS';
import NextIcon from '@icons/techs/Next';
import PythonIcon from '@icons/techs/Python';
import ReactIcon from '@icons/techs/React';
import TailwindIcon from '@icons/techs/Tailwind';
import TSIcon from '@icons/techs/TS';

import IconWrapper from '@ui/IconWrapper';

import s from './tech.module.css';

const TechStack = () => {
  return (
    <ul className={s.techstack_list}>
      {[
        <HtmlIcon />,
        <CssIcon />,
        <TailwindIcon />,
        <JSIcon />,
        <TSIcon />,
        <ReactIcon />,
        <NextIcon />,
        <PythonIcon />,
        <FastAPIIcon />,
        <FirebaseIcon />,
        <GithubIcon />,
        <GitIcon />,
      ].map((v, i) => (
        <li key={i} className={s.techstack_wrapper}>
          <IconWrapper className={s.icon} icon={v} />
        </li>
      ))}
    </ul>
  );
};

function TechSection() {
  return (
    <div className={s.techsection}>
      <div className={s.marquee}>
        <TechStack />
        <TechStack />
        <TechStack />
        <TechStack />
      </div>
    </div>
  );
}

export default TechSection;
