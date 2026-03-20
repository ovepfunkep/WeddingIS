import { asset } from '../utils/assets';

export default function Invitation() {
  return (
    <section className="pt-[0px] lg:pt-[28px] max-w-[1440px] mx-auto px-[16px] lg:pl-[124px] lg:pr-[35px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[-6px] lg:gap-0">
        {/* Text */}
        <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col gap-[16px] lg:gap-[32px]">
          <div className="flex flex-col gap-[12px] lg:gap-[24px]">
            <h2
              className="font-serif font-semibold text-[42px] lg:text-[58px] lg:text-left md:text-center leading-[42px] lg:leading-[60px] md:leading-[42px] text-[#768c5e] md:tracking-[-1.74px] tracking-[-1.26px] lg:tracking-[-1.74px]"
              style={{ fontFeatureSettings: "'ordn' 1, 'ss03' 1, 'liga' 0, 'hlig' 1" }}
            >
              Дорогие друзья и&nbsp;близкие,
            </h2>
            <div className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] md:text-center lg:text-left text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px] flex flex-col gap-[4px]">
              <p>в&nbsp;нашей жизни есть день, который стал точкой отсчёта</p>
              <p>И&nbsp;есть день, который станет новым началом</p>
            </div>
            <p className="text-[20px] lg:text-[24px] md:text-center lg:text-left lg:leading-[34px] leading-[28px] text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
              <span className="font-medium">Мы выбираем друг друга каждый день</span>
              {' — '}
              <span className="font-light">и&nbsp;хотим выбрать этот день вместе с&nbsp;вами</span>
            </p>
          </div>

          <div className="w-full lg:max-w-[441px] md:w-[100%] h-px bg-[#768c5e]/20" />

          <div className="flex md:text-center lg:text-left flex-col gap-[12px]">
            <p
              className="font-serif font-semibold text-[42px] lg:text-[58px] leading-[42px] lg:leading-[60px] text-[#768c5e] md:tracking-[-1.26px] lg:tracking-[-1.74px]"
              style={{ fontFeatureSettings: "'ordn' 1, 'ss03' 1, 'liga' 0, 'hlig' 1" }}
            >
              24 августа 2026 года
            </p>
            <p className="text-[20px] lg:text-[24px] lg:leading-[34px] leading-[28px] text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px]">
              мы станем семьёй
            </p>
          </div>

          <div className="w-full lg:max-w-[441px] md:w-[100%] h-px bg-[#768c5e]/20" />

          <p className="text-[20px] lg:text-[24px] md:text-center lg:text-left leading-[28px] lg:leading-[34px] text-[#514e4e] italic font-light tracking-[-0.8px] lg:tracking-[-0.96px]">
            И&nbsp;нам правда важно, чтобы вы&nbsp;были рядом
          </p>
        </div>

        {/* Photo collage */}
        <div className="order-1 lg:order-2 w-[432px] lg:pb-[58px] lg:w-1/2 flex justify-center items-center">
          <img
            src={asset('Block2_Photo_collage.png')}
            alt="Фото пары"
            className="w-[432px] max-w-none lg:w-full justify-center items-center lg:max-w-[645px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
