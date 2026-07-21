import os
import tempfile

import whisper

# Download the model if it doesn't exist
model = whisper.load_model("base")


def speech_to_text(file_bytes: bytes, language: str = "uk") -> str:
    """
    Converts speech to text using the Whisper model.

    Args:
        file_bytes: Audio file in bytes.
        language: Speech language (default: Ukrainian).

    Returns:
        Recognized text.
    """

    with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as tmp:
        tmp.write(file_bytes)
        tmp_path = tmp.name

    try:
        result = model.transcribe(
            tmp_path,
            language=language
        )
        return result["text"].strip()

    finally:
        if os.path.exists(tmp_path):
            os.remove(tmp_path)