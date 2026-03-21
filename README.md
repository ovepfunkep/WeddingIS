# Wedding site (React + Vite)

## GitHub Pages

В продакшене **нельзя** отдавать корневой `index.html` с `<script src="/src/main.jsx">` — такого файла на сервере нет. Нужен **результат сборки**:

```bash
npm run build
```

Публикуется содержимое папки **`dist/`** (там уже подключены `/WeddingIS/assets/...`).

- **Автодеплой:** в репозитории GitHub → **Settings → Pages → Build and deployment → Source: GitHub Actions**, затем пуш в `main`/`master` запускает [workflow](.github/workflows/deploy-github-pages.yml).
- **Вручную:** `npm run deploy` (gh-pages) — тоже заливает **`dist`**, не исходники.
- В [`vite.config.js`](vite.config.js) параметр `base` должен совпадать с именем репозитория: `/WeddingIS/` для URL `https://ovepfunkep.github.io/WeddingIS/`. Для сайта **в корне** `https://ovepfunkep.github.io/` задайте `base: '/'`.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
