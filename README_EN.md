# 🎙️ AI Voice Assistant for Visually Impaired People

🇺🇦 [Українська](README.md) | 🇬🇧 **English**

> A voice assistant designed to make interaction with digital technologies more accessible for people with visual impairments.

> 🚧 The project is currently under active development.

## 💡 About the Project

AI Voice Assistant is a web application focused on voice-based interaction.

At the current stage, the core speech features are implemented: users can record their voice directly in the browser and receive recognized text, or enter text and listen to generated speech.

The project currently focuses primarily on Ukrainian language support.

---

## ✨ Implemented Features

- 🎤 Speech-to-Text — converts spoken audio into text;
- 🔊 Text-to-Speech — converts text into speech;
- 🇺🇦 Ukrainian speech support;
- 🎙️ audio recording directly in the browser;
- 🔄 frontend-backend communication via HTTP API;
- ⚛️ web interface built with React;
- 📄 API testing and documentation with Swagger UI.

---

## 🛠️ Technologies

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

## ⚙️ How It Works

The application consists of a React frontend and a FastAPI backend.

### Speech-to-Text

```text
User's voice
     ↓
MediaRecorder
     ↓
audio/webm
     ↓
POST /stt
     ↓
Whisper
     ↓
Recognized text
     ↓
React UI
```

Audio is recorded in the browser using `MediaRecorder` and sent to the backend.

The Whisper `small` model is used for speech recognition. The recognized text is returned as JSON and displayed in the user interface.

### Text-to-Speech

```text
User's text
     ↓
POST /tts
     ↓
Piper TTS
     ↓
WAV
     ↓
Browser playback
```

Speech synthesis is implemented using Piper TTS with the Ukrainian voice model:

```text
uk_UA-ukrainian_tts-medium
```

The backend generates WAV audio, which is returned to the frontend and played in the browser.

The initial TTS implementation used `pyttsx3`, which was later replaced with Piper to provide better Ukrainian speech synthesis.

---

## 🔌 API

Main endpoints:

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/stt` | Audio → text |
| `POST` | `/tts` | Text → audio |
| `GET` | `/health` | Backend health check |

API documentation and testing are available through Swagger UI:

```text
http://127.0.0.1:8000/docs
```

---

## 📜 Licensing

This project is distributed under the terms of the GNU General Public License v3.0.

Additional information about third-party components and the TTS model:

- [`LICENSE`](LICENSE)
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md)
- [`MODEL_CARD.md`](backend/app/models/tts/MODEL_CARD.md)