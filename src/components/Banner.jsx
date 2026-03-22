import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/assets';
import { EASE, VIEWPORT } from '../motionPresets';

export default function Banner() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: reduce ? { duration: 0 } : { duration: 0.72, delay, ease: EASE },
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBF7]">
      <div className="relative min-h-[778px] md:min-h-[700px] lg:min-h-[766px]">
        {/* Background floral bows — full bleed */}
        <img
          src={asset('Block1_Background.png')}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Mobile 384px frame so Figma coords (e.g. polaroid left 197) match */}
        <div className="relative mx-auto min-h-[778px] w-full max-w-[384px] md:max-w-none md:min-h-[700px] lg:flex lg:min-h-[766px] lg:flex-col lg:items-center lg:pb-[118px] lg:pt-[127px]">
          {/* Pendant (top-left) — mobile position unchanged vs Figma */}
          <img
            src={asset('Block1_Pendant.png')}
            alt=""
            className="pointer-events-none absolute left-[-42px] top-[-58px] z-30 h-72 w-72 origin-top-left rotate-[7.09deg] object-contain drop-shadow-lg md:h-80 md:w-80 md:left-[calc(50%-min(550px,50%)-40px)] lg:top-[-78px] lg:h-[420px] lg:w-[420px]"
          />

          {/* max-lg:contents — полароид и зелёный блок ведут себя как раньше относительно фрейма; lg: обёртка = якорь для угла карточки (как в Figma) */}
          <div className="max-lg:contents lg:relative lg:mx-auto lg:inline-block">
            {/* Main text frame — Figma 232:894 */}
            <motion.div
              className="absolute left-1/2 top-[calc(50%-25px)] z-20 flex w-full max-w-[358px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 rounded-[40px] bg-[var(--Text_green,#768c5e)] px-4 py-[70px] shadow-xl md:max-w-[600px] md:px-16 md:py-12 lg:relative lg:left-auto lg:top-auto lg:mx-0 lg:inline-flex lg:w-auto lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:px-[100px] lg:py-[80px]"
              initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT}
              transition={
                reduce ? { duration: 0 } : { duration: 0.88, ease: EASE }
              }
            >
              <motion.h1
                className="self-stretch text-center font-serif text-[56px] font-semibold leading-[62px] tracking-[-1.68px] text-white md:text-[72px] md:leading-[1.05] md:tracking-[-0.03em] lg:text-[96px] lg:leading-[100px]"
                {...fadeUp(0.06)}
              >
                Иван и София
              </motion.h1>
              <motion.div className="w-[279px] shrink-0" {...fadeUp(0.12)}>
                <img
                  src={asset('Block1_Line.svg')}
                  alt=""
                  width={279}
                  height={1}
                  className="block h-px w-full max-w-none"
                />
              </motion.div>
              <motion.p
                className="self-stretch text-center font-serif text-[48px] font-normal leading-[54px] tracking-[-1.44px] text-white md:text-[52px] md:leading-[0.9] md:tracking-[-0.03em] lg:text-[62px] lg:leading-[56px]"
                {...fadeUp(0.18)}
              >
                24.08.2026
              </motion.p>
              <motion.div className="w-[279px] shrink-0" {...fadeUp(0.24)}>
                <img
                  src={asset('Block1_Line.svg')}
                  alt=""
                  width={279}
                  height={1}
                  className="block h-px w-full max-w-none"
                />
              </motion.div>
              <motion.p
                className="font-infant self-stretch text-center text-[42px] font-normal italic leading-normal tracking-[-1.26px] text-white md:text-[40px] md:tracking-[-0.01em] lg:text-[56px]"
                {...fadeUp(0.32)}
              >
                «Я выбираю тебя каждый день»
              </motion.p>
            </motion.div>

            {/* Polaroid — mobile: координаты фрейма 384; md: от центра экрана; lg: от правого нижнего угла зелёного блока + наклон против часовой */}
            <motion.div
              className="pointer-events-none absolute left-[210px] top-[560px] z-30 md:left-[calc(50%+min(200px,50%))] md:top-auto md:bottom-[10px] lg:left-[750px] lg:right-[-100px] lg:top-auto lg:bottom-[-36px] lg:origin-bottom-right lg:-rotate-[0deg]"
              initial={
                reduce
                  ? { opacity: 1, x: 0, rotate: 0 }
                  : { opacity: 0, x: 48, rotate: 6 }
              }
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={VIEWPORT}
              transition={
                reduce ? { duration: 0 } : { duration: 0.95, delay: 0.28, ease: EASE }
              }
            >
              <div className="flex h-[218px] w-[193px] items-center justify-center md:w-[220px] lg:w-[330px] md:justify-end">
                <img
                  src={asset('Block1_Polaroid.png')}
                  alt=""
                  className="h-[217px] w-[192px] object-contain md:h-[360px] md:w-[330px] lg:w-[330px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
