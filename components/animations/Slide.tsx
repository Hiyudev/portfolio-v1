import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type Direction = 'x' | 'y';

interface ISlideAnimation {
  reverse?: boolean;
  direction?: Direction;
  children: React.ReactNode;
}

function Slide({ reverse, direction = 'x', children }: ISlideAnimation) {
  const slideRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  let startAnim = {
    opacity: 0,
  };

  startAnim[direction] = reverse ? '50%' : '-50%';

  useEffect(() => {
    gsap.fromTo(slideRef.current, startAnim, {
      opacity: 1,
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: slideRef.current,
        start: 'top 60%',
        end: 'center 75%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="overflow-hidden" ref={slideRef}>
      {children}
    </div>
  );
}

export default Slide;
