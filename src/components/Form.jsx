import { useState } from 'react';

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
            <span className={`absolute inset-[2px] rounded-full border-2 transition-colors ${
              value === opt.value ? 'bg-[#768c5e] border-[#768c5e]' : 'bg-white border-[#d1cfd7]'
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
          <span className="text-[18px] lg:text-[20px] leading-[1.3] text-[#514e4e] font-light tracking-[-0.04em] group-hover:text-[#768c5e] transition-colors">
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
              <span className={`absolute inset-[2px] rounded-[4px] transition-colors ${
                checked ? 'bg-[#768c5e]' : 'bg-white border border-[#d1cfd7]'
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
            <span className="text-[18px] lg:text-[20px] leading-[1.3] text-[#514e4e] font-light tracking-[-0.04em] group-hover:text-[#768c5e] transition-colors">
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

function Toast({ message }) {
  return (
    <div
      className="fixed top-[24px] left-1/2 z-50 bg-[#768c5e] text-white px-[32px] py-[16px] rounded-[16px] shadow-lg text-[18px] tracking-[-0.04em] max-w-[420px] text-center"
      style={{ transform: 'translateX(-50%)', animation: 'toast-slide-in 0.3s ease-out' }}
    >
      {message}
    </div>
  );
}

export default function Form() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  const set = (key) => (val) => setForm((p) => ({ ...p, [key]: val }));
  const setInput = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const isAttending = form.attendance !== 'no';

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = form.attendance === 'yes'
      ? 'Спасибо! Мы очень рады, что вы будете с нами'
      : 'Спасибо за ответ. Мы будем скучать!';
    setToast(msg);
    setSubmitted(true);
    setTimeout(() => setToast(null), 5000);
  };

  if (submitted) {
    return (
      <>
        {toast && <Toast message={toast} />}
        <section className="py-[80px] lg:py-[100px] px-[16px] max-w-[990px] mx-auto text-center">
          <h2 className="font-serif font-semibold text-[42px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em] mb-[24px]">
            Спасибо!
          </h2>
          <p className="text-[20px] lg:text-[24px] text-[#514e4e] font-light tracking-[-0.04em]">
            {form.attendance === 'yes'
              ? 'Ваш ответ записан. Мы очень ждём вас!'
              : 'Ваш ответ записан. Мы будем скучать!'}
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      {toast && <Toast message={toast} />}
      <section className="pt-[60px] lg:pt-[100px] px-[16px] lg:px-[32px] max-w-[990px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[32px] lg:mb-[48px] max-w-[788px] mx-auto flex flex-col gap-[20px]">
          <h2 className="font-serif font-semibold text-[36px] lg:text-[74px] leading-[1.08] text-[#768c5e] tracking-[-0.03em]">
            Вы&nbsp;выбираете быть с&nbsp;нами в&nbsp;этот день?
          </h2>
          <p className="text-[18px] lg:text-[24px] leading-[1.42] text-[#514e4e] tracking-[-0.04em]">
            <span className="font-light">Пожалуйста, подтвердите своё присутствие до&nbsp;</span>
            <span className="font-medium">1 июля, </span>
            <span className="font-light">заполнив анкету. Это поможет нам лучше подготовиться к&nbsp;вечеру</span>
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white rounded-[40px] lg:rounded-[80px] shadow-[0_0_10px_rgba(72,80,92,0.1)] px-[24px] lg:pl-[150px] lg:pr-[120px] py-[40px] lg:py-[60px] flex flex-col gap-[40px] lg:gap-[48px]"
        >
          {/* Holes decoration — left side, desktop only */}
          <div className="hidden lg:flex absolute left-[36px] top-[80px] bottom-[80px] flex-col justify-between items-center">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[10px] rounded-full bg-[#f6f4f1]" />
            ))}
          </div>

          <div className="flex flex-col gap-[24px]">
            {/* Name */}
            <div className="flex flex-col gap-[10px]">
              <label className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">Имя</label>
              <input
                type="text"
                value={form.name}
                onChange={setInput('name')}
                placeholder="Ваше имя и фамилия"
                className="w-full border border-[#d1cfd7] rounded-[12px] px-[16px] py-[18px] text-[18px] lg:text-[20px] text-[#514e4e] font-light tracking-[-0.04em] placeholder:text-[#8b8c94] outline-none focus:border-[#768c5e] transition-colors"
              />
            </div>

            <Divider />

            {/* Attendance */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">
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
                  <p className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">
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
                    <label className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">
                      Как зовут вашего партнёра?
                    </label>
                    <input
                      type="text"
                      value={form.partnerName}
                      onChange={setInput('partnerName')}
                      placeholder="Имя и фамилия вашего партнёра"
                      className="w-full border border-[#d1cfd7] rounded-[12px] px-[16px] py-[18px] text-[18px] lg:text-[20px] text-[#514e4e] font-light tracking-[-0.04em] placeholder:text-[#8b8c94] outline-none focus:border-[#768c5e] transition-colors"
                    />
                  </div>
                )}

                <Divider />

                {/* Transfer */}
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[8px]">
                    <p className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">
                      Нужен ли вам трансфер
                    </p>
                    {/* Info icon with tooltip */}
                    <div className="relative group">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#768c5e] cursor-help">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M10 9v4M10 7h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <div className="absolute bottom-full left-1/2 mb-[8px] hidden group-hover:block z-50 pointer-events-none" style={{ transform: 'translateX(-50%)' }}>
                        <div className="bg-[#514e4e] text-white text-[14px] leading-[1.4] px-[16px] py-[12px] rounded-[12px] w-[240px] text-center shadow-lg">
                          Организованная доставка гостей от&nbsp;города до&nbsp;площадки и&nbsp;обратно
                        </div>
                        <div className="w-[8px] h-[8px] bg-[#514e4e] rotate-45 mx-auto mt-[-4px]" />
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
                  <p className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">
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

                {/* Drink wishes */}
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[18px] lg:text-[20px] font-medium text-[#514e4e] tracking-[-0.04em]">
                    Есть ли особые пожелания по напиткам?
                  </p>
                  <input
                    type="text"
                    value={form.drinkWishes}
                    onChange={setInput('drinkWishes')}
                    placeholder="Например: если будет апероль — я буду самым счастливым гостем"
                    className="w-full border border-[#d1cfd7] rounded-[12px] px-[16px] py-[18px] text-[18px] lg:text-[20px] text-[#514e4e] font-light tracking-[-0.04em] placeholder:text-[#8b8c94] outline-none focus:border-[#768c5e] transition-colors"
                  />
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#768c5e] text-white rounded-full py-[16px] text-[18px] lg:text-[20px] tracking-[-0.04em] hover:bg-[#6a7f53] active:bg-[#5f7249] transition-colors"
          >
            Подтвердить участие
          </button>
        </form>
      </section>
    </>
  );
}
