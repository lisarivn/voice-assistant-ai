import { Mic } from "lucide-react";

function AssistantCard() {
    return (
        <section className="assistant-card">

            <h2>Як я можу вам допомогти?</h2>

            <button className="mic-btn">
                <Mic />
            </button>

            <p className="assistant-status">
                Натисніть кнопку мікрофона, щоб щось запитати.
            </p>

        </section>
    );
}

export default AssistantCard;