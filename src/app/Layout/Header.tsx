import { headers } from 'next/headers';
import ceviLogo from 'public\logoCeviSchweiz.svg';

export default function Header() {
    return (
        <header>
            <h1>Cevi Teilnehmerkarten</h1>

            <img src="/logoCeviSchweiz.svg" alt="Example Image" />
        </header>
    );
}

