import s from './layout.module.css';

function LayoutSection({ children }) {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>{children}</div>
    </div>
  );
}

export default LayoutSection;
