import os
import tempfile

import whisper

# Load the Whisper model once at the module level to avoid reloading it for each request
model = whisper.load_model("small")


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