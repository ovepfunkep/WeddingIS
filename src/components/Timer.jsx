import { Fragment, useEffect, useState } from 'react';
import { asset } from '../utils/assets';

/** До 24 августа текущего года, 15:00 (локальное время устройства). */
function getWeddingDate() {
  const y = new Date().getFullYear();
  return new Date(y, 7, 24, 15, 0, 0, 0);
}

function pluralize(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

/** Стили цифр таймера (Cormorant Garamond + OpenType из макета). */
const TIMER_DIGIT_FONT = {
  fontVariantNumeric: 'ordinal',
  fontFeatureSettings: "'hlig' on, 'ss03' on, 'liga' off",
};

/** Подписи десктопного таймера (Inter + OpenType из макета). */
const TIMER_LABEL_DESKTOP_FONT = {
  fontFeatureSettings: "'dnom' on",
};

/**
 * Общие responsive-стили сердечек: мобилка 104px + max-h, десктоп Figma (lg:).
 * Сторона задаётся отдельно (left/right, top, rotate).
 */
const TIMER_HEART_CLASS =
  'pointer-events-none absolute z-0 h-auto max-h-[120px] !w-[104px] !max-w-[104px] -translate-y-1/2 object-contain opacity-80 lg:top-[calc(50%+20px)] lg:h-[225.886px] lg:max-h-none lg:!w-[237.309px] lg:!max-w-[237.309px]';

/** mobile: 5 бусин 10×10; desktop: 4 бусины 15×15 */
function PearlSeparator({ mobile }) {
  const count = mobile ? 5 : 4;
  const px = mobile ? 10 : 15;
  return (
    <div
      className={`flex shrink-0 flex-col items-center gap-0 leading-none ${mobile ? 'w-[10px]' : 'w-[15px]'}`}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={asset('MultiBlock_Pearl.png')}
          alt=""
          width={px}
          height={px}
          className={`block shrink-0 object-contain ${mobile ? 'h-[10px] w-[10px]' : 'h-[15px] w-[15px]'} mix-blend-screen`}
        />
      ))}
    </div>
  );
}

export default function Timer() {
  const [diff, setDiff] = useState(getDiff());

  function getDiff() {
    const wedding = getWeddingDate();
    const now = new Date();
    const ms = wedding - now;
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

  const mobileUnits = units.slice(0, 3);

  /** Дни без ведущих нулей; часы/минуты/секунды — 2 цифры (фикс. ширина колонки снимает «прыжки»). */
  const formatTimerValue = (value, unitIndex) =>
    unitIndex === 0 ? String(value) : String(value).padStart(2, '0');

  return (
    <section className="relative mt-[90px] min-h-[400px] w-full overflow-hidden bg-[#768c5e] lg:mt-[120px] lg:min-h-[600px]">
      <img
        src={asset('image 160.png')}
        alt=""
        className={`${TIMER_HEART_CLASS} left-[-40px] top-[320px] rotate-[12deg]`}
      />
      <img
        src={asset('timer block right heart.png')}
        alt=""
        className={`${TIMER_HEART_CLASS} right-[-40px] top-[186px] rotate-[-186deg]`}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-[16px] pb-[56px] pt-[32px] lg:pt-[40px]">
        {/* Заголовок: глобально h2 { margin: 0 } — отступ до таймера задаём mt у блока ниже */}
        <h2 className="max-w-[786px] text-center font-serif text-[56px] font-semibold leading-[56px] tracking-[-1.68px] text-white lg:text-[74px] lg:leading-[80px] lg:tracking-[-2.22px]">
          До&nbsp;следующего уровня осталось
        </h2>

        {/* Мобилка: как в Figma — flex, justify-between, align-items: flex-end; ширина 350px, по бокам 20px */}
        <div className="mt-[70px] flex w-full max-w-[350px] items-end justify-between px-[20px] lg:hidden">
          {mobileUnits.map((unit, i) => (
            <Fragment key={unit.label}>
              {/* ~3 цифры × 42px Cormorant — фикс. ширина, без сдвига при смене числа */}
              <div className="flex w-[92px] shrink-0 flex-col items-center gap-[12px] text-center">
                <p
                  className="w-full font-serif text-[42px] font-semibold not-italic leading-[32px] tracking-[-0.42px] text-white"
                  style={TIMER_DIGIT_FONT}
                >
                  {formatTimerValue(unit.value, i)}
                </p>
                <p className="text-center font-sans text-[20px] font-light not-italic leading-[20px] tracking-[-0.8px] text-white">
                  {unit.label}
                </p>
              </div>
              {i < mobileUnits.length - 1 && <PearlSeparator mobile />}
            </Fragment>
          ))}
        </div>

        {/* Десктоп: Figma — flex, align-items: center, gap 40px между колонками и дивайдерами */}
        <div className="mt-[100px] hidden w-full max-w-[922px] items-center justify-center gap-[40px] px-[32px] lg:flex">
          {units.map((unit, i) => (
            <Fragment key={unit.label}>
              {/* ~3 цифры × 56px — фикс. ширина колонки */}
              <div className="flex w-[148px] shrink-0 flex-col items-center gap-[12px] text-center text-white">
                <p
                  className="w-full font-serif text-[56px] font-semibold not-italic leading-[42px] tracking-[-0.56px] text-white"
                  style={TIMER_DIGIT_FONT}
                >
                  {formatTimerValue(unit.value, i)}
                </p>
                <p
                  className="font-sans text-[24px] font-light not-italic leading-[30px] tracking-[-0.96px] text-white"
                  style={TIMER_LABEL_DESKTOP_FONT}
                >
                  {unit.label}
                </p>
              </div>
              {i < units.length - 1 && <PearlSeparator mobile={false} />}
            </Fragment>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-[70px] text-center text-[24px] leading-[34px] tracking-[-0.96px] text-white lg:mt-[100px]">
          <p className="font-light">Спасибо, что вы&nbsp;с&nbsp;нами</p>
          <p className="italic">Это будет наш лучший день</p>
        </div>
      </div>
    </section>
  );
}
