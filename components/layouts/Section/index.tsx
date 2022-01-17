import { forwardRef } from 'react';

import s from './section.module.css';

const Section = (props, ref) => {
  return (
    <section ref={ref} className={s.content}>
      {props.children}
    </section>
  );
};

export default forwardRef(Section);
