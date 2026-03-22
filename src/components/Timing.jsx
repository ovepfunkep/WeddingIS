import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/assets';

const schedule = [
  { time: '15:00', label: 'Встреча гостей', side: 'left' },
  { time: '16:00', label: 'Церемония', side: 'right' },
  { time: '17:00', label: 'Начало банкета', side: 'left' },
  { time: '21:30', label: 'Торт', side: 'right' },
  { time: '23:00', label: 'Трансфер', side: 'left' },
];

const timingEase = [0.22, 1, 0.36, 1];

function TimelineItem({ time, label, align = 'left', index = 0 }) {
  const reduce = useReducedMotion();
  const fromX = align === 'left' ? -48 : 48;
  return (
    <motion.div
      className={align === 'right' ? 'text-right' : 'text-left'}
      initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.22, margin: '0px 0px -12% 0px' }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.78, delay: index * 0.09, ease: timingEase }
      }
    >
      <p className="font-serif font-semibold text-[42px] lg:text-[50px] leading-[48px] lg:leading-[56px] text-white tracking-[-0.42px] lg:tracking-[-0.5px]">
        {time}
      </p>
      <p className="text-[20px] pt-[4px] lg:text-[28px] leading-[26px] lg:leading-[38px] text-white font-light tracking-[-0.8px] lg:tracking-[-1.12px]">
        {label}
      </p>
      <motion.div
        className="mt-[8px] h-px w-full bg-white/30"
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{ transformOrigin: align === 'right' ? 'right' : 'left' }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.55, delay: index * 0.09 + 0.12, ease: timingEase }
        }
      />
    </motion.div>
  );
}

function Dot() {
  return (
    <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center z-10 shrink-0">
      <div className="w-[12px] h-[12px] rounded-full bg-[#768c5e]" />
    </div>
  );
}

export default function Timing() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full bg-[#768c5e] overflow-hidden mt-[90px] lg:mt-[100px]">
      {/* BG texture */}
      <img
        src={asset('Block5_timing bg image.png')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-color-burn opacity-50 pointer-events-none"
      />

      {/* Pearl heart (top-left) */}
      <img
        src={asset('pearl_heart_image.png')}
        alt=""
        className="absolute rotate-[30deg] w-[100px] lg:w-[142px] right-[16px] lg:left-[18px] top-[140px] lg:top-[28px] pointer-events-none z-[5]"
      />
      {/* Pearl bow (bottom-right) */}
      <img
        src={asset('pearl bow image.png')}
        alt=""
        className="absolute rotate-[25deg] lg:rotate-[-30deg] left-0 bottom-[248px] lg:bottom-[60px] lg:left-[1194px] w-[96px] h-auto lg:w-[180px] pointer-events-none z-[5]"
      />

      {/* Bottom-left photo — desktop only */}
      <img
        src={asset('timing bottom_photo.png')}
        alt=""
        className="absolute left-[5px] lg:left-[-24px] top-[225px] lg:top-[432px] w-[150px] lg:w-[338px] pointer-events-none z-10"
      />
      {/* Top-right photo — desktop only */}
      <img
        src={asset('Block5_timing top_photo.png')}
        alt=""
        className="rotate-[-25deg] lg:rotate-[0deg] absolute right-[-10px]  bottom-[40px] lg:bottom-[482px] w-[200px] lg:w-[337px] pointer-events-none z-10"
      />

      {/* Content — centered vertically */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-[32px] pb-[56px] px-[16px] lg:pt-[40px] lg:pb-[56px] lg:px-0">
        {/* Header with pearls */}
        <motion.div
          className="mb-[40px] flex items-center justify-center gap-[18px] lg:mb-0 lg:gap-[18px]"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.9, ease: timingEase }
          }
        >
          <motion.img
            src={asset('MultiBlock_Pearl.png')}
            alt=""
            className="h-[32px] w-[32px]"
            initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.55, delay: 0.08, ease: timingEase }
            }
          />
          <h2 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[80px] text-white tracking-[-1.68px] lg:tracking-[-2.22px]">
            Тайминг
          </h2>
          <motion.img
            src={asset('MultiBlock_Pearl.png')}
            alt=""
            className="h-[32px] w-[32px]"
            initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.55, delay: 0.18, ease: timingEase }
            }
          />
        </motion.div>

        {/* Desktop timeline — alternating sides */}
        <div className="hidden lg:block relative w-[500px] h-[632px] mt-[72px]">
          {/* Continuous vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/40 -translate-x-1/2" />

          {schedule.map((item, i) => (
            <div
              key={`${item.time}-desktop-dot`}
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: `${96 + i * 110}px` }}
            >
              <Dot />
            </div>
          ))}

          {schedule.map((item, i) => (
            <div
              key={item.time}
              className="absolute left-0 right-0 grid grid-cols-[250px_250px] gap-x-0 items-start"
              style={{ top: `${i * 110}px` }}
            >
              {item.side === 'left' ? (
                <TimelineItem time={item.time} label={item.label} align="left" index={i} />
              ) : (
                <div />
              )}

              {item.side === 'right' ? (
                <TimelineItem time={item.time} label={item.label} align="right" index={i} />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline — alternating sides with centered axis */}
        <div className="lg:hidden relative w-full max-w-[431px] pb-[75px]">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/40" />

          {/* Dots: first at 71px, then every 140px */}
          {schedule.map((item, i) => (
            <div
              key={`${item.time}-dot`}
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: `${76 + i * 140}px` }}
            >
              <Dot />
            </div>
          ))}

          {schedule.map((item, i) => (
            <div
              key={item.time}
              className="relative grid grid-cols-2 gap-x-0 items-start"
              style={{ minHeight: i < schedule.length - 1 ? '140px' : 'auto' }}
            >
              {item.side === 'left' ? (
                <TimelineItem time={item.time} label={item.label} align="left" index={i} />
              ) : (
                <div />
              )}

              {item.side === 'right' ? (
                <TimelineItem time={item.time} label={item.label} align="right" index={i} />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
