# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

```
react-forminate--react-vite-demo
├─ .prettierignore
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ ApiDrivenForm.tsx
│  │  ├─ ComplexForm.tsx
│  │  ├─ ContainerForm.tsx
│  │  ├─ CustomSubmit.tsx
│  │  ├─ DataGridView.tsx
│  │  ├─ FormWithCustomSkeletonLoading.tsx
│  │  ├─ GridBasedLayout.tsx
│  │  ├─ index.ts
│  │  ├─ samples
│  │  │  ├─ AdvancedFormWithAPI.tsx
│  │  │  ├─ FormWithPropFunctions.tsx
│  │  │  └─ SimpleForm.tsx
│  │  ├─ SimpleForm.tsx
│  │  ├─ ValidationPattern.tsx
│  │  └─ Visibility.tsx
│  ├─ data
│  │  ├─ ApiDrivenFormData.ts
│  │  ├─ ComplexFormData.ts
│  │  ├─ ContainerFormData.tsx
│  │  ├─ CustomSubmitFormData.ts
│  │  ├─ CustomValidation.ts
│  │  ├─ DataGridViewFromData.ts
│  │  ├─ GridBasedLayoutData.ts
│  │  ├─ index.ts
│  │  ├─ SimpleFormData.ts
│  │  └─ Visibility.ts
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
```
react-forminate--react-vite-demo
├─ .prettierignore
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ ApiDrivenForm.tsx
│  │  ├─ compare
│  │  │  ├─ ReactFormik.tsx
│  │  │  ├─ ReactForminateForm.tsx
│  │  │  ├─ ReactHookForm.tsx
│  │  │  └─ README.md
│  │  ├─ ComplexForm.tsx
│  │  ├─ ContainerForm.tsx
│  │  ├─ CustomSubmit.tsx
│  │  ├─ DataGridView.tsx
│  │  ├─ FormWithCustomSkeletonLoading.tsx
│  │  ├─ GridBasedLayout.tsx
│  │  ├─ index.ts
│  │  ├─ samples
│  │  │  ├─ AdvancedFormWithAPI.tsx
│  │  │  ├─ CompleteRegisterationForm.css
│  │  │  ├─ CompleteRegistrationForm.tsx
│  │  │  ├─ CustomFieldRegister.tsx
│  │  │  ├─ CustomFormSubmit.css
│  │  │  ├─ CustomFormSubmit.tsx
│  │  │  ├─ CustomSubmit2.tsx
│  │  │  ├─ FormWithPropFunctions.tsx
│  │  │  ├─ GroupForm.tsx
│  │  │  ├─ NewValidationFormats.tsx
│  │  │  ├─ ProductFeedback.tsx
│  │  │  └─ SimpleForm.tsx
│  │  ├─ SimpleForm.tsx
│  │  ├─ ValidationPattern.tsx
│  │  └─ Visibility.tsx
│  ├─ data
│  │  ├─ ApiDrivenFormData.ts
│  │  ├─ ComplexFormData.ts
│  │  ├─ ContainerFormData.tsx
│  │  ├─ CustomSubmitFormData.ts
│  │  ├─ CustomValidation.ts
│  │  ├─ DataGridViewFromData.ts
│  │  ├─ GridBasedLayoutData.ts
│  │  ├─ index.ts
│  │  ├─ SimpleFormData.ts
│  │  └─ Visibility.ts
│  ├─ index.css
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```