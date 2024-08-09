# github-repo-search

`github-repo-search` — это современное веб-приложение, построенное с использованием React, TypeScript и Vite. Приложение позволяет пользователям искать репозитории на GitHub и просматривать их детали.

## Содержание

- [Особенности](#особенности)
- [Установка](#установка)

## Особенности

- Поиск репозиториев на GitHub по имени
- Просмотр деталей репозиториев, включая звезды, форки и вопросы
- Адаптивный и удобный интерфейс
- Построено с использованием TypeScript для проверки типов
- Быстрая разработка и сборка с помощью Vite

## Установка

Чтобы начать работу, клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/yourusername/github-repo-search.git
cd github-repo-search
yarn install
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
