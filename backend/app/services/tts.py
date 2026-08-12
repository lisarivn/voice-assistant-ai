from pathlib import Path
import uuid
import wave

from piper.voice import PiperVoice


BASE_DIR = Path(__file__).resolve().parents[1]

MODEL_PATH = (
    BASE_DIR
    / "models"
    / "tts"
    / "uk_UA-ukrainian_tts-medium.onnx"
)

OUTPUT_DIR = BASE_DIR.parent / "audio" / "output"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


voice = PiperVoice.load(str(MODEL_PATH))


def text_to_speech(text: str) -> str:
    text = text.lower()

    filename = f"{uuid.uuid4()}.wav"
    path = OUTPUT_DIR / filename

    with wave.open(str(path), "wb") as wav_file:
        voice.synthesize_wav(text, wav_file)

    return str(path)