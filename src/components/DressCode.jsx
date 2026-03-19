import { asset } from '../utils/assets';

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
  return (
    <section className="pt-[60px] lg:pt-[100px] max-w-[1440px] mx-auto px-[16px] lg:px-[124px]">
      <div className="flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[48px]">
        {/* Text */}
        <div className="w-full lg:w-[42%] flex flex-col gap-[20px] lg:gap-[32px]">
          <h2 className="font-serif font-semibold text-[42px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em]">
            Дресс-код
          </h2>
          <div className="flex flex-col gap-[16px] lg:gap-[24px] text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] font-light tracking-[-0.04em]">
            <p>
              Мы с&nbsp;особым трепетом готовимся к&nbsp;этому дню и&nbsp;нам будет очень приятно, если ваши образы станут частью этой красивой картины
            </p>
            <p>
              Пожалуйста, постарайтесь{' '}
              <span className="font-medium">не&nbsp;выбирать</span>
              {' '}для образа: чёрный, белый и&nbsp;красный цвета, чтобы сохранить общую атмосферу и&nbsp;палитру праздника
            </p>
            <p>
              <span className="font-medium">Для мужчин</span>
              {' '}чёрный и&nbsp;белый цвета в&nbsp;классических костюмах{' '}
              <span className="font-medium">допускаются</span>
            </p>
          </div>
        </div>

        {/* Palette — aligned to top of text block */}
        <div className="w-full lg:w-[58%] flex flex-col gap-[32px]">
          {/* Main colors */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[4px] text-[18px] lg:text-[24px] text-[#514e4e] tracking-[-0.04em]">
              <p className="font-medium leading-[1.42]">Основные цвета:</p>
              <p className="font-light leading-[1.42]">Оливковый, зелёный, тёмный шоколад, коричневый, песочный, бежевый</p>
            </div>
            <div className="flex gap-[2px]">
              {mainPalette.map((c) => (
                <div key={c.name} className="flex-1 aspect-square min-w-0">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#768c5e]/20" />

          {/* Secondary colors */}
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[4px] text-[18px] lg:text-[24px] text-[#514e4e] tracking-[-0.04em]">
              <p className="font-medium leading-[1.42]">Дополнительные цвета:</p>
              <p className="font-light leading-[1.42]">Серебряный, пыльный розовый</p>
            </div>
            <div className="flex gap-[2px]">
              {secondaryPalette.map((c) => (
                <div key={c.name} className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
