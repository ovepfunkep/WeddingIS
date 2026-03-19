import { asset } from '../utils/assets';

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBF7]">
      <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[700px] lg:min-h-[766px] py-12 md:py-0">
        {/* Background floral bows */}
        <img
          src={asset('Block1_Background.png')}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50 left-[200px] md:left-0"
        />

        {/* Pendant (top-left) */}
        <img
          src={asset('Block1_Pendant.png')}
          alt=""
          className="absolute left-[-38px] md:left-6 lg:left-[190px] top-[-30px] md:top-[-60px] lg:top-[0px] w-[250px] md:w-[260px] lg:w-[380px] object-contain pointer-events-none z-30 drop-shadow-lg"
        />

        {/* Polaroid (bottom-right) */}
        <img
          src={asset('Block1_Polaroid.png')}
          alt=""
          className="absolute right-[-20px] md:right-0 lg:right-[160px] bottom-[-10px] md:bottom-[10px] w-[100px] md:w-[220px] lg:w-[330px] object-contain pointer-events-none z-30"
        />

        {/* Main text frame */}
        <div className="relative z-20 bg-[#768c5e] mx-4 md:mx-8 px-6 py-8 md:px-16 md:py-12 lg:px-[100px] lg:py-[80px] rounded-[30px] md:rounded-[40px] flex flex-col items-center gap-6 md:gap-8 shadow-xl max-w-[900px] w-full">
          <h1 className="font-serif font-semibold text-[42px] md:text-[72px] lg:text-[96px] leading-[1.05] text-white tracking-[-0.03em] text-center">
            Иван и София
          </h1>
          <div className="w-32 md:w-[279px] h-px bg-white/40" />
          <p className="font-serif text-[36px] md:text-[52px] lg:text-[62px] leading-[0.9] text-white tracking-[-0.03em] text-center">
            24.08.2026
          </p>
          <div className="w-32 md:w-[279px] h-px bg-white/40" />
          <p className="font-infant italic text-[24px] md:text-[40px] lg:text-[56px] text-white tracking-[-0.01em] text-center leading-normal">
            «Я выбираю тебя каждый день»
          </p>
        </div>
      </div>
    </section>
  );
}
