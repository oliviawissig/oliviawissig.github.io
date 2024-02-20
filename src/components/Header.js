import '../assets/styles/Header.css';
import oliviaImg from '../assets/imgs/me.png';
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as darkBulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as lightBulb } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const systemPrefersDark = useMediaQuery({
        query: "(prefers-color-scheme: dark)",
      },
      undefined, (isSystemDark) => setIsDark(isSystemDark)
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            document.getElementById('main-container').classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.getElementById('main-container').classList.remove('dark');
        }
    }, [isDark]); 

    const handleMode = () => {
        if (isDark === true){
            setIsDark(false);
        }else{
            setIsDark(true);
        }
    }

    return ( 
        <header className="main-header">
            <div className='header-container'>
                <img src={oliviaImg} alt="a great pic of olivia wissig" className='header-pic'/>
                <div className='header-text-container'>
                    <h1>Olivia Wissig</h1>
                    <p>Sales Engineer, Support Engineer</p>
                    <span className='social-links'>
                    ↳<a href="https://www.facebook.com/oliviawissig">Facebook</a> 
                    ↳<a href="https://github.com/oliviawissig">Github</a> 
                    ↳<a href="https://www.linkedin.com/in/oliviawissig/">LinkedIn</a>
                    </span>
                </div>
                <div>
                    <button className='header-mode-toggle' onClick={() => handleMode()}>
                        {isDark === false ? <FontAwesomeIcon icon={darkBulb} /> : <FontAwesomeIcon icon={lightBulb} />}
                    </button>
                </div>
            </div>
        </header>
     );
}

export default Header;