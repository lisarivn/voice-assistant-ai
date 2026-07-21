console.log("SCRIPT START");

let mediaRecorder = null;
let audioChunks = [];

// TEXT TO SPEECH
async function sendTTS() {
    try {
        const text = document.getElementById("text").value.trim();

        if (!text) return;

        const response = await fetch(
            "http://127.0.0.1:8000/tts?text=" + encodeURIComponent(text),
            {
                method: "POST"
            }
        );

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const audio = document.getElementById("audio");

        audio.pause();
        audio.src = "";
        audio.load();

        audio.src = url;

        await audio.play();

        document.getElementById("text").value = "";
    }
    catch (err) {
        console.error(err);
        alert("TTS Error");
    }
}

// START RECORDING
async function startRecording() {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });

        audioChunks = [];

        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {

            if (event.data.size > 0) {
                audioChunks.push(event.data);
            }

        };

        mediaRecorder.start();

        document.getElementById("status").innerText =
            "🎤 Recording...";

    }
    catch (err) {

        console.error(err);

        document.getElementById("status").innerText =
            "Cannot access microphone";

    }

}

// STOP RECORDING
async function stopRecording() {

    if (!mediaRecorder) return;

    mediaRecorder.stop();

    mediaRecorder.onstop = async () => {

        try {

            document.getElementById("status").innerText =
                "Uploading...";

            const audioBlob = new Blob(audioChunks, {
                type: "audio/webm"
            });

            const formData = new FormData();

            formData.append(
                "file",
                audioBlob,
                "recording.webm"
            );

            const response = await fetch(
                "http://127.0.0.1:8000/stt",
                {
                    method: "POST",
                    body: formData
                }
            );

            if (!response.ok) {

                throw new Error(await response.text());

            }

            const data = await response.json();

            console.log(data);

            document.getElementById("text").value =
                data.text ?? "";

            document.getElementById("status").innerText =
                "✅ Done";

        }
        catch (err) {

            console.error(err);

            document.getElementById("status").innerText =
                "❌ STT Error";

        }

    };

}

console.log("SCRIPT END");