import React from 'react';
import GeekFoods from '../Images/GeekFoods.png';
import Food2Fork from '../Images/Food2Fork.png';
import { Helmet } from 'react-helmet';
import buybuddy from '../Images/buybuddy.png'

export default function Reacte() {
  return (
    <section className="text-gray-600 body-font">
      <Helmet>
        <title>React.js Projects | Frontend Development Showcase</title>
        <meta name="description" content="Explore my React projects, highlighting dynamic and interactive web applications. Each project showcases my proficiency in React and commitment to building engaging user experiences with modern web development techniques." />
      </Helmet>

      <div className="container px-5 pb-24 pt-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font mb-4 text-gray-300">Welcome!</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-300 text-base">Discover my React projects, showcasing expertise in dynamic, responsive web applications. Each project demonstrates my skills in modern web development and dedication to seamless user experiences with React.</p>
        </div>
        <div className="flex flex-wrap justify-around -m-4">

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="shadow-md shadow-white  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={GeekFoods} />
              <div className="w-full">
                <a href="https://ankitpal7066.github.io/NewReact/">
                  <h2 className="title-font font-medium text-lg text-gray-300">Geek<span className="text-red-600">Foods</span></h2>
                </a>
                <p className="mb-4 text-gray-300">Explore this website to view a visual showcase of my work with React and Tailwind CSS. Note that it serves as a design portfolio and does not include functional features.</p>
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
              <img alt="team" className="shadow-md shadow-white  flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={buybuddy} />
              <div className="w-full">
                <a href="https://ankitpal7066.github.io/buybuddy/">
                  <h2 className="title-font font-medium text-lg text-red-600">Buy<span className="text-gray-300">Buddy</span></h2>
                </a>
                <p className="mb-4 text-gray-300">Explore this shopping website to see my work with React and Tailwind CSS. Note that it demonstrates the design and functionality of a shopping cart and product navigation system.</p>
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
              <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center shadow-md shadow-white mb-4" src={Food2Fork} />
              <div className="w-full">
                <a href="https://ankitpal7066.github.io/food2Fork/">
                  <h2 className="title-font font-medium text-lg text-gray-300">Food2<span className="text-red-600">Fork</span></h2>
                </a>
                <p className="mb-4 text-gray-300">Visit this website to explore trending recipes and search for various dishes by entering ingredients. Discover the latest culinary trends and find inspiration for your next meal.</p>
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
