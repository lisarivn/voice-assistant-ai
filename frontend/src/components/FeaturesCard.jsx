import {
    Volume2,
    Mic,
    FileText,
    Image,
    Navigation
} from "lucide-react";

function FeaturesCard() {
    return (
        <section className="features-card">

            <h2>Можливості асистента</h2>

            <div className="features-list">

                <div className="feature-item">
                    <Volume2 />

                    <div>
                        <h3>Озвучувати тексти</h3>
                    </div>
                </div>

                <div className="feature-item">
                    <Mic />

                    <div>
                        <h3>Розпізнавати мову</h3>
                    </div>
                </div>

                <div className="feature-item">
                    <FileText />

                    <div>
                        <h3>Читання документів</h3>
                    </div>
                </div>

                <div className="feature-item">
                    <Image />

                    <div>
                        <h3>Описувати зображення</h3>
                    </div>
                </div>

                <div className="feature-item">
                    <Navigation />

                    <div>
                        <h3>Допомагати орієнтуватися</h3>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default FeaturesCard;