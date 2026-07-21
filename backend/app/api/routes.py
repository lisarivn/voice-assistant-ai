from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse

from app.services.stt import speech_to_text
from app.services.tts import text_to_speech

router = APIRouter()

# speech-to-text (STT) endpoint
@router.post("/stt")
async def stt(file: UploadFile = File(...)):
    try:
        audio_bytes = await file.read()
        text = speech_to_text(audio_bytes)

        return {
            "text": text
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    
# text-to-speech (TTS) endpoint
@router.post("/tts")
async def tts(text: str):

    if not text.strip():
        raise HTTPException(
            status_code=400,
            detail="Text is empty."
        )

    file_path = text_to_speech(text)

    return FileResponse(
        path=file_path,
        media_type="audio/wav",
        filename="speech.wav"
    )