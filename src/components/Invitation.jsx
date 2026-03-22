import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/assets';
import { EASE, VIEWPORT } from '../motionPresets';

export default function Invitation() {
  const reduce = useReducedMotion();

  const line = (delay, x = 0) => ({
    initial: reduce ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 22, x },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: VIEWPORT,
    transition: reduce ? { duration: 0 } : { duration: 0.82, delay, ease: EASE },
  });

  return (
    <section className="pt-[0px] lg:pt-[28px] max-w-[1440px] mx-auto px-[16px] lg:pl-[124px] lg:pr-[35px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[-6px] lg:gap-0">
        {/* Text */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-[16px] lg:gap-[32px]">
          <div className="flex flex-col gap-[12px] lg:gap-[24px]">
            <motion.h2
              className="font-serif font-semibold text-[42px] lg:text-[58px] lg:text-left md:text-center leading-[42px] lg:leading-[60px] md:leading-[42px] text-[#768c5e] md:tracking-[-1.74px] tracking-[-1.26px] lg:tracking-[-1.74px]"
              style={{ fontFeatureSettings: "'ordn' 1, 'ss03' 1, 'liga' 0, 'hlig' 1" }}
              {...line(0, -28)}
            >
              Дорогие друзья и&nbsp;близкие,
            </motion.h2>
            <motion.div
              className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] md:text-center lg:text-left text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px] flex flex-col gap-[4px]"
              {...line(0.1, 24)}
            >
              <p>в&nbsp;нашей жизни есть день, который стал точкой отсчёта</p>
              <p>И&nbsp;есть день, который станет новым началом</p>
            </motion.div>
            <motion.p
              className="text-[20px] lg:text-[24px] md:text-center lg:text-left lg:leading-[34px] leading-[28px] text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]"
              {...line(0.2, -20)}
            >
              <span className="font-medium">Мы выбираем друг друга каждый день</span>
              {' — '}
              <span className="font-light">и&nbsp;хотим выбрать этот день вместе с&nbsp;вами</span>
            </motion.p>
          </div>

          <motion.div
            className="w-full lg:max-w-[441px] md:w-[100%] h-px bg-[#768c5e]/20"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            style={{ transformOrigin: 'left' }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.75, delay: 0.22, ease: EASE }
            }
          />

          <div className="flex md:text-center lg:text-left flex-col gap-[12px]">
            <motion.p
              className="font-serif font-semibold text-[42px] lg:text-[58px] leading-[42px] lg:leading-[60px] text-[#768c5e] tracking-[-1.26px] lg:tracking-[-1.74px]"
              style={{ fontFeatureSettings: "'ordn' 1, 'ss03' 1, 'liga' 0, 'hlig' 1" }}
              {...line(0.28, 26)}
            >
              24 августа 2026 года
            </motion.p>
            <motion.p
              className="text-[20px] lg:text-[24px] lg:leading-[34px] leading-[28px] text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px]"
              {...line(0.36, -18)}
            >
              мы станем семьёй
            </motion.p>
          </div>

          <motion.div
            className="w-full lg:max-w-[441px] md:w-[100%] h-px bg-[#768c5e]/20"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            style={{ transformOrigin: 'right' }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.75, delay: 0.4, ease: EASE }
            }
          />

          <motion.p
            className="text-[20px] lg:text-[24px] md:text-center lg:text-left leading-[28px] lg:leading-[34px] text-[#514e4e] italic font-light tracking-[-0.8px] lg:tracking-[-0.96px]"
            {...line(0.44, 0)}
          >
            И&nbsp;нам правда важно, чтобы вы&nbsp;были рядом
          </motion.p>
        </div>

        {/* Photo collage */}
        <motion.div
          className="order-1 lg:order-2 w-[432px] lg:pb-[58px] lg:w-1/2 flex justify-center items-center"
          initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT}
          transition={
            reduce ? { duration: 0 } : { duration: 0.95, delay: 0.12, ease: EASE }
          }
        >
          <img
            src={asset('Block2_Photo_collage.png')}
            alt="Фото пары"
            className="w-[432px] max-w-none lg:w-full justify-center items-center lg:max-w-[645px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
