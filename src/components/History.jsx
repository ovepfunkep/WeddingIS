import { asset } from '../utils/assets';

export default function History() {
  return (
    <section className="pt-[90px] lg:pt-[100px] max-w-[1440px] mx-auto px-[8px] lg:px-[124px]">
      {/* Section heading */}
      <h2 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[80px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px] text-center mb-[15px]">
        История
      </h2>

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
        <div className="bg-white rounded-[30px] lg:rounded-[60px] px-[16px] lg:px-[100px] pt-[24px] lg:pt-[24px] pb-[32px] lg:pb-[56px] flex flex-col gap-[40px] lg:gap-[64px]">
          <p className="text-[18px] lg:text-[20px] leading-[24px] lg:leading-[26px] text-[#8e8d94] text-center tracking-[-0.72px] lg:tracking-[-0.8px]">
            2 сентября 2019 года
          </p>

          <div className="flex flex-col gap-[16px]">
            {/* Sofia's message — right-aligned, green */}
            <div className="flex flex-col items-end gap-[10px]">
              <div className="bg-[#768c5e] text-white rounded-[16px] rounded-br-[4px] px-[12px] py-[12px] max-w-[95%] text-[18px] lg:text-[20px] leading-[24px] lg:leading-[26px] tracking-[-0.72px] lg:tracking-[-0.8px]">
                Сегодня в&nbsp;10 сбор в&nbsp;актовом зале
              </div>
              <p className="text-[14px] text-[#8e8d94] tracking-[-0.56px] mt-[4px] pr-[4px]">
                София Шинкарук
              </p>
            </div>

            {/* Vanya's message — left-aligned, gray */}
            <div className="flex flex-col items-start gap-[10px]">
              <div className="bg-[#e6e5e5] text-[#514e4e] rounded-[16px] rounded-bl-[4px] px-[12px] py-[12px] max-w-[95%] text-[18px] lg:text-[20px] leading-[24px] lg:leading-[26px] tracking-[-0.72px] lg:tracking-[-0.8px]">
                СЕРЬЁЗНО?
              </div>
              <p className="text-[14px] text-[#8e8d94] tracking-[-0.56px] mt-[4px] pl-[4px]">
                Ваня Тябин
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text block */}
      <div className="flex flex-col items-center text-center gap-[24px] lg:gap-[32px]">
        <div className="flex flex-col gap-[16px] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px]">
          <p>Несколько лет — друзья</p>
          <p>Несколько признаний</p>
          <p>Один сломанный барьер</p>
          <p>И&nbsp;теперь мы здесь</p>
        </div>

        <div className="flex flex-col items-center">
          <p
            className="font-infant italic text-[41px] lg:text-[56px] text-[#768c5e] tracking-[-1.23px] lg:tracking-[-1.68px] leading-[47px] lg:leading-[68px]"
            style={{ fontFeatureSettings: "'ss10' 1" }}
          >
            Мы выбираем друг друга
          </p>
          <img
            src={asset('Block3_text_underline.png')}
            alt=""
            className="w-[280px] lg:w-[543px] h-auto object-contain mt-[0px] " 
            style={{transform: 'rotate(2deg)' }}
          />
        </div>
      </div>

      {/* "День, который мы создаём" block */}
      <div className="flex flex-col lg:flex-row items-center gap-[4px] lg:gap-0 lg:justify-between mt-[90px] lg:mt-[78px]">
        {/* Scotched branch image */}
        <div className="order-2 lg:order-1 w-full lg:w-[45%] flex justify-center">
          <img
            src={asset('scotched_branch_mobile.png')}
            alt=""
            className="w-[530px] lg:hidden h-auto object-contain"
          />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 w-full lg:w-[586px] flex flex-col gap-[20px] lg:gap-[32px]">
          <h3 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[72px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px]">
            День, который мы&nbsp;создаём
          </h3>
          <div className="flex flex-col gap-[16px] lg:gap-[24px] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#514e4e] 
          font-light tracking-[-0.8px] lg:tracking-[-0.96px]">
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
