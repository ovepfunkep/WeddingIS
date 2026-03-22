/** Тихая отправка RSVP в Google Forms (POST на /formResponse), без fetch — см. план RSVP Google Forms. */

const ENTRY = {
  NAME: '1498135098',
  ATTENDANCE: '877086558',
  WITH_PARTNER: '1182914336',
  PARTNER_NAME: '59636874',
  TRANSFER: '1167548801',
  DRINKS: '343194175',
  DRINK_WISHES: '1735473919',
};

const ATTENDANCE_LABEL = {
  yes: 'С радостью буду',
  no: 'К сожалению, не смогу',
};

const WITH_PARTNER_LABEL = {
  yes: 'Да',
  no: 'Нет',
};

const TRANSFER_LABEL = {
  yes: 'Да, поеду на трансфере',
  no: 'Нет, доберусь самостоятельно',
};

/** Совпадает с подписями в Form.jsx / Google Form */
export const DRINK_VALUE_TO_GOOGLE_LABEL = {
  sparkling: 'Игристое / шампанское',
  wine: 'Вино',
  strong: 'Крепкий алкоголь',
  'non-alcoholic': 'Безалкогольные напитки',
  anything: 'Я за любой кипиш',
};

function entry(nameId) {
  return `entry.${nameId}`;
}

/**
 * Список { name: 'entry.xxx', value } для application/x-www-form-urlencoded.
 * При attendance === 'no' только имя и присутствие (остальные вопросы в Google должны быть необязательными).
 */
export function buildGoogleFormFields(form) {
  const fields = [];

  fields.push({ name: entry(ENTRY.NAME), value: form.name.trim() });
  fields.push({
    name: entry(ENTRY.ATTENDANCE),
    value: form.attendance === 'yes' ? ATTENDANCE_LABEL.yes : ATTENDANCE_LABEL.no,
  });

  if (form.attendance === 'no') {
    return fields;
  }

  fields.push({
    name: entry(ENTRY.WITH_PARTNER),
    value: form.withPartner === 'yes' ? WITH_PARTNER_LABEL.yes : WITH_PARTNER_LABEL.no,
  });
  fields.push({
    name: entry(ENTRY.PARTNER_NAME),
    value: form.withPartner === 'yes' ? form.partnerName.trim() : '',
  });
  fields.push({
    name: entry(ENTRY.TRANSFER),
    value: form.transfer === 'yes' ? TRANSFER_LABEL.yes : TRANSFER_LABEL.no,
  });

  for (const key of form.drinks) {
    const label = DRINK_VALUE_TO_GOOGLE_LABEL[key];
    if (label) {
      fields.push({ name: entry(ENTRY.DRINKS), value: label });
    }
  }

  fields.push({ name: entry(ENTRY.DRINK_WISHES), value: form.drinkWishes.trim() });
  return fields;
}

export function getGoogleFormResponseUrl() {
  const id = import.meta.env.VITE_GOOGLE_FORM_ID?.trim();
  if (!id) return null;
  return `https://docs.google.com/forms/d/e/${id}/formResponse`;
}

export function isGoogleRsvpConfigured() {
  return Boolean(getGoogleFormResponseUrl());
}

let iframeEl;

function getOrCreateIframe() {
  if (typeof document === 'undefined') return null;
  if (!iframeEl) {
    iframeEl = document.createElement('iframe');
    iframeEl.name = 'google-rsvp-silent';
    iframeEl.title = 'RSVP';
    iframeEl.setAttribute('aria-hidden', 'true');
    iframeEl.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden';
    document.body.appendChild(iframeEl);
  }
  return iframeEl;
}

/**
 * POST в скрытый iframe. Успех по первому iframe load или fallback-таймеру (ответ Google из другого origin не читаем).
 */
export function submitRsvpToGoogle(formState) {
  const actionUrl = getGoogleFormResponseUrl();
  if (!actionUrl) {
    return Promise.reject(new Error('NO_FORM_ID'));
  }

  const fieldList = buildGoogleFormFields(formState);
  const iframe = getOrCreateIframe();
  if (!iframe) {
    return Promise.reject(new Error('NO_DOCUMENT'));
  }

  return new Promise((resolve, reject) => {
    const formEl = document.createElement('form');
    formEl.method = 'POST';
    formEl.action = actionUrl;
    formEl.target = iframe.name;
    formEl.acceptCharset = 'UTF-8';

    for (const { name, value } of fieldList) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      formEl.appendChild(input);
    }

    document.body.appendChild(formEl);

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(maxTimer);
      iframe.removeEventListener('load', onLoad);
      formEl.remove();
      resolve();
    };

    const onLoad = () => finish();

    const fallbackTimer = window.setTimeout(finish, 1200);
    const maxTimer = window.setTimeout(finish, 5000);

    iframe.addEventListener('load', onLoad);
    try {
      formEl.submit();
    } catch (err) {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(maxTimer);
      iframe.removeEventListener('load', onLoad);
      formEl.remove();
      reject(err);
    }
  });
}
