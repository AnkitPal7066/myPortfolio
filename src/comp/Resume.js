import React from 'react';
import resumeFile from '../Images/AnkitsResume.pdf'; // Import the resume file
import { Helmet } from 'react-helmet';

export default function Resume() {
    const downloadResume = () => {
        const anchor = document.createElement('a');
        anchor.href = resumeFile;
        anchor.download = 'Ankit_Pal_Resume.pdf'; // Set the filename for download
        anchor.click();
    }

    return (
        <div className="py-8">
            <Helmet>
                <title>Ankit Pal - Resume</title>
                <meta name="description" content="View Ankit Pal's resume, showcasing skills, experience, and qualifications in frontend development, JavaScript, React.js, and more." />
            </Helmet>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-transparent rounded-lg shadow-lg overflow-hidden">
                    <div className="py-6">
                        <div className="flex justify-between px-8">
                            <div>
                                <h1 className="text-3xl font-bold text-red-600 mb-4">Resume</h1>
                                <p className="text-gray-400 mb-6">This is my resume...</p>
                            </div>
                            <div className="w-full md:w-1/3 flex justify-center md:justify-end pt-2">
                                <button onClick={downloadResume} className="inline-block h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-md">
                                    Download Resume
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mb-6">
                            <div className="w-full md:w-2/3">
                                <embed src={resumeFile} type="application/pdf" width="100%" height="600px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
