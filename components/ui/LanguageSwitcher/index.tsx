import LangugageIcon from '@icons/Language';
import s from './languageswitcher.module.css';

const languageSupports = [
  {
    label: 'English',
    route: '/en',
  },
  {
    label: 'Português',
    route: '/pt',
  },
];

function LanguageSwitcher() {
  return (
    <div className={`group ${s.button}`}>
      <button>
        <LangugageIcon />
      </button>
      <ul className={`group-hover:scale-y-100  ${s.list}`}>
        {languageSupports.map(({ label, route }, index) => (
          <li key={`${label}_${index}`}>
            <a className={`${s.item} whitespace-no-wrap `} href={route}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
