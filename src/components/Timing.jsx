import { asset } from '../utils/assets';

const schedule = [
  { time: '15:00', label: 'Встреча гостей', side: 'left' },
  { time: '16:00', label: 'Церемония', side: 'right' },
  { time: '17:00', label: 'Начало банкета', side: 'left' },
  { time: '21:30', label: 'Торт', side: 'right' },
  { time: '23:00', label: 'Трансфер', side: 'left' },
];

function TimelineItem({ time, label, align = 'left' }) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <p className="font-serif font-semibold text-[42px] lg:text-[50px] leading-[48px] lg:leading-[56px] text-white tracking-[-0.42px] lg:tracking-[-0.5px]">
        {time}
      </p>
      <p className="text-[20px] pt-[4px] lg:text-[28px] leading-[26px] lg:leading-[38px] text-white font-light tracking-[-0.8px] lg:tracking-[-1.12px]">
        {label}
      </p>
      <div className="w-full h-px bg-white/30 mt-[8px]" />
    </div>
  );
}

function Dot() {
  return (
    <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center z-10 shrink-0">
      <div className="w-[12px] h-[12px] rounded-full bg-[#768c5e]" />
    </div>
  );
}

export default function Timing() {
  return (
    <section className="relative w-full bg-[#768c5e] overflow-hidden mt-[90px] lg:mt-[100px]">
      {/* BG texture */}
      <img
        src={asset('Block5_timing bg image.png')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-color-burn opacity-50 pointer-events-none"
      />

      {/* Pearl heart (top-left) */}
      <img
        src={asset('pearl_heart_image.png')}
        alt=""
        className="absolute rotate-[30deg] w-[100px] lg:w-[142px] right-[16px] lg:left-[18px] top-[140px] lg:top-[28px] pointer-events-none z-[5]"
      />
      {/* Pearl bow (bottom-right) */}
      <img
        src={asset('pearl bow image.png')}
        alt=""
        className="absolute rotate-[25deg] lg:rotate-[-30deg] left-0 bottom-[248px] lg:bottom-[60px] lg:left-[1194px] w-[96px] h-auto lg:w-[180px] pointer-events-none z-[5]"
      />

      {/* Bottom-left photo — desktop only */}
      <img
        src={asset('timing bottom_photo.png')}
        alt=""
        className="absolute left-[5px] lg:left-[-24px] top-[225px] lg:top-[432px] w-[150px] lg:w-[338px] pointer-events-none z-10"
      />
      {/* Top-right photo — desktop only */}
      <img
        src={asset('Block5_timing top_photo.png')}
        alt=""
        className="rotate-[-25deg] lg:rotate-[0deg] absolute right-[-10px]  bottom-[40px] lg:bottom-[482px] w-[200px] lg:w-[337px] pointer-events-none z-10"
      />

      {/* Content — centered vertically */}
      <div className="relative z-20 flex flex-col items-center justify-center pt-[32px] pb-[56px] px-[16px] lg:pt-[40px] lg:pb-[56px] lg:px-0">
        {/* Header with pearls */}
        <div className="flex items-center justify-center gap-[18px] lg:gap-[18px] mb-[40px] lg:mb-0">
          <img src={asset('MultiBlock_Pearl.png')} alt="" className="w-[32px] h-[32px]" />
          <h2 className="font-serif font-semibold text-[56px] lg:text-[74px] leading-[56px] lg:leading-[80px] text-white tracking-[-1.68px] lg:tracking-[-2.22px]">
            Тайминг
          </h2>
          <img src={asset('MultiBlock_Pearl.png')} alt="" className="w-[32px] h-[32px]" />
        </div>

        {/* Desktop timeline — alternating sides */}
        <div className="hidden lg:block relative w-[500px] h-[632px] mt-[72px]">
          {/* Continuous vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/40 -translate-x-1/2" />

          {schedule.map((item, i) => (
            <div
              key={`${item.time}-desktop-dot`}
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: `${96 + i * 110}px` }}
            >
              <Dot />
            </div>
          ))}

          {schedule.map((item, i) => (
            <div
              key={item.time}
              className="absolute left-0 right-0 grid grid-cols-[250px_250px] gap-x-0 items-start"
              style={{ top: `${i * 110}px` }}
            >
              {item.side === 'left' ? (
                <TimelineItem time={item.time} label={item.label} align="left" />
              ) : (
                <div />
              )}

              {item.side === 'right' ? (
                <TimelineItem time={item.time} label={item.label} align="right" />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline — alternating sides with centered axis */}
        <div className="lg:hidden relative w-full max-w-[431px] pb-[75px]">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/40" />

          {/* Dots: first at 71px, then every 140px */}
          {schedule.map((item, i) => (
            <div
              key={`${item.time}-dot`}
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: `${76 + i * 140}px` }}
            >
              <Dot />
            </div>
          ))}

          {schedule.map((item, i) => (
            <div
              key={item.time}
              className="relative grid grid-cols-2 gap-x-0 items-start"
              style={{ minHeight: i < schedule.length - 1 ? '140px' : 'auto' }}
            >
              {item.side === 'left' ? (
                <TimelineItem time={item.time} label={item.label} align="left" />
              ) : (
                <div />
              )}

              {item.side === 'right' ? (
                <TimelineItem time={item.time} label={item.label} align="right" />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
