import { asset } from '../utils/assets';

export default function Location() {
  return (
    <section className="mt-[60px] lg:mt-[120px] max-w-[1440px] mx-auto px-[16px] lg:pl-[124px] lg:pr-[83px]">
      <h2 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] text-[#768c5e] tracking-[-1.68px] text-center mb-[24px] lg:mb-[48px]">
        Локация
      </h2>

      <div className="flex flex-col lg:mt-[48px] lg:flex-row items-start gap-[16px] lg:gap-0 lg:justify-between">
        {/* Text + button */}
        <div className="w-full order-2 lg:order-1 lg:w-1/2 flex flex-col gap-[32px] lg:gap-[32px]">
          <div className="flex flex-col gap-[16px] lg:gap-[24px]">
            <div className="flex items-center gap-[12px] lg:gap-[18px]">
              <img
                src={asset('Block4_pin.png')}
                alt=""
                className="w-[14px] lg:w-[17px] h-[36px] lg:h-[46px] object-contain"
              />
              <h3 className="font-serif font-semibold text-[42px] lg:text-[54px] leading-[48px] lg:leading-[60px] text-[#768c5e] tracking-[-1.28px] lg:tracking-[-1.62px]">
                Адрес
              </h3>
            </div>

            <p className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
              <span className="font-medium">Парк-отель Хвоя, сфера «Лесная»</span>
              <span className="font-light">, г.&nbsp;Бердск, Речкуновская зона отдыха, 6</span>
            </p>

            <div className="w-full max-w-[485px] h-px bg-[#768c5e]/20" />

            <div className="flex flex-col gap-[16px] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px]">
              <p>Мы собираемся в&nbsp;нашем лесном закутке на&nbsp;берегу «моря»</p>
              <p>Церемония пройдёт в&nbsp;прозрачной сфере среди зелени и&nbsp;света</p>
            </div>
          </div>

          <a
            href="https://yandex.ru/maps/?text=Парк-отель%20Хвоя%20Бердск%20Речкуновская%20зона%20отдыха%206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center w-[100%] lg:w-fit lg:px-[24px] justify-center items-center
             gap-[10px] bg-[#768c5e] text-white rounded-full px-[24px] py-[16px] text-[18px] lg:text-[24px] 
             lg:leading-[29px] tracking-[-0.8px] lg:tracking-[-0.96px] hover:bg-[#6a7f53] transition-colors"
          >
            Построить маршрут
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-white"
            >
              <path
                d="M5 12H5.5M8.5 12H10M13 12H19M19 12L15 16M19 12L15 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Scotched location photo — centered vertically relative to text */}
        <div className="w-full mt-[19px] order-1 lg:order-2 lg:w-[604px] flex justify-center items-center">
          <img
            src={asset('Block4_scotched location.png')}
            alt="Парк-отель Хвоя"
            className="w-full max-w-[500px] lg:w-[604px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
