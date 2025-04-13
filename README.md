# 🌟 BismillahBtn - Custom React Button Component

**BismillahBtn** is a lightweight, reusable, and fully customizable React button component. Designed with simplicity and flexibility in mind, it supports both light and dark modes and can be easily integrated into any React project.

[![npm version](https://img.shields.io/npm/v/bismillah-btn)](https://www.npmjs.com/package/bismillah-btn)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

---

## ✨ Features

- 🎨 Fully customizable styles
- 🌗 Light and dark mode support
- ⚛️ Simple integration with any React app
- 📦 Ready-to-use CSS styles
- 🧰 Lightweight and modular

---

## 📦 Installation

Install the package via npm:

```bash
npm install bismillah-btn
```

---

## 🚀 Usage

Import and use the button component in your React project:

```jsx
import { BismillahBtn } from 'bismillah-btn';
import '../node_modules/bismillah-btn/dist/index.css';

function App() {
  return (
    <div>
      <BismillahBtn isDark={false} text="Bismillah" width="200px" height="50px" />
    </div>
  );
}
```

✅ **Don't forget to import the CSS file** to apply the default styles.

---

## ⚙️ Props

| Prop        | Type     | Description                                 |
|-------------|----------|---------------------------------------------|
| `text`      | `string` | The text to display on the button           |
| `isDark`    | `boolean`| Optional: `true` or `false`                 |
| `width`     | `string` | Button width, Optional: `'200px'`           |
| `height`    | `string` | Button height, Optional: `'60px'`           |

---

## 📁 File Structure

```
npm-button-package/
│
├── src/
│   ├── index.js
│   └── styles.module.css
│
├── package.json
├── README.md
└── ...
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Support

If you find this package useful, please consider giving the repository a ⭐ on GitHub and sharing it with others!

---

**Made with ❤️ and Bismillah by [@osmanaydiin](https://github.com/osmanaydiin)**

