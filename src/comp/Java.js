import React from 'react';
import CryptoView from '../Images/CryptoView.png';
import Food2ForkJs from '../Images/Food2ForkJs.png'
import ImageS from '../Images/ImageS.png';
import Movie from '../Images/Movie.png'
import { Helmet } from 'react-helmet';

export default function Java() {
    return (
        <section className="text-gray-600 body-font">
            <Helmet>
                <title>JavaScript Projects | Frontend Development Showcase</title>
                <meta name="description" content="Explore my JavaScript projects, highlighting dynamic and interactive web applications. Each project showcases my proficiency in JavaScript and commitment to building engaging user experiences with modern web development techniques." />
            </Helmet>
            <div className="container px-5 pb-24 pt-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-medium title-font mb-4 text-gray-300">Welcome!</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">Explore my JavaScript projects, highlighting dynamic and interactive web applications. Each project showcases my proficiency in JavaScript and commitment to building engaging user experiences with modern web development techniques.</p>
                </div>
                <div className="flex flex-wrap -m-4">

                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg shadow-md shadow-white w-full h-56 object-cover object-center mb-4" src={CryptoView} />
                            <div className="w-full">
                                <a href="https://ankitpal7066.github.io/08CryptoSearch/">
                                    <h2 className="hover:underline title-font font-medium text-lg text-gray-300">Crypto<span className="text-red-600">View</span></h2>
                                </a>
                                <p className="mb-4 text-gray-300">Explore my CryptoView website to see top coins and search for specific cryptocurrencies. This project focuses on functionality over responsive design, showcasing my JavaScript skills in data fetching and display.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg shadow-md shadow-white w-full h-56 object-cover object-center mb-4" src={Food2ForkJs} />
                            <div className="w-full">
                                <a href="https://ankitpal7066.github.io/jsMCT/">
                                    <h2 className="hover:underline title-font font-medium text-lg text-gray-300">Food2 <span className="text-red-600">Fork</span></h2>
                                </a>
                                <p className="mb-4 text-gray-300">Visit Food2Fork to search for multiple recipes by typing ingredients in the search bar. It's a must-visit site for discovering a variety of delicious recipes effortlessly.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className="flex-shrink-0 rounded-lg shadow-md shadow-white w-full h-56 object-cover object-center mb-4" src={ImageS} />
                            <div className="w-full">
                                <a href="https://ankitpal7066.github.io/infiniteScrolling/">
                                    <h2 className="title-font hover:underline font-medium text-lg text-gray-300"><span className="text-red-600">Image</span>Search</h2>
                                </a>
                                <p className="mb-4 text-gray-300">Visit this website to search for images by typing in the search bar. Enjoy infinite scrolling as you continuously browse through an endless stream of images.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <img alt="team" className=" shadow-md shadow-white flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={Movie} />
                            <div className="w-full">
                                <a href="https://ankitpal7066.github.io/MovieSearch/" className="shadow-lg shadow-black">
                                    <h2 className="title-font hover:underline font-medium text-lg text-gray-300">Movie<span className="text-red-600">Search</span></h2>
                                </a>
                                <p className="mb-4 text-gray-300">Visit this movie search website to find films by typing their names. Instantly view ratings, release dates, and more details about your favorite movies.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
