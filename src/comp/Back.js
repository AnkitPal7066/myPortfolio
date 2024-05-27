import React from 'react';
import Mine from '../Images/Mine.png'

export default function Back() {
    return (
        <section className="text-gray-300 body-font">
            <div className="container mx-auto flex py-24 pb-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">Welcome to Ankit's Portfolio
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-300">Welcome! I'm Ankit Pal, a passionate web developer dedicated to crafting immersive digital experiences. Dive into my portfolio to discover a collection of projects showcasing my skills in front-end and full-stack development. Let's build something amazing together!</p>
                    <div className="flex justify-center flex-col">
                        <h1 className="text-red-600 title-font sm:text-2xl text-xl mb-4 font-medium ">
                            Let's Collaborate
                        </h1>
                        <p className="text-gray-300">
                            Whether you're looking to collaborate on a project, explore new opportunities, or simply share ideas, I'm always eager to connect with fellow developers, designers, and enthusiasts. Feel free to reach out—I'd love to hear from you!
                        </p>
                    </div>
                </div>
                <div className="lg:max-w-lg md:w-2/3 w-4/6 pl-16 flex justify-center mt-1">
                    <img className="object-cover object-center w-2/3 rounded-full shadow-xl shadow-gray-950" alt="hero" src={Mine} />
                </div>
            </div>

            <hr className="lg:mx-64 bg-gray-400" />
            {/* ................................................................................................................. */}
            <section className="text-gray-600 body-font pt-16">
                <div className="px-28 title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">About</div>
                <div className="container px-5 py-24 pt-0 mx-auto flex items-center justify-center lg:justify-around flex-wrap">
                    <div className="lg:w-1/4 w-full mb-10 lg:mb-0 rounded-full shadow-xl shadow-black overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-fit w-fit" src="https://i1.sndcdn.com/artworks-CsWZqE2Ltkm3ZwcY-zv2pVA-t500x500.jpg" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-7 lg:items-start items-center shadow-md shadow-gray-600 p-4 rounded-lg">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 shadow-md shadow-gray-900 text-indigo-100">
                                <i className="ri-bring-to-front"></i>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">Frontend Developer</h2>
                                <p className="leading-relaxed text-base text-gray-400">As a passionate frontend developer, I craft visually stunning and highly responsive websites, optimized for performance and user engagement.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-7 lg:items-start items-center shadow-md shadow-gray-600 p-4 rounded-lg">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-indigo-100 shadow-sm shadow-black">
                                <i className="ri-quill-pen-line"></i>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">UI Designer</h2>
                                <p className="leading-relaxed text-base text-gray-400">Passionate UI designer crafting captivating, responsive websites. Designed multiple landing pages and established scalable design systems.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-7 lg:items-start items-center shadow-md shadow-gray-600 p-4 rounded-lg">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 shadow-md shadow-black text-indigo-100">
                            <i className="ri-reactjs-line"></i>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-300 text-lg title-font font-medium mb-1">React Developer</h2>
                                <p className="leading-relaxed text-base text-gray-400">Passionate React developer creating dynamic, responsive user interfaces. Designs captivating components, implements state management, and builds scalable applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
