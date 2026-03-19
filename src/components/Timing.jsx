import { asset } from '../utils/assets';

const schedule = [
  { time: '15:00', label: 'Встреча гостей', side: 'left' },
  { time: '16:00', label: 'Церемония', side: 'right' },
  { time: '17:00', label: 'Начало банкета', side: 'left' },
  { time: '21:30', label: 'Торт', side: 'right' },
  { time: '23:00', label: 'Трансфер', side: 'left' },
];

function TimelineItem({ time, label }) {
  return (
    <div>
      <p className="font-serif font-semibold text-[36px] lg:text-[50px] leading-[1.12] text-white tracking-[-0.01em]">
        {time}
      </p>
      <p className="text-[22px] lg:text-[28px] leading-[1.36] text-white font-light tracking-[-0.04em]">
        {label}
      </p>
      <div className="w-full h-px bg-white/30 mt-[8px]" />
    </div>
  );
}

function Dot() {
  return (
    <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center z-10 shrink-0">
      <div className="w-[12px] h-[12px] rounded-full border-[2px] border-[#768c5e]" />
    </div>
  );
}

export default function Timing() {
  return (
    <section className="relative w-full bg-[#768c5e] overflow-hidden mt-[60px] lg:mt-[100px] min-h-[600px] lg:h-[940px]">
      {/* BG texture */}
      <img
        src={asset('Block5_timing bg image.png')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-color-burn opacity-50 pointer-events-none"
      />

      {/* Pearl heart (top-left) */}
      <img
        src={asset('Block5_pearl heart image.png')}
        alt=""
        className="absolute left-[10px] lg:left-[18px] top-[12px] lg:top-[23px] w-[80px] lg:w-[142px] pointer-events-none z-[5]"
      />
      {/* Pearl bow (bottom-right) */}
      <img
        src={asset('Block5_pearl bow image.png')}
        alt=""
        className="absolute right-0 bottom-0 w-[120px] lg:w-[230px] pointer-events-none z-[5]"
      />

      {/* Bottom-left photo — desktop only */}
      <img
        src={asset('Block5_timing bottom_photo.png')}
        alt=""
        className="hidden lg:block absolute left-[-24px] bottom-0 w-[340px] pointer-events-none z-10"
      />
      {/* Top-right photo — desktop only */}
      <img
        src={asset('Block5_timing top_photo.png')}
        alt=""
        className="hidden lg:block absolute right-0 top-[21px] w-[337px] pointer-events-none z-10"
      />

      {/* Content — centered vertically */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full py-[40px] lg:py-0">
        {/* Header with pearls */}
        <div className="flex items-center justify-center gap-[12px] lg:gap-[18px] mb-[40px] lg:mb-[60px]">
          <img src={asset('MultiBlock_Pearl.png')} alt="" className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
          <h2 className="font-serif font-semibold text-[48px] lg:text-[74px] leading-[1.08] text-white tracking-[-0.03em]">
            Тайминг
          </h2>
          <img src={asset('MultiBlock_Pearl.png')} alt="" className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" />
        </div>

        {/* Desktop timeline — alternating sides */}
        <div className="hidden lg:block relative w-[500px]">
          {/* Continuous vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/40 -translate-x-1/2" />

          {schedule.map((item, i) => (
            <div
              key={item.time}
              className="relative flex items-start"
              style={{ minHeight: i < schedule.length - 1 ? '120px' : 'auto' }}
            >
              {/* Dot at center */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[4px]">
                <Dot />
              </div>

              {/* Left side */}
              <div className="w-1/2 pr-[32px] flex justify-end">
                {item.side === 'left' && <div className="text-right w-full"><TimelineItem time={item.time} label={item.label} /></div>}
              </div>

              {/* Right side */}
              <div className="w-1/2 pl-[32px]">
                {item.side === 'right' && <TimelineItem time={item.time} label={item.label} />}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile timeline — single column */}
        <div className="lg:hidden relative pl-[40px] w-full max-w-[340px]">
          {/* Vertical line */}
          <div className="absolute left-[25px] top-0 bottom-0 w-px bg-white/40" />

          {schedule.map((item) => (
            <div key={item.time} className="relative pb-[28px] last:pb-0">
              {/* Dot */}
              <div className="absolute left-[-25px] top-[6px]">
                <Dot />
              </div>
              <TimelineItem time={item.time} label={item.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
