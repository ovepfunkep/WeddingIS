import { asset } from '../utils/assets';

export default function Invitation() {
  return (
    <section className="pt-[60px] lg:pt-[108px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      <div className="flex flex-col lg:flex-row items-start gap-[32px] lg:gap-0">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[24px]">
            <h2
              className="font-serif font-semibold text-[36px] lg:text-[58px] leading-[1.03] text-[#768c5e] tracking-[-1.08px] lg:tracking-[-1.74px]"
              style={{ fontFeatureSettings: "'ordn' 1, 'ss03' 1, 'liga' 0, 'hlig' 1" }}
            >
              Дорогие друзья и&nbsp;близкие,
            </h2>
            <div className="text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em] flex flex-col gap-[4px]">
              <p>в&nbsp;нашей жизни есть день, который стал точкой отсчёта</p>
              <p>И&nbsp;есть день, который станет новым началом</p>
            </div>
            <p className="text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] tracking-[-0.04em]">
              <span className="font-medium">Мы выбираем друг друга каждый день</span>
              {' — '}
              <span className="font-light">и&nbsp;хотим выбрать этот день вместе с&nbsp;вами</span>
            </p>
          </div>

          <div className="w-full max-w-[441px] h-px bg-[#768c5e]/20" />

          <div className="flex flex-col gap-[12px]">
            <p
              className="font-serif font-semibold text-[36px] lg:text-[58px] leading-[60px] text-[#768c5e] tracking-[-1.08px] lg:tracking-[-1.74px]"
              style={{ fontFeatureSettings: "'ordn' 1, 'ss03' 1, 'liga' 0, 'hlig' 1" }}
            >
              24 августа 2026 года
            </p>
            <p className="text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
              мы станем семьёй
            </p>
          </div>

          <div className="w-full max-w-[441px] h-px bg-[#768c5e]/20" />

          <p className="text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] italic font-light tracking-[-0.04em]">
            И&nbsp;нам правда важно, чтобы вы&nbsp;были рядом
          </p>
        </div>

        {/* Photo collage */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={asset('Block2_Photo_collage.png')}
            alt="Фото пары"
            className="w-full max-w-[500px] lg:max-w-[645px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
