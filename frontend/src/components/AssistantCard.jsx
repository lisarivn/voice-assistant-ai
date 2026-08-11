import { Mic } from "lucide-react";

function AssistantCard() {
    return (
        <section className="assistant-card">

            <h2>Як я можу вам допомогти?</h2>

            <div className="assistant-content">

                <p className="assistant-status">
                    Натисніть кнопку мікрофона, щоб щось запитати.
                </p>

                <button className="mic-btn">
                    <Mic />
                </button>

            </div>

        </section>
    );
}

export default AssistantCard;