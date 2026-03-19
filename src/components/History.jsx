import { asset } from '../utils/assets';

export default function History() {
  return (
    <section className="pt-[60px] lg:pt-[100px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      {/* Section heading */}
      <h2 className="font-serif font-semibold text-[48px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em] text-center mb-[15px]">
        История
      </h2>

      {/* Chat wrapper with decorations */}
      <div className="relative max-w-[834px] mx-auto mb-[48px]">
        {/* Paper clip top-left */}
        <img
          src={asset('Block3_paper clip top.png')}
          alt=""
          className="hidden lg:block absolute w-[125px] h-[103px] pointer-events-none z-10"
          style={{ left: '55px', top: '-40px', transform: 'rotate(-79.2deg)' }}
        />
        {/* Paper clip bottom-right */}
        <img
          src={asset('Block3_paper clip bottom.png')}
          alt=""
          className="hidden lg:block absolute w-[125px] h-[103px] pointer-events-none z-10"
          style={{ right: '-30px', bottom: '-10px', transform: 'rotate(100.8deg)' }}
        />

        {/* Heart clips scattered around the chat */}
        <img
          src={asset('Block3_heart_clip_silver.png')}
          alt=""
          className="hidden lg:block absolute w-[93px] h-[91px] opacity-60 pointer-events-none"
          style={{ left: '-80px', top: '58px', transform: 'rotate(-140.51deg)' }}
        />
        <img
          src={asset('Block3_heart_clip_green.png')}
          alt=""
          className="hidden lg:block absolute w-[84px] h-[80px] opacity-60 pointer-events-none"
          style={{ right: '-70px', top: '116px' }}
        />
        <img
          src={asset('Block3_heart_clip_green2.png')}
          alt=""
          className="hidden lg:block absolute w-[107px] h-[103px] opacity-60 pointer-events-none"
          style={{ left: '-60px', bottom: '-60px' }}
        />
        <img
          src={asset('Block3_heart_clip_silver2.png')}
          alt=""
          className="hidden lg:block absolute w-[102px] h-[100px] opacity-60 pointer-events-none"
          style={{ right: '-60px', bottom: '-40px' }}
        />

        {/* Chat container */}
        <div className="bg-white rounded-[30px] lg:rounded-[60px] px-[20px] lg:px-[100px] pt-[16px] lg:pt-[24px] pb-[28px] lg:pb-[56px] flex flex-col gap-[32px] lg:gap-[64px]">
          <p className="text-[16px] lg:text-[20px] leading-[1.3] text-[#8e8d94] text-center tracking-[-0.04em]">
            2 сентября 2019 года
          </p>

          <div className="flex flex-col gap-[16px]">
            {/* Sofia's message — right-aligned, green */}
            <div className="flex flex-col items-end">
              <div className="bg-[#768c5e] text-white rounded-[16px] rounded-br-[4px] px-[16px] py-[12px] max-w-[80%] text-[16px] lg:text-[20px] leading-[1.3] tracking-[-0.04em]">
                Сегодня в&nbsp;10 сбор в&nbsp;актовом зале
              </div>
              <p className="text-[12px] lg:text-[14px] text-[#8e8d94] tracking-[-0.04em] mt-[4px] pr-[4px]">
                София Шинкарук
              </p>
            </div>

            {/* Vanya's message — left-aligned, gray */}
            <div className="flex flex-col items-start">
              <div className="bg-[#e6e5e5] text-[#514e4e] rounded-[16px] rounded-bl-[4px] px-[16px] py-[12px] max-w-[80%] text-[16px] lg:text-[20px] leading-[1.3] tracking-[-0.04em]">
                СЕРЬЁЗНО?
              </div>
              <p className="text-[12px] lg:text-[14px] text-[#8e8d94] tracking-[-0.04em] mt-[4px] pl-[4px]">
                Ваня Тябин
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text block */}
      <div className="flex flex-col items-center text-center gap-[24px] lg:gap-[32px]">
        <div className="flex flex-col gap-[8px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
          <p>Несколько лет — друзья</p>
          <p>Несколько признаний</p>
          <p>Один сломанный барьер</p>
          <p>И&nbsp;теперь мы здесь</p>
        </div>

        <div className="flex flex-col items-center">
          <p
            className="font-infant italic text-[36px] lg:text-[56px] text-[#768c5e] tracking-[-1.08px] lg:tracking-[-1.68px] leading-[1.1]"
            style={{ fontFeatureSettings: "'ss10' 1" }}
          >
            Мы выбираем друг друга
          </p>
          <img
            src={asset('Block3_text_underline.png')}
            alt=""
            className="w-[280px] lg:w-[543px] h-auto object-contain mt-[-6px] lg:mt-[-12px]"
          />
        </div>
      </div>

      {/* "День, который мы создаём" block */}
      <div className="flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[60px] pt-[60px] lg:pt-[100px]">
        {/* Scotched branch image */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={asset('Block3_scotched_branch.png')}
            alt=""
            className="w-[280px] lg:w-[530px] h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-[55%] flex flex-col gap-[20px] lg:gap-[32px]">
          <h3 className="font-serif font-semibold text-[36px] lg:text-[74px] leading-[0.97] text-[#768c5e] tracking-[-0.03em]">
            День, который мы&nbsp;создаём
          </h3>
          <div className="flex flex-col gap-[12px] lg:gap-[24px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
            <p>
              Мы мечтаем о&nbsp;дне, где никуда не&nbsp;нужно бежать, можно обниматься чуть дольше, а&nbsp;смеяться громче
            </p>
            <p>
              Это будет живой, красивый и&nbsp;тёплый вечер. Такой, каким мы его чувствуем
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
