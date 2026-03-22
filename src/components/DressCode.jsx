import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/assets';
import { EASE, VIEWPORT } from '../motionPresets';

const mainPalette = [
  { name: 'Тёмный зелёный', img: asset('Block6_pallete_dark green.png') },
  { name: 'Зелёный', img: asset('Block6_pallete_green.png') },
  { name: 'Оливковый', img: asset('Block6_pallete_olive.png') },
  { name: 'Шоколад', img: asset('Block6_pallete_chocolate.png') },
  { name: 'Коричневый', img: asset('Block6_pallete_brown.png') },
  { name: 'Бежевый', img: asset('Block6_pallete_beige.png') },
];

const secondaryPalette = [
  { name: 'Серебряный', img: asset('Block6_pallete_silver.png') },
  { name: 'Розовый', img: asset('Block6_pallete_pink.png') },
];

export default function DressCode() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: reduce ? { duration: 0 } : { duration: 0.82, delay, ease: EASE },
  });

  const swatch = (i, baseDelay) => ({
    initial: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: VIEWPORT,
    transition: reduce
      ? { duration: 0 }
      : { duration: 0.55, delay: baseDelay + i * 0.06, ease: EASE },
  });

  return (
    <section className="pt-[60px] lg:pt-[110px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      <div className="flex flex-col lg:flex-row items-start gap-0 lg:gap-[0px] lg:justify-between">
        {/* Text */}
        <div className="w-full lg:w-[40%] flex flex-col gap-[20px] lg:gap-[32px] mb-[25px] lg:mb-0">
          <motion.h2
            className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[80px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px]"
            {...fadeUp(0)}
          >
            Дресс-код
          </motion.h2>
          <div className="flex flex-col gap-[16px] lg:gap-[24px] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px]
           text-[#514e4e] font-light lg:tracking-[-0.96px] tracking-[-0.8px]">
            <motion.p {...fadeUp(0.08)}>
              Мы с&nbsp;особым трепетом готовимся к&nbsp;этому дню и&nbsp;нам будет очень приятно, если ваши образы станут частью этой красивой картины
            </motion.p>
            <motion.p {...fadeUp(0.16)}>
              Пожалуйста, постарайтесь{' '}
              <span className="font-medium">не&nbsp;выбирать</span>
              {' '}для образа: чёрный, белый и&nbsp;красный цвета, чтобы сохранить общую атмосферу и&nbsp;палитру праздника
            </motion.p>
            <motion.p {...fadeUp(0.24)}>
              <span className="font-medium">Для мужчин</span>
              {' '}чёрный и&nbsp;белый цвета в&nbsp;классических костюмах{' '}
              <span className="font-medium">допускаются</span>
            </motion.p>
          </div>
        </div>

        {/* Mobile divider between text and palette */}
        <div className="lg:hidden w-full h-px bg-[#ddd] mb-[32px]" />

        {/* Palette — aligned to top of text block */}
        <div className="w-full lg:mt-[13px] lg:w-[50%] flex flex-col gap-[32px]">
          {/* Main colors */}
          <div className="flex flex-col gap-[20px] lg:gap-[28px]">
            <motion.div
              className="flex flex-col gap-[4px] text-[20px] leading-[28px] lg:leading-[34px] lg:text-[24px] text-[#514e4e] 
            lg:tracking-[-0.96px] tracking-[-0.8px]"
              {...fadeUp(0.06)}
            >
              <p className="font-medium leading-[1.42]">Основные цвета:</p>
              <p className="font-light leading-[1.42]">Оливковый, зелёный, тёмный шоколад, коричневый, песочный, бежевый</p>
            </motion.div>
            <div className="grid grid-cols-3 gap-[4px] md:flex md:gap-[2px]">
              {mainPalette.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="min-w-0 h-[88px] md:w-[121px] md:h-[121px] md:flex-none lg:w-auto lg:h-auto lg:flex-1 lg:aspect-square"
                  {...swatch(i, 0.12)}
                >
                  <img src={c.img} alt={c.name} className="h-full w-full rounded-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px w-full bg-[#768c5e]/20"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            style={{ transformOrigin: 'center' }}
            transition={
              reduce ? { duration: 0 } : { duration: 0.65, delay: 0.35, ease: EASE }
            }
          />

          {/* Secondary colors */}
          <div className="flex flex-col gap-[20px] lg:gap-[28px]">
            <motion.div
              className="flex flex-col gap-[4px] text-[20px] leading-[28px] lg:leading-[34px] lg:text-[24px] text-[#514e4e] 
            lg:tracking-[-0.96px] tracking-[-0.8px]"
              {...fadeUp(0.4)}
            >
              <p className="font-medium leading-[1.42]">Дополнительные цвета:</p>
              <p className="font-light leading-[1.42]">Серебряный, пыльный розовый</p>
            </motion.div>
            <div className="grid grid-cols-3 gap-[4px] md:flex md:gap-[2px]">
              {secondaryPalette.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="min-w-0 h-[88px] md:w-[121px] md:h-[121px] md:flex-none lg:flex-none lg:w-[100px] lg:h-[100px]"
                  {...swatch(i, 0.48)}
                >
                  <img src={c.img} alt={c.name} className="h-full w-full rounded-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
