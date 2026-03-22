import { useLayoutEffect, useRef, useState } from 'react';
import { asset } from '../utils/assets';

const PEARL_SRC = asset('MultiBlock_Pearl.png');
const PEARL_PX = 18;

export default function PearlDivider() {
  const containerRef = useRef(null);
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cs = getComputedStyle(el);
        const pl = parseFloat(cs.paddingLeft) || 0;
        const pr = parseFloat(cs.paddingRight) || 0;
        const inner = el.clientWidth - pl - pr;
        const n = Math.max(1, Math.floor(inner / PEARL_PX));
        setCount((prev) => (prev === n ? prev : n));
      });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full min-w-0 items-center justify-between bg-[#F8F5F1] py-0"
      role="presentation"
    >
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={PEARL_SRC}
          alt=""
          width={PEARL_PX}
          height={PEARL_PX}
          className="block shrink-0 object-contain !h-[18px] !w-[18px] !max-w-[18px]"
          aria-hidden
        />
      ))}
    </div>
  );
}
