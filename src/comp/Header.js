import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ setIsModalOpen }) {
    const open = () => {
        setIsModalOpen(true);
    }

    return (
        <header className="text-gray-700 body-font bg-gray-900 py-1">
            <link rel="stylesheet" href="" />
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 p-3 pb-2">
                    <img src="https://remotebliss.com/wp-content/uploads/2021/09/jasper-ai.png" alt="Logo" className="w-10 h-10 text-white rounded-full" />
                    <span className="text-white ml-3 text-xl">Ankit Pal</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-gray-200 lg:pb-0 md:pb-0 pb-3">
                    <Link to="/myPortfolio" className="mx-6 hover:text-red-400 hover:cursor-pointer">Home</Link>
                    <Link to="/projects" className="mx-6 hover:text-red-400 hover:cursor-pointer">Projects</Link>
                    <Link to="/resume" className="mx-6 hover:text-red-400 hover:cursor-pointer">Resume</Link>
                </nav>
                <button onClick={open}
                    className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 md:mb-0 lg:mb-0 mb-5">
                    Let's Connect
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}
