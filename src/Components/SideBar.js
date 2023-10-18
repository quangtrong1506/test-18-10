import { memo } from 'react';
import '../assets/_sidebar.css';

const SideBar = () => {
    function focusTintClickHandler() {
        const nav = document.querySelector('.nav');
        if (nav.classList.contains('show')) nav.classList.remove('show');
    }
    return (
        <>
            <div className="app__nav nav show">
                <ul>
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className="focus-tint" onClick={focusTintClickHandler}></div>
            </div>
        </>
    );
};
export default memo(SideBar);
