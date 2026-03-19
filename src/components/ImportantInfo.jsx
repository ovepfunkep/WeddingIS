import { asset } from '../utils/assets';

export default function ImportantInfo() {
  return (
    <section className="pt-[60px] lg:pt-[100px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      <h2 className="font-serif font-semibold text-[48px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em] text-center mb-[32px] lg:mb-[48px]">
        Важная информация
      </h2>

      <div className="flex flex-col gap-[40px] lg:gap-[56px]">
        {/* Block 1: Формат мероприятия + Dino */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-[24px] lg:gap-[48px]">
          <div className="w-full lg:flex-1 flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-serif font-semibold text-[32px] lg:text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                Формат мероприятия
              </h3>
              <div className="w-full h-px bg-[#768c5e]/20" />
            </div>
            <div className="flex flex-col gap-[16px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
              <p>К&nbsp;сожалению, формат площадки не&nbsp;предполагает детской зоны или аниматоров</p>
              <p>Чтобы вечер прошёл комфортно для всех, будем благодарны, если вы&nbsp;сможете провести этот день вместе с&nbsp;нами без детей</p>
            </div>
          </div>
          <div className="w-[180px] lg:w-[248px] shrink-0">
            <img src={asset('Block7_dino.png')} alt="" className="w-full h-auto object-contain max-h-[356px]" />
          </div>
        </div>

        {/* Block 2: Подарки + Gift card */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[24px] lg:gap-[48px]">
          <div className="w-full lg:w-auto shrink-0 flex justify-center">
            <img src={asset('Block7_gift_card.png')} alt="" className="w-[280px] lg:w-[499px] h-auto object-contain" />
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-serif font-semibold text-[32px] lg:text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                Подарки
              </h3>
              <div className="w-full h-px bg-[#768c5e]/20" />
            </div>
            <div className="flex flex-col gap-[16px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
              <p>
                Самым комфортным подарком для нас будет{' '}
                <span className="font-medium">денежный вклад в&nbsp;нашу будущую семейную жизнь</span>
              </p>
              <p>Мы будем искренне благодарны за&nbsp;такой подарок и&nbsp;с&nbsp;радостью направим его на&nbsp;наши общие мечты и&nbsp;планы</p>
            </div>
          </div>
        </div>

        {/* Block 3: Цветы + Kitty */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-[24px] lg:gap-[48px]">
          <div className="w-full lg:flex-1 flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-serif font-semibold text-[32px] lg:text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                Цветы
              </h3>
              <div className="w-full h-px bg-[#768c5e]/20" />
            </div>
            <div className="flex flex-col gap-[16px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
              <p>Мы очень любим цветы, но&nbsp;знаем, что их&nbsp;жизнь, к&nbsp;сожалению, слишком короткая</p>
              <p>
                Поэтому мы будем благодарны, если вместо букета вы&nbsp;просто добавите эту сумму к&nbsp;подарку. Так ваш подарок останется с&nbsp;нами надолго и&nbsp;станет частью наших будущих планов
              </p>
            </div>
          </div>
          <div className="w-[220px] lg:w-[385px] shrink-0">
            <img src={asset('Block7_kitty.png')} alt="" className="w-full h-auto object-contain max-h-[337px]" />
          </div>
        </div>

        {/* Block 4: Трансфер + Branch */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[24px] lg:gap-[48px]">
          <div className="w-[200px] lg:w-[400px] shrink-0 flex justify-center">
            <img src={asset('Block7_branch.png')} alt="" className="w-full h-auto object-contain" />
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <h3 className="font-serif font-semibold text-[32px] lg:text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                Трансфер
              </h3>
              <div className="w-full h-px bg-[#768c5e]/20" />
            </div>
            <div className="flex flex-col gap-[16px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
              <p>Мы хотим, чтобы вам было максимально комфортно добраться до&nbsp;площадки и&nbsp;обратно</p>
              <p>
                Поэтому для гостей будет организован{' '}
                <span className="font-medium">трансфер до&nbsp;места проведения свадьбы и&nbsp;обратно в&nbsp;город</span>
              </p>
              <p>Ближе к&nbsp;дате праздника мы пришлём всю подробную информацию: время отправления, точку сбора и&nbsp;другие детали</p>
              <p>Просто приезжайте в&nbsp;хорошем настроении — об&nbsp;остальном мы уже позаботились</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
