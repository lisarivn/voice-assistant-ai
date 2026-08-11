import {
    Search,
    House,
    Bell,
    UserRound,
    Settings,
    Mail
} from "lucide-react";

import LanguageSwitch from "./LanguageSwitch";
import { useState } from "react";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>

            <button
                className="menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="menu-label">МЕНЮ</span>
                <span className="logo-label">Voice Assistant</span>
            </button>

            <div className="sidebar-content">

                <div className="search-box">

                    <Search />

                    <input
                        type="text"
                        placeholder="Пошук..."
                    />

                </div>

                <div className="nav-divider"></div>

                <nav className="menu">

                    <a href="/" className="menu-item">
                        <House />
                        <span>Головна</span>
                    </a>

                    <a href="#" className="menu-item">
                        <Bell />
                        <span>Сповіщення</span>
                    </a>

                    <a href="#" className="menu-item">
                        <UserRound />
                        <span>Особистий кабінет</span>
                    </a>

                    <a href="#" className="menu-item">
                        <Settings />
                        <span>Налаштування</span>
                    </a>

                </nav>

                <div className="nav-divider"></div>

                <div className="contacts">

                    <h3 className="contacts-title">
                        Зворотний зв'язок
                    </h3>

                    <a
                        href="mailto:mahovikliza@gmail.com"
                        className="contact-item"
                    >
                        <Mail />

                        <div className="contact-mask">
                            <span className="contact-text">
                                mahovikliza@gmail.com
                            </span>
                        </div>
                    </a>

                    <a
                        href="https://github.com/lisarivn"
                        className="contact-item"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>◉</span>
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/yelyzaveta-makhovyk"
                        className="contact-item"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>in</span>
                        <span>LinkedIn</span>
                    </a>

                </div>

                <div className="nav-divider"></div>

                <LanguageSwitch />

            </div>

        </aside>
    );
}

export default Sidebar;