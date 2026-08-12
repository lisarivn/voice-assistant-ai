import { useRef, useState } from "react";
import { Mic } from "lucide-react";

function AssistantCard() {
    const [isRecording, setIsRecording] = useState(false);

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

            </div>

        </section>
    );
}

export default AssistantCard;