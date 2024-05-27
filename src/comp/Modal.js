import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl transform transition-all w-fit p-6 pt-2">
                <div className="flex justify-end">
                    <button
                        className="text-gray-500 hover:text-gray-900"
                        onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="flex gap-4">
                    <a href='https://www.facebook.com/ankit.pal.9693' target='_blank' className="hover:shadow-md w-24 hover:shadow-slate-500 p-2 rounded-lg flex flex-col items-center">
                        <i className="ri-facebook-fill text-3xl"></i>
                        <p className="font-semibold">Facebook</p>
                    </a>
                    <a href='https://www.instagram.com/pal_ankit7066/' target='_blank' className="hover:shadow-md w-24 hover:shadow-slate-500 p-2 rounded-lg flex flex-col items-center">
                        <i className="ri-instagram-fill text-3xl"></i>
                        <p className="font-semibold">Instagram</p>
                    </a>
                    <a href='https://github.com/AnkitPal7066' target='_blank' className="hover:shadow-md w-24 hover:shadow-slate-500 p-2 rounded-lg flex flex-col items-center">
                        <i className="ri-github-fill text-3xl"></i>
                        <p className="font-semibold">Github</p>
                    </a>
                    <a href='' className="hover:shadow-md w-24 hover:shadow-slate-500 p-2 rounded-lg flex flex-col items-center">
                        <i className="ri-linkedin-box-fill text-3xl"></i>
                        <p className="font-semibold">Linkedin</p>
                    </a>
                    <a href=''className="hover:shadow-md w-24 hover:shadow-slate-500 p-2 rounded-lg flex flex-col items-center">
                        <i className="ri-mail-send-fill text-3xl"></i>
                        <p className="font-semibold">Email</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;
