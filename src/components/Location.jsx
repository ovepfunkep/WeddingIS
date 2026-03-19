import { asset } from '../utils/assets';

export default function Location() {
  return (
    <section className="pt-[60px] lg:pt-[100px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      <h2 className="font-serif font-semibold text-[48px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em] text-center mb-[24px] lg:mb-[48px]">
        Локация
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[48px]">
        {/* Text + button */}
        <div className="w-full lg:w-1/2 flex flex-col gap-[24px] lg:gap-[32px]">
          <div className="flex flex-col gap-[18px] lg:gap-[24px]">
            <div className="flex items-center gap-[12px] lg:gap-[18px]">
              <img
                src={asset('Block4_pin.png')}
                alt=""
                className="w-[14px] lg:w-[17px] h-[36px] lg:h-[46px] object-contain"
              />
              <h3 className="font-serif font-semibold text-[36px] lg:text-[54px] leading-[1.1] text-[#768c5e] tracking-[-0.03em]">
                Адрес
              </h3>
            </div>

            <p className="text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] tracking-[-0.04em]">
              <span className="font-medium">Парк-отель Хвоя, сфера «Лесная»</span>
              <span className="font-light">, г.&nbsp;Бердск, Речкуновская зона отдыха, 6</span>
            </p>

            <div className="w-full max-w-[485px] h-px bg-[#768c5e]/20" />

            <div className="flex flex-col gap-[18px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
              <p>Мы собираемся в&nbsp;нашем лесном закутке на&nbsp;берегу «моря»</p>
              <p>Церемония пройдёт в&nbsp;прозрачной сфере среди зелени и&nbsp;света</p>
            </div>
          </div>

          <a
            href="https://yandex.ru/maps/?text=Парк-отель%20Хвоя%20Бердск%20Речкуновская%20зона%20отдыха%206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] bg-[#768c5e] text-white rounded-full px-[24px] py-[16px] text-[18px] lg:text-[24px] tracking-[-0.04em] w-fit hover:bg-[#6a7f53] transition-colors"
          >
            Построить маршрут
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 15L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7 5H15V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Scotched location photo — centered vertically relative to text */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={asset('Block4_scotched location.png')}
            alt="Парк-отель Хвоя"
            className="w-full max-w-[500px] lg:max-w-[573px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
