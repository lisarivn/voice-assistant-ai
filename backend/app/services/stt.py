import whisper
import tempfile

model = whisper.load_model("base") 

# Speech to text function
def speech_to_text(file_bytes: bytes) -> str:
    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as tmp:
        tmp.write(file_bytes)
        tmp_path = tmp.name

    result = model.transcribe(tmp_path)
    return result["text"]