import { HandFist } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col-reverse md:flex-row justify-center items-center gap-0 md:gap-10 py-10 bg-base-200 text-base-content">
            <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            <aside className="flex items-center  font-bold  text-3xl md:text-xl">
                <HandFist className="h-10 w-10" />
                <p className="font-bold">
                   ALINO
                    <span className="text-primary">DEV</span>
                </p>
                
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 justify-center">
                    <a
                        href="https://www.linkedin.com/in/alino-dev-773980424"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-1xl transition-colors hover:text-info flex items-center gap-2"
                    >
                        <FaLinkedin aria-hidden="true" />
                        LinkedIn
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="text-1xl transition-colors hover:text-error flex items-center gap-2"
                    >
                        <FaYoutube aria-hidden="true" />
                        YouTube
                    </a>
                    <a
                        href="https://www.facebook.com/thales.le.matheux"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-1xl transition-colors hover:text-info flex items-center gap-2"
                    >
                        <FaFacebook aria-hidden="true" />
                        Facebook
                    </a>
                </div>
            </nav>
            
        </footer>
    )
}

export default Footer