import { ClipboardText } from '@ui/Text/';

import s from './card.module.css';

interface ICard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Card({ icon, title, description }: ICard) {
  return (
    <div className={`group ${s.body}`}>
      <div>
        <h6>{title}</h6>
        <ClipboardText text={description} />
      </div>
      <div
        className={`group-hover:-top-2 group-hover:-right-2 ${s.decoration}`}
      >
        <div
          className={`group-hover:opacity-100 group-hover:text-purple-700 group-hover:skew-x-0 group-hover:scale-50 dark:group-hover:text-purple-500 ${s.image}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Card;
