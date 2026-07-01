import pyttsx3
from pathlib import Path
import uuid

engine = pyttsx3.init()

OUTPUT_DIR = Path("audio/output")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def text_to_speech(text: str) -> str:
    filename = f"{uuid.uuid4()}.wav"
    path = OUTPUT_DIR / filename

    engine.save_to_file(text, str(path))
    engine.runAndWait()

    return str(path)