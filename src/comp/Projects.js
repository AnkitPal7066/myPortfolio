import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <section className="text-gray-200 body-font inset-0">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg shadow-lg shadow-black h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://d1pnnwteuly8z3.cloudfront.net/images/4d5bf260-c3d0-4f21-b718-8ede8d4ca716/fe58ac62-4e2a-48fa-b1c5-ce70918de93f.jpeg" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-200 mt-6 mb-3">JavaScript Projects</h2>
                        <p className="leading-relaxed text-base">
                            <span className="text-red-600">Explore</span> a collection <span className="text-blue-700">of</span> <span className="text-red-600">JavaScript</span> projects showcasing dynamic web applications, interactive features, and innovative functionalities. <span className="text-red-600">From</span> vanilla <span className="text-red-600">JavaScript</span> to advanced frameworks and libraries, these projects demonstrate versatility and creativity <span className="text-blue-700">in</span> <span className="text-red-600">FrontEnd Development</span>.
                        </p>
                        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                            <Link to="/javascript">View JavaScript Projects</Link>
                        </button>
                    </div>

                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 shadow-lg shadow-gray-800 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://miro.medium.com/max/13334/1*l5gYlnoOxfxdkaLUiQwGCg.png" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-200 mt-6 mb-3">React Js Projects</h2>
                        <p className="leading-relaxed text-base">
                            <span className="text-red-600">Dive</span> into a selection <span className="text-blue-700">of</span> <span className="text-red-600">React</span>.Js projects highlighting the power <span className="text-blue-700">of</span> component-based architecture, state management, and seamless user experiences. <span className="text-red-600">Discover</span> projects ranging <span className="text-blue-700">from</span> simple <span className="text-blue-700">UI</span> components to complex single-page applications, all built <span className="text-blue-700">with</span> the latest <span className="text-red-600">React</span>.js techniques and best practices.
                        </p>
                        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"><Link to="/react">View React.Js Projects</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
