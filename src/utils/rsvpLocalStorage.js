import { RSVP_FORM_INITIAL } from '../constants/rsvpFormInitial';

const KEY = 'wedding2-rsvp-v1';

/** Восстановление после перезагрузки страницы */
export function loadPersistedRsvp() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.v !== 1 || typeof data.form !== 'object' || data.form === null) return null;
    const form = { ...RSVP_FORM_INITIAL, ...data.form };
    if (!Array.isArray(form.drinks)) form.drinks = [];
    return { form, submitted: Boolean(data.submitted) };
  } catch {
    return null;
  }
}

export function savePersistedRsvp(form, submitted) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(KEY, JSON.stringify({ v: 1, form, submitted }));
  } catch (e) {
    console.warn('[RSVP] localStorage:', e);
  }
}
