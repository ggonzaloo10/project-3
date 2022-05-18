import React from 'react';
import './style-header.css';

export default function Header() {
    return <header>
        
        <div className="menu">

            <svg width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="48" y2="1.5" stroke="#CDC392" stroke-width="3" />
                <line x1="16" y1="15.5" x2="48" y2="15.5" stroke="#CDC392" stroke-width="3" />
                <line x1="28" y1="29.5" x2="48" y2="29.5" stroke="#CDC392" stroke-width="3" />
            </svg>

        </div>
    </header>;
}