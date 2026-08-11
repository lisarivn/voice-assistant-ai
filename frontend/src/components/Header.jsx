import { Mic } from "lucide-react";

function Header() {
    return (
        <header>
            <div className="header-title">
                <Mic />
                <h1>Твій голосовий помічник</h1>
            </div>
        </header>
    );
}

export default Header;