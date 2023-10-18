import { memo, useEffect, useState } from 'react';
import '../assets/_content.css';
import Post from './Post';
const POSTS = [
    {
        title: 'Lorem ipsum dolor sit amet',
        thumbnail: '/images/css.png',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        thumbnail: '/images/html.png',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        thumbnail: '/images/url.png',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.',
    },
];
const Content = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        setPosts(POSTS);
    }, []);
    function navClickHandler() {
        const nav = document.querySelector('.nav');
        if (!nav.classList.contains('show')) nav.classList.add('show');
    }
    return (
        <>
            <div className="header">
                <div className="nav-icon" onClick={navClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div>
                <a href="/">
                    <img src="/images/logo.png" alt="..." />
                </a>
            </div>
            <section className="text">
                <h3>Lorem ipsum dolor sit asmet?</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat
                    placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis.
                    Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue
                    justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue.
                    Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
                    convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci,
                    sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper
                    turpis pellentesque a.
                </p>
            </section>
            <section className="posts">
                {posts && posts.map((post, index) => <Post key={index} post={post} />)}
            </section>
        </>
    );
};
export default memo(Content);
