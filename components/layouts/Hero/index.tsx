import s from './hero.module.css';
import ArrowDownIcon from '@icons/ArrowDown';
import GlobeIcon from '@icons/Globe';
import MobileIcon from '@icons/Mobile';
import RobotIcon from '@icons/Robot';
import ServerIcon from '@icons/Server';
import IconWrapper from '@ui/IconWrapper';

function HeroSection({ children, onClick }) {
  return (
    <div className={s.section}>
      <div className={s.hero}>
        {children}

        <div className={s.iconlist}>
          <IconWrapper className={s.icon} margin icon={<RobotIcon />} />
          <IconWrapper className={s.icon} icon={<GlobeIcon />} />
          <IconWrapper className={s.icon} margin icon={<MobileIcon />} />
          <IconWrapper className={s.icon} icon={<ServerIcon />} />
        </div>
      </div>
      <div className={s.arrowbutton}>
        <button onClick={onClick} className={s.arrow}>
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
