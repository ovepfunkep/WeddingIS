import { useState, useRef, useLayoutEffect, useEffect, useId } from 'react';
import { asset } from '../utils/assets';

const INITIAL = {
  name: '',
  attendance: '',
  withPartner: '',
  partnerName: '',
  transfer: '',
  drinks: [],
  drinkWishes: '',
};

function RadioGroup({ name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-[4px]">
      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-[8px] py-[8px] cursor-pointer group">
          <span className="relative w-[24px] h-[24px] shrink-0">
            <span className={`absolute inset-[2px] rounded-full border-2 transition-colors ${value === opt.value ? 'bg-[#768c5e] border-[#768c5e]' : 'bg-white border-[#d1cfd7]'
              }`} />
            {value === opt.value && (
              <span className="absolute inset-[7px] rounded-full bg-white" />
            )}
          </span>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
          />
          <span className="text-[20px] leading-[26px] lg:text-[20px] lg:leading-[34px] font-light text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px] group-hover:text-[#768c5e] transition-colors">
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({ values, onChange, options }) {
  const toggle = (val) => {
    onChange(
      values.includes(val) ? values.filter((v) => v !== val) : [...values, val]
    );
  };

  return (
    <div className="flex flex-col gap-[4px]">
      {options.map((opt) => {
        const checked = values.includes(opt.value);
        return (
          <label key={opt.value} className="flex items-center gap-[8px] py-[8px] cursor-pointer group">
            <span className="relative w-[24px] h-[24px] shrink-0">
              <span className={`absolute inset-[2px] rounded-[4px] transition-colors ${checked ? 'bg-[#768c5e]' : 'bg-white border border-[#d1cfd7]'
                }`} />
              {checked && (
                <svg className="absolute inset-[4px] text-white" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l3.5 3.5L13 5" />
                </svg>
              )}
            </span>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(opt.value)}
              className="sr-only"
            />
            <span className="text-[20px] leading-[26px] lg:text-[20px] lg:leading-[34px] font-light text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px] group-hover:text-[#768c5e] transition-colors">
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-[#d1cfd7]/60" />;
}

export default function Form() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [transferTooltipOpen, setTransferTooltipOpen] = useState(false);
  const drinkWishesRef = useRef(null);
  const transferTooltipRef = useRef(null);
  const transferInfoBtnRef = useRef(null);
  const transferTooltipPanelRef = useRef(null);
  const transferTooltipArrowRef = useRef(null);
  const transferInfoClipId = useId().replace(/:/g, '');

  const set = (key) => (val) => setForm((p) => ({ ...p, [key]: val }));
  const setInput = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const isAttending = form.attendance !== 'no';

  /** Целевой шаг между дырками (px). Число дырок подбираем так, чтобы при justify-between промежутки были близки к этому значению. */
  const HOLE_DESKTOP_PX = 34;
  const HOLE_GAP_PX = 16;
  const [desktopHoleCount, setDesktopHoleCount] = useState(18);
  const formRef = useRef(null);
  const holeTrackRef = useRef(null);

  useLayoutEffect(() => {
    if (submitted) return;

    const measure = () => {
      const track = holeTrackRef.current;
      if (!track) return;
      const trackH = track.offsetHeight;
      if (trackH <= 0) return;
      /* n такое, что (trackH - n·h)/(n-1) ≈ GAP → n ≈ (trackH + GAP)/(h + GAP) */
      let n = Math.round((trackH + HOLE_GAP_PX) / (HOLE_DESKTOP_PX + HOLE_GAP_PX));
      n = Math.min(Math.max(n, 5), 24);
      setDesktopHoleCount(n);
    };

    measure();
    const form = formRef.current;
    if (!form || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => measure());
    ro.observe(form);
    return () => ro.disconnect();
  }, [submitted]);

  useLayoutEffect(() => {
    const el = drinkWishesRef.current;
    if (!el) return;
    // Пустое поле: не задаём height — работают rows + min-height, плейсхолдер переносится и не клипится
    if (!form.drinkWishes) {
      el.style.height = '';
      return;
    }
    el.style.height = 'auto';
    const minH = parseFloat(getComputedStyle(el).minHeight) || 88;
    el.style.height = `${Math.max(el.scrollHeight, minH)}px`;
  }, [form.drinkWishes, isAttending]);

  useEffect(() => {
    if (!transferTooltipOpen) return;
    const t = window.setTimeout(() => setTransferTooltipOpen(false), 5000);
    const onOutside = (e) => {
      const root = transferTooltipRef.current;
      if (root && !root.contains(e.target)) setTransferTooltipOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('touchstart', onOutside, { passive: true });
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('touchstart', onOutside);
    };
  }, [transferTooltipOpen]);

  const resetTransferTooltipPanelStyle = () => {
    const panel = transferTooltipPanelRef.current;
    if (!panel) return;
    panel.style.position = '';
    panel.style.left = '';
    panel.style.top = '';
    panel.style.right = '';
    panel.style.bottom = '';
    panel.style.width = '';
    panel.style.transform = '';
    panel.style.visibility = '';
    panel.style.marginBottom = '';
    panel.style.marginLeft = '';
    panel.style.marginRight = '';
    const arrow = transferTooltipArrowRef.current;
    if (arrow) {
      arrow.style.marginLeft = '';
      arrow.style.alignSelf = '';
    }
  };

  useLayoutEffect(() => {
    if (!transferTooltipOpen) {
      resetTransferTooltipPanelStyle();
      return;
    }

    const mq = window.matchMedia('(max-width: 1023px)');
    const positionMobile = () => {
      if (!mq.matches) {
        resetTransferTooltipPanelStyle();
        return;
      }
      const btn = transferInfoBtnRef.current;
      const panel = transferTooltipPanelRef.current;
      if (!btn || !panel) return;

      const pad = 16;
      const gap = 8;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const maxW = Math.min(240, vw - pad * 2);
      const btnR = btn.getBoundingClientRect();

      // Сброс классов вроде bottom-full / translate — иначе fixed+top конфликтуют с bottom:100%
      panel.style.position = 'fixed';
      panel.style.bottom = 'auto';
      panel.style.right = 'auto';
      panel.style.marginBottom = '0';
      panel.style.marginLeft = '0';
      panel.style.marginRight = '0';
      panel.style.transform = 'none';
      panel.style.width = `${maxW}px`;

      const tipH = Math.max(panel.getBoundingClientRect().height, panel.offsetHeight, 1);
      let left = btnR.left + btnR.width / 2 - maxW / 2;
      left = Math.max(pad, Math.min(left, vw - maxW - pad));

      let top = btnR.top - tipH - gap;
      if (top < pad) {
        top = btnR.bottom + gap;
      }
      top = Math.max(pad, Math.min(top, vh - tipH - pad));

      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;

      // Стрелка в потоке (flex), не absolute — иначе с overflow-x-hidden на main её клипает
      const arrow = transferTooltipArrowRef.current;
      if (arrow) {
        const panelRect = panel.getBoundingClientRect();
        const iconCx = btnR.left + btnR.width / 2;
        const half = 4;
        let ml = iconCx - panelRect.left - half;
        const inset = 10;
        ml = Math.max(inset, Math.min(ml, panelRect.width - 8 - inset));
        arrow.style.alignSelf = 'flex-start';
        arrow.style.marginLeft = `${ml}px`;
      }
    };

    if (!mq.matches) {
      resetTransferTooltipPanelStyle();
      return;
    }

    requestAnimationFrame(() => {
      positionMobile();
      requestAnimationFrame(() => positionMobile());
    });
    window.addEventListener('resize', positionMobile);
    window.addEventListener('scroll', positionMobile, true);
    return () => {
      window.removeEventListener('resize', positionMobile);
      window.removeEventListener('scroll', positionMobile, true);
      resetTransferTooltipPanelStyle();
    };
  }, [transferTooltipOpen]);

  const handleTransferInfoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches) {
      setTransferTooltipOpen((open) => !open);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-[60px] lg:pt-[120px] w-full max-w-[990px] mx-auto">
        {/* Header — мобилка: 16px от края экрана; десктоп: как раньше */}
        <div className="px-[16px] lg:px-[32px]">
          <div className="text-center mb-[48px] lg:mb-[48px] max-w-[788px] mx-auto flex flex-col gap-[20px]">
            <h2 className="font-serif font-semibold text-[56px] lg:text-[74px] lg:leading-[80px] text-[#768c5e] tracking-[-1.68px] lg:tracking-[-2.22px]">
              Вы&nbsp;выбираете быть с&nbsp;нами в&nbsp;этот день?
            </h2>
            <p className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px] text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
              <span className="font-light">Пожалуйста, подтвердите своё присутствие до&nbsp;</span>
              <span className="font-medium">1 июля, </span>
              <span className="font-light">заполнив анкету. Это поможет нам лучше подготовиться к&nbsp;вечеру</span>
            </p>
          </div>
        </div>

        {/* Форма — мобилка: 8px от края экрана; десктоп: прежние боковые отступы секции */}
        <div className="px-[8px] lg:px-[32px]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-white rounded-[40px] lg:rounded-[80px] shadow-[0_0_10px_rgba(72,80,92,0.1)] px-[20px] py-[28px] lg:pl-[150px] lg:pr-[120px] lg:py-[60px] flex flex-col gap-[32px] lg:gap-[48px] lg:items-start"
          >
            {/* Десктоп: дырки от верха до низа дорожки, равные промежутки (justify-between); число — по высоте (ResizeObserver) */}
            {!submitted && (
              <div
                ref={holeTrackRef}
                className="pointer-events-none absolute left-[36px] top-[28px] bottom-[28px] hidden w-[34px] flex-col items-center justify-between lg:top-[60px] lg:bottom-[60px] lg:flex"
                aria-hidden
              >
                {Array.from({ length: desktopHoleCount }).map((_, i) => (
                  <img
                    key={i}
                    src={asset('Ellipse 22.png')}
                    alt=""
                    width={HOLE_DESKTOP_PX}
                    height={HOLE_DESKTOP_PX}
                    className="h-[34px] w-[34px] shrink-0 object-contain"
                  />
                ))}
              </div>
            )}

            {submitted ? (
              <div className="flex w-full flex-col items-center justify-center gap-[12px] py-[24px] lg:py-[40px] text-center">
                <h2 className="font-serif font-semibold text-[42px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em]">
                  Спасибо!
                </h2>
                <p className="text-[20px] lg:text-[24px] text-[#514e4e] font-light tracking-[-0.04em]">
                  {form.attendance === 'yes'
                    ? 'Ваш ответ записан. Мы очень ждём вас!'
                    : 'Ваш ответ записан. Мы будем скучать!'}
                </p>
              </div>
            ) : (
              <div className="flex w-full max-w-full flex-col gap-[32px] lg:max-w-[720px] lg:gap-[48px]">
                <div className="flex w-full flex-col">
                  {/* Мобилка: дорожка из 8 эллипсов, равномерные промежутки (justify-between), до полей 32px */}
                  <div className="mb-[32px] flex w-full items-center justify-between lg:hidden">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <img
                        key={i}
                        src={asset('Ellipse 22.png')}
                        alt=""
                        width={26}
                        height={26}
                        className="h-[26px] w-[26px] shrink-0 object-contain"
                      />
                    ))}
                  </div>

                  <div className="flex flex-col gap-[24px]">
                    {/* Name */}
                    <div className="flex flex-col gap-[10px]">
                      <label className="text-[20px] leading-[26px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">Имя</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={setInput('name')}
                        placeholder="Ваше имя и фамилия"
                        className="w-full border border-[#d1cfd7] rounded-[12px] px-[16px] py-[18px] text-[20px] leading-[26px] lg:text-[20px] text-[#514e4e] font-light tracking-[-0.8px] lg:tracking-[-0.96px] placeholder:text-[#8b8c94] outline-none focus:border-[#768c5e] transition-colors"
                      />
                    </div>

                    <Divider />

                    {/* Attendance */}
                    <div className="flex flex-col gap-[16px]">
                      <p className="text-[20px] leading-[26px] lg:leading-[34px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
                        Сможете ли вы присутствовать?
                      </p>
                      <RadioGroup
                        name="attendance"
                        value={form.attendance}
                        onChange={set('attendance')}
                        options={[
                          { value: 'yes', label: 'С радостью буду' },
                          { value: 'no', label: 'К сожалению, не смогу' },
                        ]}
                      />
                    </div>

                    {/* Conditional fields — hidden when "К сожалению, не смогу" */}
                    {isAttending && (
                      <>
                        <Divider />

                        {/* With partner */}
                        <div className="flex flex-col gap-[16px]">
                          <p className="text-[20px] leading-[26px] lg:leading-[34px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
                            Будете ли вы с партнёром?
                          </p>
                          <RadioGroup
                            name="withPartner"
                            value={form.withPartner}
                            onChange={set('withPartner')}
                            options={[
                              { value: 'yes', label: 'Да' },
                              { value: 'no', label: 'Нет' },
                            ]}
                          />
                        </div>

                        {/* Partner name (conditional) */}
                        {form.withPartner === 'yes' && (
                          <div className="flex flex-col gap-[10px]">
                            <label className="text-[20px] leading-[26px] lg:leading-[34px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
                              Как зовут вашего партнёра?
                            </label>
                            <input
                              type="text"
                              value={form.partnerName}
                              onChange={setInput('partnerName')}
                              placeholder="Имя и фамилия вашего партнёра"
                              className="w-full min-w-0 border border-[#d1cfd7] rounded-[12px] px-[12px] py-[18px] text-[20px] leading-[26px] text-[#514e4e] font-light tracking-[-0.8px] lg:px-[16px] lg:text-[20px] lg:tracking-[-0.96px] placeholder:text-[17px] placeholder:leading-[1.35] placeholder:tracking-[-0.04em] placeholder:text-[#8b8c94] lg:placeholder:text-[20px] lg:placeholder:leading-[26px] lg:placeholder:tracking-[-0.96px] outline-none focus:border-[#768c5e] transition-colors"
                            />
                          </div>
                        )}

                        <Divider />

                        {/* Transfer */}
                        <div className="flex flex-col gap-[16px]">
                          <div className="flex items-center gap-[8px]">
                            <p className="text-[20px] leading-[26px] lg:leading-[34px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
                              Нужен ли вам трансфер
                            </p>
                            {/* Info: мобилка — клик, закрытие снаружи или через 5 с; десктоп — hover */}
                            <div ref={transferTooltipRef} className="group relative inline-flex shrink-0 items-center">
                              <button
                                ref={transferInfoBtnRef}
                                type="button"
                                aria-label="Подробнее о трансфере"
                                aria-expanded={transferTooltipOpen}
                                className="flex h-[20px] w-[20px] shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 lg:cursor-help"
                                onClick={handleTransferInfoClick}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  aria-hidden
                                >
                                  <g clipPath={`url(#${transferInfoClipId})`}>
                                    <path
                                      d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 8.01088 16.7098 6.10322 15.3033 4.6967C13.8968 3.29018 11.9891 2.5 10 2.5C8.01088 2.5 6.10322 3.29018 4.6967 4.6967C3.29018 6.10322 2.5 8.01088 2.5 10Z"
                                      stroke="#8E8D94"
                                      strokeWidth="1.66667"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10 7.5H10.0088"
                                      stroke="#8E8D94"
                                      strokeWidth="1.66667"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M9.16663 10H9.99996V13.3333H10.8333"
                                      stroke="#8E8D94"
                                      strokeWidth="1.66667"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id={transferInfoClipId}>
                                      <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </button>
                              <div
                                ref={transferTooltipPanelRef}
                                className={`pointer-events-none z-50 flex max-w-[min(240px,calc(100vw-32px))] flex-col max-lg:items-stretch lg:items-center ${transferTooltipOpen ? 'max-lg:fixed max-lg:block' : 'max-lg:hidden'
                                  } relative hidden lg:absolute lg:bottom-full lg:left-1/2 lg:mb-[8px] lg:-translate-x-1/2 lg:group-hover:block`}
                                role="tooltip"
                              >
                                <div className="w-full min-w-0 rounded-[12px] bg-[#514e4e] px-[16px] py-[12px] text-center text-[14px] leading-[1.4] text-white shadow-lg lg:w-[240px]">
                                  Организованная доставка гостей от&nbsp;города до&nbsp;площадки и&nbsp;обратно
                                </div>
                                <div
                                  ref={transferTooltipArrowRef}
                                  className="z-10 mt-[-4px] h-[8px] w-[8px] shrink-0 rotate-45 bg-[#514e4e] lg:mx-auto"
                                  aria-hidden
                                />
                              </div>
                            </div>
                          </div>
                          <RadioGroup
                            name="transfer"
                            value={form.transfer}
                            onChange={set('transfer')}
                            options={[
                              { value: 'yes', label: 'Да, поеду на трансфере' },
                              { value: 'no', label: 'Нет, доберусь самостоятельно' },
                            ]}
                          />
                        </div>

                        <Divider />

                        {/* Drinks */}
                        <div className="flex flex-col gap-[10px]">
                          <p className="text-[20px] leading-[26px] lg:leading-[34px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
                            Предпочтения по напиткам
                          </p>
                          <CheckboxGroup
                            values={form.drinks}
                            onChange={set('drinks')}
                            options={[
                              { value: 'sparkling', label: 'Игристое / шампанское' },
                              { value: 'wine', label: 'Вино' },
                              { value: 'strong', label: 'Крепкий алкоголь' },
                              { value: 'non-alcoholic', label: 'Безалкогольные напитки' },
                              { value: 'anything', label: 'Я за любой кипиш' },
                            ]}
                          />
                        </div>

                        {/* Drink wishes — textarea с ростом по высоте, чтобы плейсхолдер и текст переносились целиком */}
                        <div className="flex flex-col gap-[10px]">
                          <p className="text-[20px] leading-[26px] lg:leading-[34px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.8px] lg:tracking-[-0.96px]">
                            Есть ли особые пожелания по напиткам?
                          </p>
                          <textarea
                            ref={drinkWishesRef}
                            rows={4}
                            value={form.drinkWishes}
                            onChange={setInput('drinkWishes')}
                            placeholder="Например: если будет апероль — я буду самым счастливым гостем"
                            className="box-border min-h-[140px] w-full resize-none overflow-y-auto border border-[#d1cfd7] rounded-[12px] px-[16px] py-[18px] text-[20px] leading-[26px] text-[#514e4e] font-light tracking-[-0.8px] placeholder:text-[#8b8c94] outline-none focus:border-[#768c5e] transition-colors lg:min-h-[154px] lg:leading-[34px] lg:tracking-[-0.96px]"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#768c5e] text-white rounded-full py-[16px] text-[20px] leading-[26px] lg:text-[20px] tracking-[-0.8px] lg:tracking-[-0.96px] hover:bg-[#6a7f53] active:bg-[#5f7249] transition-colors"
                >
                  {form.attendance === 'no' ? 'Продолжить' : 'Подтвердить участие'}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
