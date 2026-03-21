import { asset } from '../utils/assets';

/**
 * Ручная подгонка мобильных картинок в «Важной информации».
 * — align="left" → картинка справа от заголовка → якорь обычно `right-*` + обязательно `left-auto`.
 * — align="right" → картинка слева → якорь `left-*` + `right-auto`.
 * Дополнительно: `top-*`, `translate-*` и т.д.
 */
const mobileInfoImages = {
  formatDino: {
    imageWidthPx: 83,
    imagePositionClassName: 'right-[5px] left-auto top-[-30px]',
    imageClassName: 'max-h-[356px]',
  },
  gifts: {
    imageWidthPx: 169,
    imagePositionClassName: 'rotate-[15deg] left-[-61px] right-auto top-[-40px]',
  },
  flowersKitty: {
    imageWidthPx: 135,
    imagePositionClassName: 'right-0 left-auto top-[-65px]',
    imageClassName: 'max-h-[337px]',
  },
  transferBranch: {
    imageWidthPx: 69,
    imagePositionClassName: 'rotate-[52deg] left-[15px] right-auto top-[-40px]',
  },
};

/** Мобилка: 2.5/4 ширины под заголовок; картинка в absolute-обёртке — не участвует в потоке, текст не смещается */
function InfoBlockMobile({
  align,
  title,
  imageSrc,
  imageWidthPx,
  imagePositionClassName,
  imageClassName,
  children,
}) {
  const isLeft = align === 'left';
  const positionClasses =
    imagePositionClassName?.trim() ||
    (isLeft ? 'right-0 left-auto top-0' : 'left-0 right-auto top-0');

  return (
    <div className="lg:hidden relative w-full">
      <div className="relative w-full isolate">
        {/* В потоке только заголовок + линия — ширина 62.5% (2.5 из 4 колонок) */}
        <div
          className={`relative z-[1] w-[62.5%] flex flex-col gap-[12px] ${isLeft ? '' : 'ml-auto text-right items-end'}`}
        >
          <h3
            className={`font-serif font-semibold text-[32px] leading-[1.11] text-[#768c5e] tracking-[-0.03em] w-full ${isLeft ? 'text-left' : 'text-right'
              }`}
          >
            {title}
          </h3>
          <div className="w-full h-px bg-[#768c5e]/20" />
        </div>
        <div
          className={`absolute z-0 shrink-0 pointer-events-none ${positionClasses}`}
          style={{ width: imageWidthPx }}
        >
          <img
            src={imageSrc}
            alt=""
            className={`block h-auto w-full max-w-full object-contain ${imageClassName ?? ''}`}
          />
        </div>
      </div>
      <div className="w-full mt-[18px] flex flex-col gap-[16px] text-[18px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
        {children}
      </div>
    </div>
  );
}

export default function ImportantInfo() {
  return (
    <section className="pt-[90px] lg:pt-[120px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      <h2 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[80px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px] text-center mb-[32px] lg:mb-[48px]">
        Важная информация
      </h2>

      <div className="flex pt-[48px] flex-col gap-[64px] lg:gap-[56px]">
        {/* Block 1: Формат мероприятия + Dino */}
        <div>
          <InfoBlockMobile
            align="left"
            title="Формат мероприятия"
            imageSrc={asset('Block7_dino.png')}
            {...mobileInfoImages.formatDino}
          >
            <p>К&nbsp;сожалению, формат площадки не&nbsp;предполагает детской зоны или аниматоров</p>
            <p>Чтобы вечер прошёл комфортно для всех, будем благодарны, если вы&nbsp;сможете провести этот день вместе с&nbsp;нами без детей</p>
          </InfoBlockMobile>

          <div className="hidden lg:flex flex-row items-center justify-between gap-[48px]">
            <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col gap-[20px] shrink-0">
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-serif font-semibold text-[54px] leading-[60px] text-[#768c5e] tracking-[-1.62px]">
                  Формат мероприятия
                </h3>
                <div className="w-full h-px bg-[#768c5e]/20" />
              </div>
              <div className="flex flex-col gap-[16px] text-[24px] leading-[34px] text-[#514e4e] font-light tracking-[-0.96px]">
                <p>К&nbsp;сожалению, формат площадки не&nbsp;предполагает детской зоны или аниматоров</p>
                <p>Чтобы вечер прошёл комфортно для всех, будем благодарны, если вы&nbsp;сможете провести этот день вместе с&nbsp;нами без детей</p>
              </div>
            </div>
            <div className="w-[248px] shrink-0">
              <img src={asset('Block7_dino.png')} alt="" className="w-full h-auto object-contain max-h-[356px]" />
            </div>
          </div>
        </div>

        {/* Block 2: Подарки + Gift card */}
        <div>
          <InfoBlockMobile
            align="right"
            title="Подарки"
            imageSrc={asset('Block7_gift_card.png')}
            {...mobileInfoImages.gifts}
          >
            <p>
              Самым комфортным подарком для нас будет{' '}
              <span className="font-medium">денежный вклад в&nbsp;нашу будущую семейную жизнь</span>
            </p>
            <p>Мы будем искренне благодарны за&nbsp;такой подарок и&nbsp;с&nbsp;радостью направим его на&nbsp;наши общие мечты и&nbsp;планы</p>
          </InfoBlockMobile>

          <div className="hidden lg:flex flex-row items-center justify-between gap-[48px]">
            <div className="w-auto shrink-0 flex justify-center">
              <img src={asset('Block7_gift_card.png')} alt="" className="w-[499px] h-auto object-contain" />
            </div>
            <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col gap-[20px] shrink-0">
              <div className="flex flex-col gap-[16px]">
                <h3 className="font-serif font-semibold text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                  Подарки
                </h3>
                <div className="w-full h-px bg-[#768c5e]/20" />
              </div>
              <div className="flex flex-col gap-[16px] text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
                <p>
                  Самым комфортным подарком для нас будет{' '}
                  <span className="font-medium">денежный вклад в&nbsp;нашу будущую семейную жизнь</span>
                </p>
                <p>Мы будем искренне благодарны за&nbsp;такой подарок и&nbsp;с&nbsp;радостью направим его на&nbsp;наши общие мечты и&nbsp;планы</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: Цветы + Kitty */}
        <div>
          <InfoBlockMobile
            align="left"
            title="Цветы"
            imageSrc={asset('Block7_kitty.png')}
            {...mobileInfoImages.flowersKitty}
          >
            <p>Мы очень любим цветы, но&nbsp;знаем, что их&nbsp;жизнь, к&nbsp;сожалению, слишком короткая</p>
            <p>
              Поэтому мы будем благодарны, если вместо букета вы&nbsp;просто добавите эту сумму к&nbsp;подарку. Так ваш подарок останется с&nbsp;нами надолго и&nbsp;станет частью наших будущих планов
            </p>
          </InfoBlockMobile>

          <div className="hidden lg:flex flex-row items-center justify-between gap-[48px]">
            <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col gap-[20px] shrink-0">
              <div className="flex flex-col gap-[16px]">
                <h3 className="font-serif font-semibold text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                  Цветы
                </h3>
                <div className="w-full h-px bg-[#768c5e]/20" />
              </div>
              <div className="flex flex-col gap-[16px] text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
                <p>Мы очень любим цветы, но&nbsp;знаем, что их&nbsp;жизнь, к&nbsp;сожалению, слишком короткая</p>
                <p>
                  Поэтому мы будем благодарны, если вместо букета вы&nbsp;просто добавите эту сумму к&nbsp;подарку. Так ваш подарок останется с&nbsp;нами надолго и&nbsp;станет частью наших будущих планов
                </p>
              </div>
            </div>
            <div className="w-[385px] shrink-0">
              <img src={asset('Block7_kitty.png')} alt="" className="w-full h-auto object-contain max-h-[337px]" />
            </div>
          </div>
        </div>

        {/* Block 4: Трансфер + Branch */}
        <div>
          <InfoBlockMobile
            align="right"
            title="Трансфер"
            imageSrc={asset('branch.png')}
            {...mobileInfoImages.transferBranch}
          >
            <p>Мы хотим, чтобы вам было максимально комфортно добраться до&nbsp;площадки и&nbsp;обратно</p>
            <p>
              Поэтому для гостей будет организован{' '}
              <span className="font-medium">трансфер до&nbsp;места проведения свадьбы и&nbsp;обратно в&nbsp;город</span>
            </p>
            <p>Ближе к&nbsp;дате праздника мы пришлём всю подробную информацию: время отправления, точку сбора и&nbsp;другие детали</p>
            <p>Просто приезжайте в&nbsp;хорошем настроении — об&nbsp;остальном мы уже позаботились</p>
          </InfoBlockMobile>

          <div className="hidden lg:flex flex-row items-center justify-between gap-[48px]">
            <div className="w-[400px] shrink-0 flex justify-center">
              <img src={asset('Block7_branch.png')} alt="" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col gap-[20px] shrink-0">
              <div className="flex flex-col gap-[16px]">
                <h3 className="font-serif font-semibold text-[54px] leading-[1.11] text-[#768c5e] tracking-[-0.03em]">
                  Трансфер
                </h3>
                <div className="w-full h-px bg-[#768c5e]/20" />
              </div>
              <div className="flex flex-col gap-[16px] text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
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
      </div>
    </section>
  );
}
