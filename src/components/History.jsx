import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '../utils/assets';
import { EASE, VIEWPORT } from '../motionPresets';

const lineEase = EASE;

const HISTORY_BOTTOM_LINES = [
  'Несколько лет — друзья',
  'Несколько признаний',
  'Один сломанный барьер',
  'И\u00a0теперь мы здесь',
];

export default function History() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="pt-[90px] lg:pt-[100px] max-w-[1440px] mx-auto px-[8px] lg:px-[124px]">
      {/* Section heading */}
      <motion.h2
        className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[80px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px] text-center mb-[15px]"
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 0.88, ease: EASE }
        }
      >
        История
      </motion.h2>

      {/* Chat wrapper with decorations */}
      <div className="relative max-w-[834px] mt-[40px] lg:pt-[48px] mx-auto mb-[32px] lg:mb-[46px]">
        {/* Paper clip top-left */}
        <img
          src={asset('Block3_paper clip top.png')}
          alt=""
          className="hidden lg:block absolute w-[83px] lg:w-[125px] h-auto pointer-events-none z-10
           top-[-30px] lg:top-[13px] left-[-19px] lg:left-[-28px]"
        />
        {/* Paper clip bottom-right */}
        <img
          src={asset('Block3_paper clip bottom.png')}
          alt=""
          className="hidden lg:block absolute w-[83px] lg:w-[125px] h-auto pointer-events-none z-10
          bottom-[-30px] lg:bottom-[-38px] right-[-20px] lg:right-[-30px]"
        />

        {/* Heart clips scattered around the chat */}
        <img
          src={asset('heart_clip_silver.png')}
          alt=""
          className="hidden lg:block absolute w-[55px] lg:w-[93px] h-[55px] lg:h-[93px] pointer-events-none
          top-[-95px] lg:top-[0px] left-[0px] lg:left-[-200px] rotate-[150deg] lg:rotate-[-140deg]"
        />
        <img
          src={asset('heart_clip_green.png')}
          alt=""
          className="hidden lg:block absolute w-[54px] lg:w-[83px] h-[54px] lg:h-[83px] pointer-events-none
          top-[-95px] lg:top-[60px] right-[4px] lg:right-[-200px] rotate-[-150deg] lg:rotate-[157deg]"
        />
        <img
          src={asset('heart_clip_green.png')}
          alt=""
          className="hidden lg:block absolute w-[57px] lg:w-[106px] h-[57px] lg:h-[106px] pointer-events-none
           bottom-[-100px] lg:bottom-[-180px] left-[-2px] lg:left-[-120px] rotate-[160deg] lg:rotate-[165deg]"
        />
        <img
          src={asset('heart_clip_silver.png')}
          alt=""
          className="hidden lg:block absolute w-[55px] lg:w-[102px] h-[55px] lg:h-[102px] pointer-events-none
          bottom-[-190px] lg:bottom-[-270px] right-[-10px] lg:right-[-90px] rotate-[-137deg]"
        />

        {/* Chat container */}
        <motion.div
          className="flex flex-col gap-[40px] lg:gap-[64px] rounded-[30px] bg-white px-[16px] pb-[32px] pt-[24px] lg:rounded-[60px] lg:px-[100px] lg:pb-[56px] lg:pt-[24px]"
          initial={
            reduceMotion
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 28, scale: 0.98 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE }
          }
        >
          <motion.p
            className="text-center text-[18px] leading-[24px] tracking-[-0.72px] text-[#8e8d94] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.8px]"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1, ease: EASE }
            }
          >
            2 сентября 2019 года
          </motion.p>

          <div className="flex flex-col gap-[16px]">
            {/* Sofia's message — right-aligned, green */}
            <motion.div
              className="flex flex-col items-end gap-[10px]"
              initial={
                reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.75, delay: 0.18, ease: EASE }
              }
            >
              <div className="max-w-[95%] rounded-[16px] rounded-br-[4px] bg-[#768c5e] px-[12px] py-[12px] text-[18px] leading-[24px] tracking-[-0.72px] text-white lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.8px]">
                Сегодня в&nbsp;10 сбор в&nbsp;актовом зале
              </div>
              <p className="mt-[4px] pr-[4px] text-[14px] tracking-[-0.56px] text-[#8e8d94]">
                София Шинкарук
              </p>
            </motion.div>

            {/* Vanya's message — left-aligned, gray */}
            <motion.div
              className="flex flex-col items-start gap-[10px]"
              initial={
                reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.75, delay: 0.32, ease: EASE }
              }
            >
              <div className="max-w-[95%] rounded-[16px] rounded-bl-[4px] bg-[#e6e5e5] px-[12px] py-[12px] text-[18px] leading-[24px] tracking-[-0.72px] text-[#514e4e] lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.8px]">
                СЕРЬЁЗНО?
              </div>
              <p className="mt-[4px] pl-[4px] text-[14px] tracking-[-0.56px] text-[#8e8d94]">
                Ваня Тябин
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom text block — строки выезжают по очереди слева / справа */}
      <div className="flex flex-col items-center text-center gap-[24px] lg:gap-[32px]">
        <div className="flex w-full max-w-[640px] flex-col gap-[16px] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px]">
          {HISTORY_BOTTOM_LINES.map((line, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.p
                key={line}
                className="w-full"
                initial={
                  reduceMotion
                    ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                    : { opacity: 0, x: fromLeft ? -64 : 64, filter: 'blur(4px)' }
                }
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.35, margin: '0px 0px -8% 0px' }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.92, delay: i * 0.16, ease: lineEase }
                }
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        <motion.div
          className="flex flex-col items-center"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.95, delay: 0.35, ease: lineEase }
          }
        >
          <p
            className="font-infant italic text-[41px] lg:text-[56px] text-[#768c5e] tracking-[-1.23px] lg:tracking-[-1.68px] leading-[47px] lg:leading-[68px]"
            style={{ fontFeatureSettings: "'ss10' 1" }}
          >
            Мы выбираем друг друга
          </p>
          <motion.img
            src={asset('Block3_text_underline.png')}
            alt=""
            className="mt-[0px] h-auto w-[280px] object-contain lg:w-[543px]"
            style={{ transform: 'rotate(2deg)' }}
            initial={reduceMotion ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.85 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.75, delay: 0.55, ease: lineEase }
            }
          />
        </motion.div>
      </div>

      {/* "День, который мы создаём" block */}
      <div className="mt-[90px] flex flex-col items-center gap-[4px] lg:mt-[78px] lg:flex-row lg:justify-between lg:gap-0">
        {/* Scotched branch image */}
        <motion.div
          className="order-2 flex w-full justify-center lg:order-1 lg:w-[45%]"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.9, delay: 0.06, ease: EASE }
          }
        >
          <img
            src={asset('scotched_branch_mobile.png')}
            alt=""
            className="h-auto w-[530px] object-contain lg:hidden"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="order-1 flex w-full flex-col gap-[20px] lg:order-2 lg:w-[586px] lg:gap-[32px]"
          initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.9, ease: EASE }
          }
        >
          <h3 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[72px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px]">
            День, который мы&nbsp;создаём
          </h3>
          <div className="flex flex-col gap-[16px] text-[20px] font-light leading-[28px] tracking-[-0.8px] text-[#514e4e] lg:gap-[24px] lg:text-[24px] lg:leading-[34px] lg:tracking-[-0.96px]">
            <motion.p
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.75, delay: 0.12, ease: EASE }
              }
            >
              Мы мечтаем о&nbsp;дне, где никуда не&nbsp;нужно бежать, можно обниматься чуть дольше, а&nbsp;смеяться громче
            </motion.p>
            <motion.p
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.75, delay: 0.22, ease: EASE }
              }
            >
              Это будет живой, красивый и&nbsp;тёплый вечер. Такой, каким мы его чувствуем
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
