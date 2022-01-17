import s from './item.module.css';

interface IItem {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

interface IFilledItem extends IItem {
  className: string;
}

function Item({ title, icon, children }: IItem) {
  return (
    <div className={s.item}>
      <div>
        <div
          className={`${s.icon} bg-purple-700 dark:bg-purple-500 text-white`}
        >
          {icon}
        </div>
      </div>
      <div>
        <p className={`${s.title} text-black dark:text-white`}>{title}</p>
        <div className={`${s.desc} text-gray-500 dark:text-gray-400`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function FilledItem({ className, title, icon, children }: IFilledItem) {
  return (
    <div className={`${s.item} ${className}`}>
      <div>
        <div className={s.icon}>{icon}</div>
      </div>
      <div>
        <p className={s.title}>{title}</p>
        <div className={s.desc}>{children}</div>
      </div>
    </div>
  );
}

export default Item;
