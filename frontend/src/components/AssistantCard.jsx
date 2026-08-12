import { useRef, useState } from "react";
import { Mic, Volume2 } from "lucide-react";

function AssistantCard() {
    const [isRecording, setIsRecording] = useState(false);
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);

    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        const mediaRecorder = new MediaRecorder(stream);

        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                audioChunksRef.current.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(
                audioChunksRef.current,
                { type: "audio/webm" }
            );

            console.log("Recorded audio:", audioBlob);

            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();

        mediaRecorderRef.current = mediaRecorder;
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleMicrophone = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const handleTTS = async () => {
        if (!text.trim() || isSpeaking) {
            return;
        }

        try {
            setIsSpeaking(true);

            const response = await fetch(
                `http://localhost:8000/tts?text=${encodeURIComponent(text)}`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Не вдалося озвучити текст.");
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            const audio = new Audio(audioUrl);

            audio.onended = () => {
                URL.revokeObjectURL(audioUrl);
                setIsSpeaking(false);
            };

            await audio.play();

        } catch (error) {
            console.error("TTS error:", error);
            setIsSpeaking(false);
        }
    };

    return (
        <section className="assistant-card">

            <h2>Як я можу вам допомогти?</h2>

            <button
                className="mic-btn"
                onClick={handleMicrophone}
            >
                <Mic />
            </button>

            <div className="assistant-content">

                <p className="assistant-status">
                    {isRecording
                        ? "Слухаю..."
                        : "Натисніть кнопку мікрофона, щоб щось запитати."
                    }
                </p>

                <div className="tts-box">

                    <textarea
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        placeholder="Введіть текст, щоб його озвучити"
                        rows="1"
                    />

                    <button
                        className="tts-btn"
                        onClick={handleTTS}
                        disabled={!text.trim() || isSpeaking}
                        title="Озвучити текст"
                    >
                        <Volume2 />
                    </button>

                </div>

            </div>

        </section>
    );
}

export default AssistantCard;