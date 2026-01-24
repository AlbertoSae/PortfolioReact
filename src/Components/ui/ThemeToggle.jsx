import { useEffect, useState } from 'react';
import './ThemeToggle.css';
import moonIcon from '../../assets/Icons/ThemeToggle/moon.png';
import sunIcon from '../../assets/Icons/ThemeToggle/sun.png';

const ThemeToggle = () => {
    // Initialize state from local storage or system preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme;
            }
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        }
        return 'dark'; // Default
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const currentIcon = theme === 'light' ? moonIcon : sunIcon;

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <div 
                className="theme-toggle-icon"
                style={{
                    maskImage: `url(${currentIcon})`,
                    WebkitMaskImage: `url(${currentIcon})`
                }}
            />
        </button>
    );
};

export default ThemeToggle;
