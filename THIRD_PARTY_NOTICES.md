# Third-Party Notices

This project uses third-party open-source software and machine learning
models. These components remain subject to their respective licenses.

This file is provided to document the main third-party technologies and
assets used by the project.

---

## OpenAI Whisper

Used for speech-to-text (STT) recognition.

- Project: OpenAI Whisper
- Source: https://github.com/openai/whisper
- License: MIT
- Copyright: OpenAI

Whisper source code and model weights are distributed under the MIT License.

---

## Piper

Used for local text-to-speech (TTS) synthesis.

- Project: Piper
- Source: https://github.com/OHF-Voice/piper1-gpl
- Package: piper-tts
- License: GPL-3.0-or-later

Piper is a third-party text-to-speech engine and is not developed as part
of this project.

The license of the Piper software is separate from the licenses of the
individual voice models used with it.

---

## Ukrainian Piper Voice Model

Used for Ukrainian text-to-speech synthesis.

- Model: uk_UA-ukrainian_tts-medium
- Language: Ukrainian (uk_UA)
- Source:
  https://huggingface.co/rhasspy/piper-voices/tree/main/uk/uk_UA/ukrainian_tts/medium

According to the model information, the model was trained from scratch
using the OHF-Voice voice dataset. The dataset is licensed under CC0.

Additional information about this model and its origin is available in:

`backend/app/models/tts/MODEL_CARD.md`

The voice model was not created or trained as part of this project.

---

## FastAPI

Used as the backend web framework and for the REST API.

- Project: FastAPI
- Source: https://github.com/fastapi/fastapi
- License: MIT

---

## React

Used for the frontend user interface.

- Project: React
- Source: https://github.com/facebook/react
- License: MIT

---

## Vite

Used as the frontend development and build tool.

- Project: Vite
- Source: https://github.com/vitejs/vite
- License: MIT

---

## Lucide

Used for interface icons through the `lucide-react` package.

- Project: Lucide
- Source: https://github.com/lucide-icons/lucide
- License: ISC

Some portions of Lucide originate from Feather Icons and are distributed
under the MIT License. Refer to the upstream Lucide license for the
complete licensing information.

---

## React Icons

Used for selected interface and brand icons.

- Project: React Icons
- Source: https://github.com/react-icons/react-icons
- License: MIT

React Icons includes icons originating from multiple icon projects.
Individual icon sets may be subject to their respective upstream licenses.

---

# Disclaimer

The licenses listed above apply to the respective third-party components
and do not imply ownership of those components by this project's author.

For complete license terms, copyright notices, and possible additional
requirements, refer to each project's original source and license files.