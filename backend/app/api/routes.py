from fastapi import APIRouter, UploadFile, File
from app.services.stt import speech_to_text
from app.services.tts import text_to_speech
from fastapi.responses import FileResponse
router = APIRouter()


# Speech to Text
@router.post("/stt")
async def stt(file: UploadFile = File(...)):
    audio_bytes = await file.read()
    text = speech_to_text(audio_bytes)
    return {"text": text}


# Text to Speech
@router.post("/tts")
async def tts(text: str):
    file_path = text_to_speech(text)

    return FileResponse(
        path=file_path,
        media_type="audio/wav",
        filename="speech.wav"
    )