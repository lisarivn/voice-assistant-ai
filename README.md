# 🎙️ AI Voice Assistant for Visually Impaired People

🇺🇦 **Українська** | 🇬🇧 [English](README_EN.md)

> Голосовий асистент для доступнішої взаємодії з цифровими технологіями для людей із порушеннями зору.

> 🚧 Проєкт перебуває в активній розробці.

## 💡 Про проєкт

AI Voice Assistant — вебзастосунок, орієнтований на голосову взаємодію.

На поточному етапі реалізовано базові функції роботи з мовленням: користувач може записати голос у браузері та отримати розпізнаний текст або ввести текст і прослухати згенероване мовлення.

Основна увага зараз зосереджена на українській мові.

---

## ✨ Реалізовано

- 🎤 Speech-to-Text — перетворення голосу на текст;
- 🔊 Text-to-Speech — перетворення тексту на мовлення;
- 🇺🇦 підтримка українського мовлення;
- 🎙️ запис аудіо безпосередньо у браузері;
- 🔄 взаємодія frontend та backend через HTTP API;
- ⚛️ вебінтерфейс на React;
- 📄 тестування API через Swagger UI.

---

## 🛠️ Технології

### Backend
- Python
- FastAPI
- Uvicorn
- OpenAI Whisper
- Piper TTS

### Frontend
- React
- Vite
- JavaScript / JSX
- Lucide React
- React Icons

---

## ⚙️ Як працює

Застосунок складається з React frontend та FastAPI backend.

### Speech-to-Text

```text
Голос користувача
       ↓
MediaRecorder
       ↓
audio/webm
       ↓
POST /stt
       ↓
Whisper
       ↓
Розпізнаний текст
       ↓
React UI
```

Аудіо записується у браузері за допомогою `MediaRecorder` та передається на backend.

Для розпізнавання мовлення використовується модель Whisper `small`. Результат повертається у форматі JSON та відображається в інтерфейсі.

### Text-to-Speech

```text
Текст користувача
      ↓
POST /tts
      ↓
Piper TTS
      ↓
WAV
      ↓
Відтворення у браузері
```

Для синтезу мовлення використовується Piper TTS та українська модель:

```text
uk_UA-ukrainian_tts-medium
```

Backend генерує WAV-аудіо, яке повертається frontend та автоматично відтворюється у браузері.

Початкова реалізація TTS використовувала `pyttsx3`, але згодом її було замінено на Piper для кращої роботи з українським мовленням.

---

## 🔌 API

Основні endpoint:

| Method | Endpoint | Призначення |
|---|---|---|
| `POST` | `/stt` | Аудіо → текст |
| `POST` | `/tts` | Текст → аудіо |
| `GET` | `/health` | Перевірка стану backend |

Документація та тестування API доступні через Swagger UI:

```text
http://127.0.0.1:8000/docs
```

---

## 📜 Ліцензування

Проєкт розповсюджується відповідно до умов GNU General Public License v3.0.

Детальна інформація про сторонні компоненти та TTS-модель:

- [`LICENSE`](LICENSE)
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)
- [`MODEL_CARD.md`](backend/app/models/tts/MODEL_CARD.md)