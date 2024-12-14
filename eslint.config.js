import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react/jsx-indent-props': ['error', 2], // Indentasi atribut JSX multiline dengan 2 spasi
      'react/jsx-first-prop-new-line': ['error', 'multiline'], // Atribut pertama di baris baru jika multiline
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }], // Spasi sebelum tanda tutup tag
      'react/jsx-wrap-multilines': ['error'], // Bungkus multiline JSX
      'react/jsx-max-props-per-line': ['error', { when: 'always' }], // Satu atribut per baris untuk JSX
      'react/jsx-child-element-spacing': 'error', // Tambahkan spasi antara elemen anak JSX
      'react/jsx-sort-props': ['error', { callbacksLast: true }], // Urutkan atribut JSX secara alfabet
      'no-multi-spaces': ['error'], // Tidak boleh ada spasi berlebihan
      'object-curly-spacing': ['error', 'always'], // Spasi dalam kurung kurawal
      'array-bracket-spacing': ['error', 'never'], // Tidak ada spasi dalam array
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },    
  },
]
