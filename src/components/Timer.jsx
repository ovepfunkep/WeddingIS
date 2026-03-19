import { useState, useEffect } from 'react';
import { asset } from '../utils/assets';

const WEDDING_DATE = new Date('2026-08-24T15:00:00');

function pluralize(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

function PearlSeparator() {
  return (
    <div className="flex flex-col items-center gap-0 w-[15px] shrink-0">
      {[0, 1, 2, 3].map((i) => (
        <img key={i} src={asset('MultiBlock_Pearl.png')} alt="" className="w-[15px] h-[15px] object-cover mix-blend-screen" />
      ))}
    </div>
  );
}

export default function Timer() {
  const [diff, setDiff] = useState(getDiff());

  function getDiff() {
    const now = new Date();
    const ms = WEDDING_DATE - now;
    if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / 60000) % 60;
    const hours = Math.floor(ms / 3600000) % 24;
    const days = Math.floor(ms / 86400000);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const id = setInterval(() => setDiff(getDiff()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: diff.days, label: pluralize(diff.days, 'день', 'дня', 'дней') },
    { value: diff.hours, label: pluralize(diff.hours, 'час', 'часа', 'часов') },
    { value: diff.minutes, label: pluralize(diff.minutes, 'минута', 'минуты', 'минут') },
    { value: diff.seconds, label: pluralize(diff.seconds, 'секунда', 'секунды', 'секунд') },
  ];

  return (
    <section className="relative w-full bg-[#768c5e] overflow-hidden mt-[60px] lg:mt-[100px] min-h-[400px] lg:min-h-[600px]">
      {/* Left heart */}
      <img
        src={asset('Block8_timer block left heart.png')}
        alt=""
        className="hidden lg:block absolute left-[-40px] top-1/2 -translate-y-1/2 w-[237px] opacity-80 pointer-events-none"
      />
      {/* Right heart */}
      <img
        src={asset('Block8_timer block right heart.png')}
        alt=""
        className="hidden lg:block absolute right-[-40px] top-1/2 -translate-y-1/2 w-[237px] opacity-80 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full py-[60px] lg:py-[80px] px-[16px]">
        {/* Heading */}
        <h2 className="font-serif font-semibold text-[36px] lg:text-[74px] leading-[1.08] text-white tracking-[-0.03em] text-center max-w-[786px] mb-[40px] lg:mb-[100px]">
          До&nbsp;следующего уровня осталось
        </h2>

        {/* Timer countdown */}
        <div className="flex items-start justify-center gap-[8px] lg:gap-0 w-full">
          {units.map((unit, i) => (
            <div key={unit.label} className="contents">
              <div className="flex flex-col items-center text-center text-white w-[70px] lg:w-[151px]">
                <p className="font-serif font-semibold text-[32px] lg:text-[56px] leading-[0.75] tracking-[-0.01em]">
                  {String(unit.value).padStart(2, '0')}
                </p>
                <p className="text-[12px] lg:text-[24px] font-light tracking-[-0.04em] mt-[8px]">
                  {unit.label}
                </p>
              </div>
              {i < units.length - 1 && <PearlSeparator />}
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-[18px] lg:text-[24px] leading-[1.42] text-white text-center tracking-[-0.04em] mt-[40px] lg:mt-[100px]">
          <p className="font-light">Спасибо, что вы&nbsp;с&nbsp;нами</p>
          <p className="italic">Это будет наш лучший день</p>
        </div>
      </div>
    </section>
  );
}
